import React from 'react'
import './About.css'
import abtcd1 from '../images/abtcd1.jpg'
import abtcd2 from '../images/abtcd2.jpg'
import abtcd3 from '../images/abtcd3.jpg'
import abtcd4 from '../images/abtcd4.jpg'
import hover1 from '../images/hover1.jpg'
import aboutbg from '../images/aboutbg.webp'
import abtbg2 from '../images/abtbg2.jpg'

const About = () => {
    return (
        <div>
            <section className='aboutone'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='abtbg'>

                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='abt_1'>
                                <div className='card'>
                                    <h1 className='card-title'>THOGHTFULLY CRAFTED</h1>
                                    <p className='card-text'>Rooted in Indian tradition, handcrafted by mastered artsians,<br />these modern-days keepsays make the perfect gifts. </p>
                                    <div className='card-body'>
                                        <button>SHOP NOW</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
            <section className='abouttwo'>
                <div className='container'>
                    <div className='about_2'>
                        <h1>CELEBS IN ZAIN</h1>
                        <div className='row'>
                            <div className='col-lg-3'>
                                <div class="card">
                                    <img src={abtcd1} className="card-img-top default" alt="..." />
                                    {/* <img src={hover1} className='card-img-top hover' alt=" "/> */}
                                    <div class="card-body">
                                        <p class="card-text">Blooming Meadows Embroidered Saree - Powder Blue.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3'>
                                <div class="card">
                                    <img src={abtcd2} className="card-img-top default" alt="..." />
                                    <div class="card-body">
                                        <p class="card-text">Abha Embroidered Lehenga Set-Yellow.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3'>
                                <div class="card">
                                    <img src={abtcd3} className="card-img-top default" alt="..." />
                                    <div class="card-body">
                                        <p class="card-text">The Liveforest Silk Dress-Green.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3'>
                                <div class="card">
                                    <img src={abtcd4} className="card-img-top default" alt="..." />
                                    <div class="card-body">
                                        <p class="card-text">Evaluna Embroidered Dress-Ivory.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='aboutthree'>
               <div className='container'>
                <div className='abt_3'>
                    <h1>MENS COLLECTION FOR EVERY OCCASION</h1>
                   <div className='row'>
                    <div className='col-lg-6 threeimg'>
                        <img src={aboutbg} className='abtimg'/>
                    </div>
                    <div className='col-lg-6 threecon'>
                       <div className='card'>
                        <h1 className='card-title'>Be The One to Set The Trend</h1>
                        <p className='card-text'>Redefine your style with Vibant hues and let every moment reflect your impeccable<br/>sense of effortless fashion.</p>
                       </div>
                    </div>
                   </div>
                </div>
               </div>
            </section>
            <section className='aboutfour'>
                <div className='abt_4'>
                    <img src={abtbg2}/>
                </div>
            </section>
            <section className='aboutfive'>
                <div className='abt_5'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='mail1'>
                                <h4>Enter into the world of ZAIN</h4>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='mail2'>
                                <input type='text' placeholder='Enter Your Mail Here'></input>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
