import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import home1 from '../images/home1.jpg'
import home2 from '../images/home2.jpg'
import home3 from '../images/home3.jpg'
import home4 from '../images/home4.jpg'
import home5 from '../images/home5.jpg'
import home6 from '../images/home6.jpg'
import homec1 from '../images/homec1.jpg'
import homec2 from '../images/homec2.jpg'
import homec3 from '../images/homec3.jpg'
import homec4 from '../images/homec4.jpg'
import home8 from '../images/home8.jpg'
// import { addtoCart, deleteFromCart } from "../store/cartslice/Cartslice";

const Home = () => {


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,  // Display 4 cards at a time
    slidesToScroll: 4, // Scroll 4 cards per swipe
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480, // Small Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div>
      <section className="home">
        <div className="home_1">

        </div>
      </section>
      <section className="homeone">
        <div className="container">
          <div className="home_2">
            <h1>IN THE SPOLIGHT</h1>
            <div className="row">
              <div className="col-lg-3">
                <div className="img1">
                  <div className="card">
                    <div className="card-img-top">
                      <img src={home1} />
                    </div>
                    <div className="card-body">
                      <h5 className="card-text">READY TO SHIP</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="img2">
                  <div className="card">
                    <div className="card-img-top">
                      <img src={home2} />
                    </div>
                    <div className="card-body">
                      <h5 className="card-text">MODERN HIRELOOMS</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="img3">
                  <div className="card">
                    <div className="card-img-top">
                      <img src={home3} />
                    </div>
                    <div className="card-body">
                      <h5 className="card-text">TIMELESS REDS</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="img4">
                  <div className="card">
                    <div className="card-img-top">
                      <img src={home4} />
                    </div>
                    <div className="card-body">
                      <h5 className="card-text">VEGAN ACCESSORIES</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>
      <section className="hometwo">
        <div className="container">
          <div className="row">
            <h1>MENS WEAR</h1>
            <div className="col-lg-6">
              <div className="men_one">
                <img src={home5} />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="men_two">
                <img src={home6} />
              </div>
            </div>
          </div>
        </div>
        <button>Shop The Collection </button>
      </section>
      <section className="homethree">
        <div className="container">
          <h1>New Arrivals</h1>
          <Slider {...settings}>
            <div className="card imone">
              <img src={homec1} alt="Item 1" />
              <h5>Product 1</h5>
            </div>
            <div className="card ">
              <img src={homec2} alt="Item 2" />
              <h5>Product 2</h5>
            </div>
            <div className="card">
              <img src={homec3} alt="Item 3" />
              <h5>Product 3</h5>
            </div>
            <div className="card">
              <img src={homec4} alt="Item 4" />
              <h5>Product 4</h5>
            </div>
            <div className="card">
              <img src={home8} alt="Item 5" />
              <h5>Product 5</h5>
            </div>
            <div className="card">
              <img src={home6} alt="Item 6" />
              <h5>Product 6</h5>
            </div>

          </Slider>
        </div>
      </section>
     
      <section className="homefive">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="picture1"></div>
            </div>
            
          </div>
          </div>
      </section>
      <section className="homefour">
        <h1>REASON TO CHOOSE US</h1>
        <div className="container">
          <div className="accord">
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Style and Aesthetic</strong>
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div class="accordion-body para">
                    Your clothing reflects a unique blend of comfort and individuality. Whether you prefer casual, formal, or a mix of both, your outfit choices likely showcase your personality and mood. For instance, if you’re wearing relaxed, cozy attire, it might indicate a laid-back and practical approach to your day. On the other hand, bold patterns or vibrant colors could suggest a creative and confident demeanor. Your style is a visual representation of how you express yourself to the world
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Functionality and Practicality</strong>
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div class="accordion-body para">
                    The clothes you wear are not just about appearance; they also serve a functional purpose. If your outfit includes weather-appropriate layers or durable materials, it shows that you prioritize practicality and adaptability. For example, wearing a jacket or sturdy shoes might mean you’re prepared for outdoor activities or changing conditions. Your clothing choices often balance fashion with functionality, ensuring you’re both comfortable and ready for whatever the day brings.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Cultural and Social Influence</strong>
                  </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div class="accordion-body para">
                    Your clothing may also reflect cultural or social influences. Whether it’s a trendy piece inspired by current fashion trends or a traditional garment that connects you to your heritage, your outfit can tell a story about your background or interests. Accessories, patterns, or specific brands you wear might also signal your connection to certain communities, subcultures, or values. Through your clothing, you communicate not just who you are, but also where you come from and what you care about.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="homesix">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="picture2"></div>
            </div>
            
          </div>
          </div>
      </section> */}
    </div>
  )
}

export default Home;
