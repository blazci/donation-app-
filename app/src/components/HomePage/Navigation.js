import React, {Component} from 'react';
import {ActionButton} from "./ActionButton";
import {ScrollButton} from "./ScrollButton";


export class Navigation extends Component{

    render() {
        return (<div className='navContainer'>
            <div className=' p-2 row'>
                <div className='col-12 m-2 text-right'>
                   <ActionButton link='login' class='loginBtn' text='Zaloguj'/>
                    <ActionButton link='registration' class='loginBtn' text='Załóż konto'/>
                </div>
            </div>
            <div className=' p-2 row'>
                <div className='col-12 text-right'>
                    <ActionButton link='home' class='navOptions' text={`Start`}/>
                    <ScrollButton link='fourSteps' class='navOptions' text='O co chodzi?'/>
                    <ScrollButton link='aboutUs' class='navOptions' text='O nas'/>
                    <ScrollButton link='whoWeHelp' class='navOptions' text='Fundacje i organizacje'/>
                    <ScrollButton link='contactUs' class='navOptions' text='Kontakt'/>
                </div>
            </div>
        </div>

        )
    }
}