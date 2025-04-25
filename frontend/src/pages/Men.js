import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';

// Import Swiper styles
import 'swiper/css';
import { useState } from 'react';
import 'swiper/css/pagination';

import men1 from '../images/men1.webp'
import men2 from '../images/men2.webp'
import men3 from '../images/men3.webp'
import men4 from '../images/men4.webp'
import men5 from '../images/men5.webp'
import men6 from '../images/men6.webp'
import men7 from '../images/men7.webp'
import men8 from '../images/men8.webp'
import caromen from '../images/caromen.webp'
import bottom from '../images/bottom.webp'
import tshirt1 from '../images/tshirt1.webp'
import winter from '../images/winter.jpg'
import watches from '../images/watches.webp'
import men9 from '../images/men9.avif'
import men10 from '../images/men10.webp'
import tbag from '../images/tbag.jpg'

import './Men.css'
import { useSelector, useDispatch } from 'react-redux'
// import { addtoCart, deleteFromCart} from "../store/cartslice/Cartslice"
import Men1 from '../products/Men1';
import Men2 from '../products/Men2';
import { addtoCart, deleteFromCart } from '../store/cartslice/Cartslice';

const Men = () => {
    const CartProducts = useSelector((state) => state.cart.cartItems)
    const dispatch = useDispatch();
    const addcart = (item) => {
        dispatch(addtoCart(item))
        console.log(item);
        
    }
    const deleteCart = (item) => {
        dispatch(deleteFromCart(item))
    }

    const [activeCategory, setActiveCategory] = useState("SHIRTS");
    return (
        <div>
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><img src={men1} className='caro1' /></SwiperSlide>
                <SwiperSlide><img src={men2} className='caro1' /></SwiperSlide>
                <SwiperSlide><img src={men3} className='caro1' /></SwiperSlide>
                <SwiperSlide><img src={men4} className='caro1' /></SwiperSlide>

            </Swiper>
            <section className='mone'>
                <div className='container'>
                    <div className='men_1'>
                        <h1>Look Your Best In</h1>
                        <div className="categories">
                            {["SHIRTS", "BOTTOM WEAR", "T-SHIRTS", "WINTER WEAR"].map((category) => (
                                <button
                                    key={category}
                                    className={`category-btn ${activeCategory === category ? "active" : ""}`}
                                    onClick={() => setActiveCategory(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                        <div className='row'>
                            <div className='col-lg-3'>
                                <div class="card">
                                    <img src={men5} className="card-img-top default" alt="..." />
                                    {/* <img src={hover1} className='card-img-top hover' alt=" "/> */}
                                    <div class="card-body">

                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3'>
                                <div class="card">
                                    <img src={men6} className="card-img-top default" alt="..." />
                                    <div class="card-body">

                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3'>
                                <div class="card">
                                    <img src={men7} className="card-img-top default" alt="..." />
                                    <div class="card-body">

                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3'>
                                <div class="card">
                                    <img src={men8} className="card-img-top default" alt="..." />
                                    <div class="card-body">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='mentwo'>
                <h2 className="text-center">Explore Categories</h2>
                <div className="carousel-container">
                    <Swiper
                        spaceBetween={15}
                        slidesPerView={5}
                        navigation={true} // Enable navigation buttons
                        pagination={{ clickable: true }}
                        modules={[Navigation, Pagination]}
                        className="circleCarousel"
                        breakpoints={{
                            320: { slidesPerView: 2 },
                            480: { slidesPerView: 3 },
                            768: { slidesPerView: 4 },
                            1024: { slidesPerView: 5 },
                        }}
                    >
                        <SwiperSlide>
                            <div className="category">
                                <img src={caromen} className='circle-img' alt="Shirts" />
                                <p>Shirts</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="category">
                                <img src={bottom} className='circle-img' alt="Bottom Wear" />
                                <p>Bottom Wear</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="category">
                                <img src={tshirt1} className='circle-img' alt="T-Shirts" />
                                <p>T-Shirts</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="category">
                                <img src={winter} className='circle-img' alt="Winter Wear" />
                                <p>Winter Wear</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="category">
                                <img src={watches} className='circle-img' alt="Accessories" />
                                <p>Accessories</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="category">
                                <img src={tbag} className='circle-img' alt="Suits" />
                                <p>Travel Bag</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="category">
                                <img src={men7} className='circle-img' alt="Ethnic Wear" />
                                <p>Ethnic Wear</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="category">
                                <img src={men8} className='circle-img' alt="Footwear" />
                                <p>Casuals</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>

            <section className='menthree'>
                <h1>SHIRTS</h1>
                <div className='container'>
                    <div className='row gy-5'>
                        {Men1.map((item) => (
                            <div className='col-lg-3'>
                                <div className='page1'>
                                    <div className='card' key={item.id}>
                                        <img src={item.img} className='card-img top' />
                                        <div className='card-body'>
                                            <h5 className='card-title'>{item.des}</h5>
                                            <p className='card-text'>{item.ab}</p>
                                            <div class="row">
                                                <div className='col-lg-3 sett'>
                                                    <h6 className='card-text'>{item.price} </h6>
                                                </div>
                                                <div className='col-lg-3'>
                                                    <h6><s> {item.discount}</s></h6>
                                                    {CartProducts.find(Items => Items.id === item.id)?
                                                    (
                                                        (<button className='button' onClick={()=>{deleteCart(item)}}>Remove from Cart</button>)
                                                    ) :(
                                                        (<button className='button' onClick={()=>{addcart(item)}}>Add to Cart</button>)
                                                    )
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
            <section className='menfour'>
                <h1>Pants</h1>
                <div className='container'>
                    <div className='row gy-5'>
                        {Men2.map((item) => (
                            <div className='col-lg-3'>
                                <div className='page1'>
                                    <div className='card' key={item.id}>
                                        <img src={item.img} className='card-img top' />
                                        <div className='card-body'>
                                            <h5 className='card-title'>{item.des}</h5>
                                            <p className='card-text'>{item.ab}</p>
                                            <div class="row">
                                                <div className='col-lg-3 sett'>
                                                    <h6 className='card-text'>{item.price} </h6>
                                                </div>
                                                <div className='col-lg-3'>
                                                    <h6><s >{item.discount}</s></h6>
                                                    {CartProducts.find(Items => Items.id === item.id) ?
                                                        (
                                                            (<button className='button' onClick={() => { deleteCart(item) }}>Remove from Cart</button>)

                                                        ) : (
                                                            (<button className='button' onClick={() => { addcart(item) }}>Add to Cart</button>)
                                                        )
                                                    }
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
            <section className='menfive'>
                <div className='container'>
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingOne">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    <strong> Discover the world of heritage luxury</strong>
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Men’s New Arrivals by Anita Dongre

                                    Every new season brings with it stunning fashion trends captured exquisitely in Anita Dongre’s men’s new arrivals collection. Featuring everything from timeless aesthetics inspired by heritage art forms to classy, breathable and sustainable fabrics, Anita Dongre’s array of new arrival dress for men’s never fails to impress.



                                    Dress up for any occasion and become the star of the celebration – whether it is a festivity or your wedding. Choose from the latest trending styles in men’s ethnic wear – all crafted with love by Anita Dongre..</div>
                            </div>
                        </div>

                    </div>

                </div>
            </section >
        </div >
    )
}

export default Men
