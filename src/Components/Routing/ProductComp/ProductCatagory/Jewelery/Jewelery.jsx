import axios from 'axios'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'


import '../Electronic/Electronic.css'
import { useDispatch, useSelector } from 'react-redux'
import productStore from '../../../../Redux/Store'
import jeweleryActionCreater from '../../../../Redux/ActionCreater/jeweleryActionCreater'

const Jewelery = () => {

  const dispatch = useDispatch(productStore)
  const jeweleryStoreData = useSelector((productStore) => {
    return productStore.jeweleryProducts
  })
  useEffect(() => {
    if (!jeweleryStoreData.length > 0) {
      axios.get("https://fakestoreapi.com/products/category/jewelery").then((res) => {
        console.log(res.data);
        dispatch(jeweleryActionCreater(res.data))
      }).catch((error) => {
        alert("error found")
      })
    }
  }, [])
  return (
    <div className='electronic'>
      <h1>JEWELERY PRODUCTS</h1>
      {jeweleryStoreData.map((ele) => {
        return <>
          <Link to={`/productDetails/${ele.category}/${ele.id}`}>
            <h3>{ele.title}</h3>
          </Link>
        </>
      })}
    </div>
  )
}

export default Jewelery