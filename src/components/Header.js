import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <h1>Header</h1>
            <NavLink exact to="/" activeClassName="active" >Home</NavLink>
            <NavLink to="/blogs" activeClassName="active" >Blogs</NavLink>
            <NavLink to="/contact" activeClassName="active" >Contact</NavLink>
        </div>
    )
}

export default Header
