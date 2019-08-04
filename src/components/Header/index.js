import React, {Component} from 'react'
import { HeaderContainer, Logo } from './style'
import {Link} from 'react-router-dom'
import Navigation from './navigation/index'
import Logos from '../../assets/image/logos.svg'
import Login from './login/index'
export default class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <HeaderContainer className="container-fluid">
                    <header className="container">
                        <div className="row">
                            <Logo className="col">
                                <Link to="/"><img src={Logos} alt="Logo"/></Link>
                            </Logo>
                                    <Navigation/>
                                    <Login/>
                        </div>
                    </header>
                </HeaderContainer>
            </React.Fragment>
        )
    }
}
