import React, {Component} from 'react'
import {FooterContainer, FooterCol} from './style'
import {footerItems} from '../../constant/footer/index'
import {Link} from 'react-router-dom'
export default class Index extends Component {
    about = () => {
        return <React.Fragment>
            <span className="mb-3">
            {
                (footerItems.aboutUs.colName !== null && footerItems.aboutUs.colName !== undefined)
                ? footerItems.aboutUs.colName
                : ''
            }
            </span>
            <p>
            {
                (footerItems.aboutUs.contentText !== null && footerItems.aboutUs.contentText !== undefined)
                ? footerItems.aboutUs.contentText
                : ''
            }
            </p>
        </React.Fragment>
    }
    shortLink1 = () => {
        return <React.Fragment>
            <span className="mb-3">{(footerItems.shortLink1 !== null && footerItems.shortLink1 !== undefined)
                    ? footerItems.shortLink1.colName
                    : ''}</span>
            <ul className="m-0 p-0">
                {footerItems
                    .shortLink1
                    .item
                    .map(({id, name, link}) => (
                        <li key={id}>
                            <Link to={link}>{name}</Link>
                        </li>
                    ))
}
            </ul>
        </React.Fragment>
    }
    shortLink2 = () => {
        return <React.Fragment>
            <span className="mb-3">{(footerItems.shortLink2 !== null && footerItems.shortLink2 !== undefined)
                    ? footerItems.shortLink2.colName
                    : ''}</span>
            <ul className="m-0 p-0">
                {footerItems
                    .shortLink2
                    .item
                    .map(({id, name, link}) => (
                        <li key={id}>
                            <Link to={link}>{name}</Link>
                        </li>
                    ))
}
            </ul>
        </React.Fragment>
    }
    socialMedia = () => {
        return <React.Fragment>
            <span className="mb-3">{(footerItems.socialMedia !== null && footerItems.socialMedia !== undefined)
                    ? footerItems.socialMedia.name
                    : ''}</span>
            <ul className="m-0 p-0">
                {footerItems
                    .socialMedia
                    .items
                    .map(({id, name, link}) => (
                            <li key={id}>
                                <Link to={link}>{name}</Link>
                            </li>
                    ))
}
            </ul>
        </React.Fragment>
    }
    render() {
        return (
            <React.Fragment>
                <FooterContainer className="footer container-fluid">
                    <footer className="container d-flex align-items-center h-100">
                        <div className="row p-3 w-100">
                        <FooterCol className="col d-flex justify-content-center align-items-center flex-column">
                            {this.about()}
                        </FooterCol>
                        <FooterCol className="col d-flex justify-content-center align-items-center flex-column">
                            {this.shortLink1()}
                        </FooterCol>
                        <FooterCol className="col d-flex justify-content-center align-items-center flex-column">
                            {this.shortLink2()}
                        </FooterCol>
                        <FooterCol className="col d-flex justify-content-center align-items-center flex-column">
                            {this.socialMedia()}
                        </FooterCol>
                        </div>
                    </footer>
                </FooterContainer>
            </React.Fragment>
        )
    }
}
