import React, { Component } from 'react'
import { PopularCat } from '../../../constant/content/popularCategory'
import {Link} from 'react-router-dom'
import {PopularCategoryContainer, CatLabel} from './style'
import Labels from '../../../utils/hoc/labels'
export default class Index extends Component {
    Popcat = () => {
        return PopularCat.map( ({ id,name,link,icon }) => (
            <li className="col mb-2 text-center p-0" key={id}>
                <Link to={link}>
                    <i className={icon}></i>
                    <span>{name}</span>
                </Link>
            </li>
        ))
    }
    render() {
        return (
            <PopularCategoryContainer className="row">
                <CatLabel className="row mb-3">
                    <Labels mainStyle="col" content="POPÜLER KATEGORİLER"/>
                </CatLabel>
                <ul className="row m-0 p-0 w-100">
                    {this.Popcat()}
                </ul>
            </PopularCategoryContainer>
        )
    }
}
