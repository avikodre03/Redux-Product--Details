import React from 'react'
import './NavBar.css'
import { Link,NavLink } from 'react-router-dom'
const NavBar = () => {
  return (
    <div className='NavBar'>
      <h1>Geekster</h1>
      <div className="link">
        {/* <Link to='/'>Home</Link> */}
        <NavLink to='/'   activeClassName="active">Home</NavLink>
        <Link to='/Profile'>Profile</Link>
        <Link to='/Product'>Product</Link>
        <Link to='/todoList'>Todo List</Link>
        <Link to='/ContactUS'>Contact Us</Link>

        {/* <a href="/">Home</a>
        <a href="/Profile">Profile</a>
        <a href="/Product">Product</a>
        <a href="/ContactUS">Contact Us</a> */}

      </div>
    </div>
  )
}

export default NavBar