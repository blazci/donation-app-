import React, {Component} from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

export class ScrollButton extends Component {

    render() {
        return(
                <Link to={this.props.link}  className={`m-3   ${this.props.class}`}>{this.props.text}</Link>

        )
    }
}