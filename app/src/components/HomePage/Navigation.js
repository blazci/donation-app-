import React, {Component} from 'react';
import {ActionButton} from "./ActionButton";

export class Navigation extends Component{

    render() {
        return (<div className='navContainer'>
            <div className=' p-2 row'>
                <div className='col-12 m-2 text-right'>
                    <ActionButton class='loginBtn' text='Zaloguj'/>
                    <ActionButton class='loginBtn' text='Załóż konto'/>
                </div>
            </div>
            <div className=' p-2 row'>
                <div className='col-12 text-right'>
                    <ActionButton class='navOptions' text={`Start`}/>
                    <ActionButton class='navOptions' text='O co chodzi?'/>
                    <ActionButton class='navOptions' text='O nas'/>
                    <ActionButton class='navOptions' text='Fundacje i organizacje'/>
                    <ActionButton class='navOptions' text='Kontakt'/>
                </div>
            </div>
        </div>

        )
    }
}