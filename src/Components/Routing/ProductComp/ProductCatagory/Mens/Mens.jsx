import React, { useEffect, useState } from 'react'

import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import productStore from '../../../../Redux/Store';
import mensActionCreater from '../../../../Redux/ActionCreater/mensActionCreater';

const Mens = () => {

  const dispatch = useDispatch(productStore)
  const mensStoreData = useSelector((productStore) => {
    return productStore.mensProducts
  })

  useEffect(() => {
    if (!mensStoreData.length > 0) {
      axios.get("https://fakestoreapi.com/products/category/men's clothing").then((res) => {
        console.log("mens", res.data);

        dispatch(mensActionCreater(res.data))
      }).catch((error) => {
        alert("error found")
      })
    }
  }, [])
  return (
    <div className='electronic'>
      <h1>MEN'S CLOTHING PRODUCTS</h1>
      {mensStoreData.map((ele) => {
        return <>
          <Link to={`/productDetails/${ele.category}/${ele.id}`}>
            <h3>{ele.title}</h3>
          </Link>
        </>
      })}
    </div>
  )
}

export default Mens