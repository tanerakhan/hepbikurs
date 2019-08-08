import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SliderBase = props => (
        <Slider {...props.settings}>
           {props.children}
        </Slider>
    )
export default SliderBase 
