import React, { useEffect } from 'react'

import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import productStore from '../../../../Redux/Store';
import womenActionCreater from '../../../../Redux/ActionCreater/womenActionCreater';

const Women = () => {

  const dispatch = useDispatch(productStore)
  const womenStoreData = useSelector((productStore) => {
    return productStore.womensProducts
  })
  useEffect(() => {
    if (!womenStoreData.length > 0) {

      axios.get("https://fakestoreapi.com/products/category/women's clothing").then((res) => {
        console.log(res.data);

        dispatch(womenActionCreater(res.data))
      }).catch((error) => {
        alert("error found")
      })
    }
  }, [])
  return (
    <div className='electronic'>
      <h1>WOMENS CLOTHING PRODUCTS</h1>
      {womenStoreData.map((ele) => {
        return <>
          <Link to={`/productDetails/${ele.category}/${ele.id}`}>
            <h3>{ele.title}</h3>
          </Link>
        </>
      })}
    </div>
  )
}

export default Women