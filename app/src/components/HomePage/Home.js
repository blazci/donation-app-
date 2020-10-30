import React, {Component} from 'react';
import {Navigation} from "./Navigation";
import {StartPage} from "./StartPage";
import hero from '../../assets/Home-Hero-Image.jpg';
export class Home extends Component {

    render() {
        return (
            <div className=' home container-fluid'>
                <div className='row'>
                    <div className='col-6'>
                        <img className='heroImage'  alt='obraz' src={hero}/>
                    </div>
                    <div className='col-6'>
                        <StartPage/>
                    </div>
                </div>

            </div>
        )
    }
}