import React, {Component} from 'react';

export class Button extends Component {
    render() {
        return(<a
                onClick={() => this.props.callback(this.props.value)}>
            <div style={{border: this.props.orgsToRender === this.props.value && '1px solid #3C3C3C' }} className={`m-3   ${this.props.class}`}>{this.props.text}</div>
        </a>

        )
    }
}