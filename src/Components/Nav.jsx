import React from 'react'
import '../css/main.css'
import { Link } from 'react-router-dom'

export default function Menu() {
    return (
        <div className='box'>
            <Link to='/menulist'>MENU</Link>
            <Link to='/cart'>CART</Link>
            <Link to='/'><div className='logo' /></Link>
            <Link to='/event'>EVENT</Link>
            <Link to='/store'>STORE</Link>
        </div>
    )
}
