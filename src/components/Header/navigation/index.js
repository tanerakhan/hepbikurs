import React, {Component} from 'react'
import {navigationContent} from '../../../constant/header/index'
import {NavInfo} from './style'
import {Link} from 'react-router-dom';

export default class Index extends Component {
    navMap = () => {
        return navigationContent.map(({name, link, id}) => (
            <li key={id}>
                <Link to={link}>{name}</Link>
            </li>
        ))
    }
    render() {
        return (
            <React.Fragment>
                    <NavInfo className="col">
                        <ul>
                            {this.navMap()}
                        </ul>
                    </NavInfo>
            </React.Fragment>
        )
    }
}
