import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {LoginContainer} from './style'
export default class Index extends Component {
    render() {
        return (
            <React.Fragment>
                    <LoginContainer className="col col-md-3 col-sm-12 col-xs-12">
                        <ul>
                            <li><Link to="/giris-yap">Giriş Yap</Link></li>
                            <li><Link to="/kayit-ol">kayıt Ol</Link></li>
                        </ul>
                    </LoginContainer>
            </React.Fragment>
        )
    }
}
