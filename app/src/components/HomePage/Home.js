import React, {Component} from 'react';
import {Navigation} from "./Navigation";
import {StartPage} from "./StartPage";
import hero from '../../assets/Home-Hero-Image.jpg';
import {ThreeColumns} from "./ThreeColumns";
import {FourSteps} from "./FourSteps";
import {ActionButton} from "./ActionButton";
import {AboutUs} from "./AboutUs";
import {WhoWeHelp} from "./WhoWeHelp";
import {ContactUs} from "./ContactUs";
import {Link} from 'react-router-dom';
export class Home extends Component {

    render() {
        return (
            <div className=' m-0 p-0 home container-fluid'>
                <div className='row m-0 p-0'>
                    <div className='col-6'>
                        <img className='heroImage'  alt='obraz' src={hero}/>
                    </div>
                    <div className='col-6'>
                        <StartPage/>
                    </div>
                </div>
                <ThreeColumns/>
                <FourSteps/>
                <AboutUs/>
                <WhoWeHelp/>
                <ContactUs/>
            </div>
        )
    }
}