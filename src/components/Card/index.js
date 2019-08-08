import React, {Component} from 'react'
import {Card} from 'semantic-ui-react'
import {CardContainer} from './style'
class CardIndex extends Component {
    render() {
        return (
            <CardContainer>
                <Card
                    //image='https://react.semantic-ui.com/images/avatar/large/elliot.jpg'
                    //header='Elliot Baker'
                    //description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'/>
                    //meta='Friend'
                    image={this.props.cardImage}
                    header={this.props.cardHeader}
                    meta={this.props.cardMeta}
                    description={this.props.cardDescription}
                    />
            </CardContainer>
        )
    }
}

export default CardIndex