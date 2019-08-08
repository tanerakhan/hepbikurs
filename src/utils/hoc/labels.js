import React, {Component} from 'react'

export default class Labels extends Component {
    render() {
        return (
            <div className={this.props.mainStyle}>
                <span>{this.props.content}</span>
            </div>
        )
    }
}
