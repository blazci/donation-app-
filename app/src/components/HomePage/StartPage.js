import React, {Component} from 'react';
import {Navigation} from "./Navigation";
import {StartHelping} from "./StartHelping";
import {ThreeColumns} from "./ThreeColumns";


export class StartPage extends Component {
    render() {
        return(
            <div className='container-fluid'>
                <Navigation/>
                <StartHelping/>
            </div>
        )
    }
}