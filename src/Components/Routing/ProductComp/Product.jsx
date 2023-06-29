import React from 'react'
import './ProductComp.css'

import { Link, Outlet } from 'react-router-dom'

const Product = () => {


  return (
    <div className='ProductComp'>
      <div className="ProductCompLeftPannal">
        <ul>
          <Link to="electronic">
            <li>Electronic</li>
          </Link>
          <Link to="jewelery">
            <li>Jewelery</li>
          </Link>
          <Link to="mens">

            <li>Men'sClothing</li>
          </Link>
          <Link to="womens">
            <li>Women'sClothing</li>
          </Link>
        </ul>
      </div>
      <div className="ProductCompRightPannal">
        <Outlet />
      </div>
    </div>
  )
}

export default Product