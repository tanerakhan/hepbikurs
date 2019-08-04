import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {LoginContainer} from './style'
export default class Index extends Component {
    render() {
        return (
            <React.Fragment>
                    <LoginContainer className="col">
                        <ul>
                            <li><Link to="/giris-yap">Giriş Yap</Link></li>
                            <li><Link to="/kayit-ol">kayıt Ol</Link></li>
                        </ul>
                    </LoginContainer>
            </React.Fragment>
        )
    }
}
