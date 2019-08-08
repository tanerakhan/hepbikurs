import React, {Component} from 'react'
import {PopCourseLabel, PopCourseContent, LeftArea, RightArea, SliderWrapper} from './style'
import PopularCourseData from '../PopularCourse/PopularCourseData'
import SliderBase from '../../../components/Slider/index'
import {SampleNextArrow,SamplePrevArrow} from '../../../components/Slider/arrows'
import Labels from '../../../utils/hoc/labels'
export default class index extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            //slidesToScroll: 3,
            arrows: true,
            lazyLoad: true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
            //initialSlide: 0,
            //centerMode: true,
            //centerPadding: '0',
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
            <React.Fragment>
                <PopCourseLabel className="row mt-3">
                    <Labels mainStyle="col w-100 mb-3 p-0" content="POPÜLER KURSLAR"/>
                </PopCourseLabel>
                <PopCourseContent className="row">
                    <LeftArea
                        className="col col-md-3 p-0 d-flex align-items-center justify-content-center">sol</LeftArea>
                    <RightArea className="col col-md-9 p-0 d-flex justify-content-center">
                            <SliderBase settings={settings}>
                            <SliderWrapper><PopularCourseData/></SliderWrapper>
                            <SliderWrapper><PopularCourseData/></SliderWrapper>
                            <SliderWrapper><PopularCourseData/></SliderWrapper>
                            <SliderWrapper><PopularCourseData/></SliderWrapper>
                            </SliderBase>
                    </RightArea>
                </PopCourseContent>
            </React.Fragment>
        )
    }
}