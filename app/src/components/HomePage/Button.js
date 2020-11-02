import React, {Component} from 'react';

export class Button extends Component {
    render() {
        return(<a>
            <div className={`m-3   ${this.props.class}`}>{this.props.text}</div>
        </a>

        )
    }
}