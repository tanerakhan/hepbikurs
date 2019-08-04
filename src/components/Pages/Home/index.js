import React, {Component} from 'react'
import Slide from '../../../assets/image/slide.jpg'
import {SlideWrapper,ContentWrapper} from './style'
import Search from './Search/index'
import PopularCategory from './PopularCategory/index'
export default class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <SlideWrapper className="row">
                    <div className="col">
                        <img src={Slide} alt=""/>
                        <Search/>
                    </div>
                </SlideWrapper>
                <ContentWrapper className="container mt-4 mb-4">
                    <PopularCategory/>
                </ContentWrapper>
            </React.Fragment>
        )
    }
}
