import './NavBar.css'
import React from 'react'
import logo from '../../logo.png'

function NavBar() {
    return (
        <div className="navbar">
            <a href="#" className="logo">
                <img src={logo} alt=""></img>
            </a>
        </div>
    )
}

export default NavBar
