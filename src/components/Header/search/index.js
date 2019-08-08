import React, {Component} from 'react'
import {SearchContainer} from './style'
import {Search} from 'semantic-ui-react'

export default class Index extends Component {
    render() {
        return (
            <React.Fragment>
                    <SearchContainer className="col col-md-5 col-sm-12 col-xs-12">
                        <Search/>
                    </SearchContainer>
            </React.Fragment>
        )
    }
}
