import React, {Component} from 'react';
import background from '../../assets/3 Columns Background@2x.png';
import {Column} from "./Column";

export class ThreeColumns extends Component {
    render() {
        return (
            <div className='three-col-container container-fluid p-3 '>
                <div className='row p-3'>
                    <Column number='10' action='ODDANYCH WORKÓW'/>
                    <Column number='5' action='WSPARTYCH ORGANIZACJI'/>
                    <Column number='7' action='ZORGANIZOWANYCH ZBIÓREK'/>
                </div>
            </div>
        )
    }
}