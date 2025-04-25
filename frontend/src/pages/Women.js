
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import './Women.css'
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import "swiper/css/navigation";
import "swiper/css/pagination";
import wcaro1 from '../images/wcaro1.jpg'
import wcaro2 from '../images/wcaro2.jpg'
import wcaro3 from '../images/wcaro3.jpg'
import wc1 from '../images/wc1.jpg'
import wc2 from '../images/wc2.jpg'
import wc3 from '../images/wc3.jpg'
import wc4 from '../images/wc4.jpg'
import Women1 from "../products/Women1";
import Women2 from "../products/Women2";
import { addtoCart,deleteFromCart } from "../store/cartslice/Cartslice";
import { useSelector,useDispatch } from "react-redux";

const Women = () => {
    const CartProducts=useSelector((state)=> state.cart.cartItems)
    const dispatch = useDispatch();
    const addcart=(item)=>{
        dispatch(addtoCart(item))
    }
    const deleteCart=(item)=>{
        dispatch(deleteFromCart(item))
    }
    return (
        <div>
            <section className="wone">
                <Swiper
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src={wcaro1} className='caro2' /></SwiperSlide>
                    <SwiperSlide><img src={wcaro2} className='caro2' /></SwiperSlide>
                    <SwiperSlide><img src={wcaro3} className='caro2' /></SwiperSlide>


                </Swiper>
            </section>
            <section className="wtwo">
                <div className="container">
                    <h1>Shop By Category</h1>
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="women_1">
                                <div className="card">
                                    <div className="card-img-top">
                                        <img src={wc1} />
                                    </div>
                                    <div className="card-body">
                                        <h5>Saress</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="women_1">
                                <div className="card">
                                    <div className="card-img-top">
                                        <img src={wc2} />
                                    </div>
                                    <div className="card-body">
                                        <h5>Lehena Sets</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="women_1">
                                <div className="card">
                                    <div className="card-img-top">
                                        <img src={wc3} />
                                    </div>
                                    <div className="card-body">
                                        <h5>Skirt Sets</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="women_1">
                                <div className="card">
                                    <div className="card-img-top">
                                        <img src={wc4} />
                                    </div>
                                    <div className="card-body">
                                        <h5>Dress Sets</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="wthree">
                <h1>Women Dresses and Jumpsuits</h1>
                
                <div className='container'>
                    <div className='row gy-5'>
                        {Women1.map((item) => (
                            <div className='col-lg-3'>
                                <div className='women_2'>
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
                                                    {CartProducts.find( Items =>Items.id === item.id)?
                                                    (
                                                        <button className="button" onClick={()=>{deleteCart(item)}}>Remove from cart</button>
                                                    ):(<button className="button" onClick={()=>{addcart(item)}}>Add to cart</button>)
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
            <section className="wfour">
                <h1>OuterWear</h1>
                <div className='container'>
                    <div className='row gy-5'>
                        {Women2.map((item) => (
                            <div className='col-lg-3'>
                                <div className='women_3'>
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
                                                    {CartProducts.find( Items =>Items.id === item.id)?
                                                    (
                                                        <button className="button" onClick={()=>{deleteCart(item)}}>Remove from cart</button>
                                                    ):(<button className="button" onClick={()=>{addcart(item)}}>Add to cart</button>)
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
        </div>
    );
};

export default Women;
