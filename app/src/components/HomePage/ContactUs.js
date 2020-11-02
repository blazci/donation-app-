import React, {Component} from 'react';
import decorationBar from '../../assets/Decoration.svg'
import {ActionButton} from "./ActionButton";
import instagramIcon from '../../assets/Instagram.svg';
import facebookIcon from '../../assets/Facebook.svg';

export class ContactUs extends Component {
    render() {
        return (
            <div className='container-fluid contactUs-container' id='contactUs'>
                <div className='row   justify-content-end  '>
                    <div className='col-6  contactUs-form-container'>
                        <h3 className='text-center'>Skontaktuj się z nami</h3>
                        <div className='row justify-content-center'>
                            <img src={decorationBar}/>
                        </div>
                        <form className='form-group form-container'>
                            <div className='justify-content-between  form-row'>
                                <div className='d-flex flex-column form-group'>
                                    <label for='name' className='form-check-label'>Wpisz swoje imię</label>
                                    <input  type='text' id='name' name='name'/>
                                </div>
                                <div className=' d-flex flex-column form-group'>
                                    <label className='form-check-label' for='email'>Wpisz email</label>
                                    <input id='email' name='email' type='email'/>
                                </div>
                            </div>
                            <div className='d-flex flex-column form-row'>
                                    <label for='message'>Wpisz swoją wiadomość</label>
                                    <input id='message' name='message' type='text-area' />
                            </div>
                            <div className=' p-0 m-0   row justify-content-end'>
                                <a className='sendButton'>Wyślij</a>
                            </div>
                        </form>
                    </div>
                </div>
                <footer className='text-center justify-content-center row f p-0'>
                    <div className='col-7 text-right'>
                          Copyright by Coders Lab
                      </div>
                      <div className='icons-container text-right col-5'>
                          <img src={instagramIcon}/>
                          <img src={facebookIcon}/>
                      </div>
                </footer>
            </div>
        )

    }
}