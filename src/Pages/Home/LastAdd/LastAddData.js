import React, {Component} from 'react'
import CardIndex from '../../../components/Card/index'
export default class LastAddData extends Component {
    render() {
        return (
            <React.Fragment>
                <CardIndex
                    cardImage='https://react.semantic-ui.com/images/avatar/large/elliot.jpg'
                    cardHeader='.NET CORE'
                    cardMeta='Software'
                    cardDescription='C# Framework'/>
            </React.Fragment>
        )
    }
}