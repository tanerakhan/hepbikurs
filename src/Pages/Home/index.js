import React, {Component} from 'react'
/* import Slide from '../../assets/image/slide.jpg' */
import {SlideWrapper,ContentWrapper,SlideCont} from './style'
import Search from './Search/index'
import PopularCategory from './PopularCategory/index'
import PopCourse from './PopularCourse/index'
import LastAdd from './LastAdd/index'
import PopTeach from './PopTeach/index'
export default class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <SlideWrapper className="row">
                    <SlideCont className="col col-xs-12 col-sm-12">
                        {/* <img src={Slide} alt=""/> */}
                        <img src="https://i.udemycdn.com/notices/home_banner/image/cdef650d-1878-4aed-b0d2-1fbd223c6f35.jpg" alt=""/>
                        <Search/>
                    </SlideCont>
                </SlideWrapper>
                <ContentWrapper className="container mt-4 mb-4">
                    <PopularCategory/>
                    <PopCourse/>
                    <LastAdd/>
                    <PopTeach/>
                </ContentWrapper>
            </React.Fragment>
        )
    }
}
