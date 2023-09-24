import React from 'react'
import {testimonials} from "../../data/dummydata"
import { FormatQuote } from '@mui/icons-material'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow:1,
        slidesToScroll: 1
      };
  return (
    <section className="testimonials hero">
        <div className="container">
            <Slider {...settings}>
                {testimonials.map((value,index)=>(
                <div className="box" key={index}>
                        <i>
                            <FormatQuote/>
                        </i>
                            <p>{value.text}</p>
                            <div className="img">
                                <img src={value.image} alt="" />
                            </div>
                            <h3>{value.name}</h3>
                            <label>{value.post}</label>
                        
                </div>
                ))}
            </Slider>
        </div>
    </section>
  )
}

export default Testimonials
