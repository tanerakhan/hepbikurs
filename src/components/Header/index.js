import React, {Component} from 'react'
import {HeaderContainer, Logo, DropDownContainer} from './style'
import {Link} from 'react-router-dom'
/* import Navigation from './navigation/index' */
import DropDown from './Dropdown/index'
import Search from './search/index'
import Logos from '../../assets/image/logos.svg'
import Login from './login/index'
export default class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <HeaderContainer className="container-fluid">
                    <header className="container">
                        <div className="row">
                            <Logo className="col col-md-4 col-sm-12 col-xs-12 d-flex h-100 align-items-center">
                                <div className="col col-md-6 col-sm-12 col-xs-12">
                                    <Link to="/"><img src={Logos} alt="Logo"/></Link>
                                </div>
                                <DropDownContainer className="col col-md-6 col-sm-12 col-xs-12">
                                    <DropDown/>
                                </DropDownContainer>
                            </Logo>
                            {/* <Navigation/> */}
                            <Search/>
                            <Login/>
                        </div>
                    </header>
                </HeaderContainer>
            </React.Fragment>
        )
    }
}
