import React, {Component} from 'react';
import decorationBar from '../../assets/Decoration.svg';
import {ActionButton} from "./ActionButton";

export class StartHelping extends Component {

    render() {
        return (
            <div className='container startHelp col-10 text-center'>
                <p>Zacznij pomagać!</p>
                <p>Oddaj niechciane rzeczy w zaufane ręce</p>
                <img src={decorationBar}/>
            <div className='large-btn-container row'>
                <div className='col-6  '>
                   <a>
                       <div className='largeBtn '>
                           ODDAJ <br/> RZECZY
                       </div>
                   </a>
               </div>
                <div className='col-6'>
                    <a>
                        <div className='largeBtn' >
                            ZORGANIZUJ <br/> ZBIÓRKĘ
                        </div>
                    </a>
                </div>



            </div>
            </div>
        );
    }
}