import React from 'react'
import logo from '../images/logo.png'
import './Navbar.css'
import { GoUpload } from "react-icons/go";
import { RxUpdate } from "react-icons/rx";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <section className='navbar'>
        <div className='container'>
            <div className='nav_1'>
                <div className='row'>
                <div className='col-lg-1'>
                    
                    <img src={logo}/>
                </div>

                <div className='col-lg-8 nav_2'>
                    <ul>
                      <Link to='/'><li>HOME</li></Link> 
                      <Link to='/about'><li>ABOUT US</li></Link>  
                      <Link to='/men'><li>MEN</li></Link>  
                       <Link to='/women'><li>WOMEN</li></Link> 
                      <Link to='/trends'><li>TRENDS</li></Link>  
                    </ul>
                </div>
                <div className='col-lg-3'>
                  <div className='nav_3'>
                    <div className='icon1'>
                 <Link to='/cart'> <CiShoppingCart /></Link>  
                    </div>
                    <div className='icon2'>
                 <Link to='/upload'><GoUpload /></Link>   
                    </div>
                    <div className='icon3'>
                 <Link to='/update'><RxUpdate /></Link>   
                    </div>
                  </div>
                </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Navbar
