import React from 'react';
import Productsoverview from './Productsoverview';

function Home() {
  return (
    <div>
         <div>
            <div id="carouselExampleIndicators" className="carousel slide " style={{height:"600px",}} data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner w-100 h-100">
                    <div className="carousel-item active">
                        <img src="/public/assets/images/home/360_F_271775672_yo8ZgraN2IHGbfqP2k0PsLjwvmatUNUJ.jpg" className="d-block w-100 object-fit-cover" alt="IPhone"  />
                    </div>
                    <div className="carousel-item">
                        <img src="/public/assets/images/home/elegant-smartphone-composition.jpg" className="d-block w-100 object-fit-cover" alt="IPhone"  />
                    </div>
                    <div className="carousel-item">
                        <img src="/public/assets/images/home/excited-girl-scream-joy-making-fist-pump-holding-shopping-bag-rejoicing-standing-dress-ove.jpg" className="d-block w-100 object-fit-cover" alt="IPhone"/>
                    </div>
                    <div className="carousel-item">
                        <img src="/assets/images/home/img2.jpg" className="d-block w- object-fit-cover" alt="IPhone"  />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <Productsoverview/>

            
            
        </div>
    </div>
  )
}

export default Home;