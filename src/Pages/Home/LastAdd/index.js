import React, {Component} from 'react'
import {LastAddContainer,LastAddLabel,LastAddContent,SliderContainer,SliderWrapper} from './style'
import Labels from '../../../utils/hoc/labels'
import SliderBase from '../../../components/Slider/index'
import {SampleNextArrow,SamplePrevArrow} from '../../../components/Slider/arrows'
import LastAddData from './LastAddData'
export default class Index extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 5,
            arrows: true,
            lazyLoad: true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow/>
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
            <LastAddContainer className="row">
                <LastAddLabel className="row mt-3 mb-3">
                    <Labels mainStyle="col" content="SON EKLENENLER"/>
                </LastAddLabel>
                <LastAddContent className="row m-0 p-0 w-100">
                <SliderContainer className="col p-0 m-0">
                            <SliderBase settings={settings}>
                                <SliderWrapper><LastAddData/></SliderWrapper>
                                <SliderWrapper><LastAddData/></SliderWrapper>
                                <SliderWrapper><LastAddData/></SliderWrapper>
                                <SliderWrapper><LastAddData/></SliderWrapper>
                                <SliderWrapper><LastAddData/></SliderWrapper>
                                <SliderWrapper><LastAddData/></SliderWrapper>
                                <SliderWrapper><LastAddData/></SliderWrapper>
                                <SliderWrapper><LastAddData/></SliderWrapper>
                                <SliderWrapper><LastAddData/></SliderWrapper>
                                <SliderWrapper><LastAddData/></SliderWrapper>
                                <SliderWrapper><LastAddData/></SliderWrapper>
                                <SliderWrapper><LastAddData/></SliderWrapper>
                                <SliderWrapper><LastAddData/></SliderWrapper>
                            </SliderBase>
                        </SliderContainer>
                </LastAddContent>
            </LastAddContainer>
        )
    }
}
