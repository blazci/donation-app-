import React, {Component} from 'react';

export class ActionButton extends Component {

    render() {
        return(
            <a className={`m-3   ${this.props.class}`}>{this.props.text}</a>
        )
    }
}