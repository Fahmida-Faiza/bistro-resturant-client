import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [reviews, setReviews]= useState([])
    useEffect(() => {
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
    return (
        <section className="my-20">
            <SectionTitle
            
            subheading={"What our client say"}
            heading={"Testimonial"}
            
            ></SectionTitle>


            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
               
          {
                    reviews.map(review => <SwiperSlide
                    
                    key={review._id}

                 
                        
                    >


                        <div className="m-24">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />

                       
                            <p>{review.details}</p>
                            <h3 className="text-2xl text-orange-500">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
          }
            </Swiper>
        </section>
    );
};

export default Testimonials;