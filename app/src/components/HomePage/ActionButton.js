import React, {Component} from 'react';
import {BrowserRouter, Link} from "react-router-dom";

export class ActionButton extends Component {

    render() {
        return(<BrowserRouter>
            <Link to={`/${this.props.link} `}className={`m-3   ${this.props.class}`}>{this.props.text}</Link>
        </BrowserRouter>

        )
    }
}