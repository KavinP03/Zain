import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Trends.css"; // Custom styles

// ✅ Import images directly if they are inside `src/images/`
import trend1 from "../images/trend1.webp";
import trend2 from "../images/trend2.webp";
import trend3 from "../images/trend3.webp";
import trend4 from "../images/trend4.webp";
import trend5 from "../images/trend5.webp";
import Tre1 from "../products/Tre1";
import tbg1 from '../images/tbg1.jpg'
import tbg2 from '../images/tbg2.jpg'
import { useSelector,useDispatch } from "react-redux";
import { addtoCart,deleteFromCart } from "../store/cartslice/Cartslice";

const Trends = () => {
    const CartProducts = useSelector((state)=> state.cart.cartItems)
    const dispatch = useDispatch();
    const addcart = (item)=>{
        dispatch(addtoCart(item))
    }
    const deleteCart=(item)=>{
        dispatch(deleteFromCart(item))
    }
    const trendsData = [
        { id: 1, img: trend1, title: "New Arrivals" },
        { id: 2, img: trend2, title: "Gown" },
        { id: 3, img: trend3, title: "Ready-To-Wear" },
        { id: 4, img: trend4, title: "Bridesmaid" },
        { id: 5, img: trend5, title: "Eid" },
    ];

    return (
        <div>
            <section className="trends1">
                <h2 className="section-title">Trendy Picks</h2>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={3}
                    navigation
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {trendsData.map((item, index) => (
                        <SwiperSlide key={item.id}>
                            <div className={`trend-card ${index % 2 === 0 ? "tilt-left" : "tilt-right"}`}>
                                <img src={item.img} alt={item.title} className="trend-image" />
                                <div className="trend-info">
                                    <h3>{item.title}</h3>
                                    <a href="#" className="shop-now">SHOP NOW →</a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
            <section className="trends2">
                <h1>Influncer's Choice</h1>
                <div className='container'>
                    <div className='row gy-5'>
                        {Tre1.map((item) => (
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
                                                    {CartProducts.find(Items =>Items.id === item.id)?
                                                    (
                                                        (<button className="button" onClick={()=>{deleteCart((item))}}>Remove from cart</button>)
                                                    ):(
                                                        (<button className="button" onClick={()=>{addcart(item)}}>Add to cart</button>)
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
            <section className="trends3">
                <divv className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="trends_1">
                                 <img src={tbg1}/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="trends_2">
                                <img src={tbg2}/>
                            </div>
                        </div>
                    </div>
                </divv>
            </section>
        </div>
    );
};

export default Trends;
