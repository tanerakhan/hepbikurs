import React, { Component } from 'react'
import CardIndex from '../../../components/Card/index'
export default class PopTeachData extends Component {
    render() {
        return (
            <React.Fragment>
                <CardIndex
                    cardImage='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                    cardHeader='TANER AKHAN'
                    cardMeta='Diet'
                    cardDescription='Diet Programming'/>
            </React.Fragment>
        )
    }
}
