import React, {Component} from 'react'
import CardIndex from '../../../components/Card/index'
export default class FetchData extends Component {
    render() {
        return (
            <React.Fragment>
                <CardIndex
                    cardImage='https://react.semantic-ui.com/images/avatar/large/matthew.png'
                    cardHeader='REACT JS'
                    cardMeta='Software'
                    cardDescription='Popular JS Framework'/>
            </React.Fragment>
        )
    }
}

