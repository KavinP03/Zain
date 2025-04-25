import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import './Footers.css'

const Footers = () => {
    return (
        <div>
            <div className='container'>
                <div className='row goot'>
                    <div className='col-lg-4 contact'>
                        <h1>Contact Us</h1>
                        <ul>
                            <li>zeinfashions.in</li>
                            <li>+91 9542154142</li>
                            <li>123 Main St, City, Country</li>
                        </ul>
                    </div>
                    <div className='col-lg-4 social'>
                        <h1>Follow US </h1>
                        <ul>
                            <li><FaInstagram /></li>
                            <li><FaFacebookF /></li>
                            <li><FaXTwitter /></li>
                        </ul>
                    </div>
                    <div className='col-lg-4 cus'>
                        <h1>Customer Support</h1>
                        <ul>
                            <li>Returns/Exchange</li>
                            <li>Gift Voucher</li>
                            <li>Wishlist</li>
                            <li>Special</li>
                            <li>Customer Service</li>
                            <li>Site Maps</li>
                        </ul>
                    </div><hr/>
                    <div className='copy'>
                     © 2024 ZAIN FASHIONS. All Rights Reserved.
                     </div>
                </div>
            </div>
        </div>
    )
}

export default Footers
