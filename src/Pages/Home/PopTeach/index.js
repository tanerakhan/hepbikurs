import React, {Component} from 'react'
import PopTeachData from './PopTeachData'
import {PopTeachContainer,PopTeachLabel,SliderContainer,SliderWrapper} from './style'
import SliderBase from '../../../components/Slider/index'
import Labels from '../../../utils/hoc/labels'
import {SampleNextArrow,SamplePrevArrow} from '../../../components/Slider/arrows'
export default class Index extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 7,
            slidesToScroll: 7,
            arrows: true,
            lazyLoad: true,
            nextArrow: <SampleNextArrow/>,
            prevArrow: <SamplePrevArrow/>
            //initialSlide: 0, centerMode: true, centerPadding: '0',
            /*             responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ] */
        };
        return (
            <PopTeachContainer className="row">
                <PopTeachLabel className="row mt-3 mb-3">
                    <Labels mainStyle="col" content="POPÜLER EĞİTMENLER"/>
                </PopTeachLabel>
                <SliderContainer className="col p-0 m-0">
                            <SliderBase settings={settings}>
                                <SliderWrapper><PopTeachData/></SliderWrapper>
                                <SliderWrapper><PopTeachData/></SliderWrapper>
                                <SliderWrapper><PopTeachData/></SliderWrapper>
                                <SliderWrapper><PopTeachData/></SliderWrapper>
                                <SliderWrapper><PopTeachData/></SliderWrapper>
                                <SliderWrapper><PopTeachData/></SliderWrapper>
                                <SliderWrapper><PopTeachData/></SliderWrapper>
                                <SliderWrapper><PopTeachData/></SliderWrapper>
                                <SliderWrapper><PopTeachData/></SliderWrapper>
                                <SliderWrapper><PopTeachData/></SliderWrapper>
                                <SliderWrapper><PopTeachData/></SliderWrapper>
                                <SliderWrapper><PopTeachData/></SliderWrapper>
                                <SliderWrapper><PopTeachData/></SliderWrapper>
                                <SliderWrapper><PopTeachData/></SliderWrapper>
                                <SliderWrapper><PopTeachData/></SliderWrapper>
                                <SliderWrapper><PopTeachData/></SliderWrapper>
                                <SliderWrapper><PopTeachData/></SliderWrapper>
                            </SliderBase>
                        </SliderContainer>
            </PopTeachContainer>
        )
    }
}
