import React, { useEffect } from 'react'
import axios from 'axios'
import './Electronic.css'
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import productStore from '../../../../Redux/Store'
import electronicActionCreater from '../../../../Redux/ActionCreater/electronicActionCreater'


const Electronic = () => {

  const dispatch = useDispatch(productStore)

  const electronicStoreData = useSelector((productStore) => {
    return productStore.electronicProducts

  })
  console.log(electronicStoreData);
  useEffect(() => {
    if (!electronicStoreData.length > 0) {
      axios.get("https://fakestoreapi.com/products/category/electronics").then((res) => {

        dispatch(electronicActionCreater(res.data))
      }).catch((error) => {
        alert("error found")
      })
    }
  }, [])
  return (
    <div className='electronic'>

      <h1>ELECTRONICS PRODUCTS</h1>
      {electronicStoreData.map((ele) => {
        return <>
          <Link to={`/productDetails/${ele.category}/${ele.id}`}>
            <h3>{ele.title}</h3>
          </Link>
        </>
      })}
    </div>
  )
}

export default Electronic