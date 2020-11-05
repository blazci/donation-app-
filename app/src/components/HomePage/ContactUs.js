import React, {Component} from 'react';
import decorationBar from '../../assets/Decoration.svg'
import {ActionButton} from "./ActionButton";
import instagramIcon from '../../assets/Instagram.svg';
import facebookIcon from '../../assets/Facebook.svg';
import {FormValidation} from "./FormValidation";
import {ValidationMessage} from "./ValidationMessage";

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
                        <FormValidation data={this.state} rules={this.rules}
                                        submit={this.props.submit}>
                            <form className='form-group form-container'>
                                <div className='justify-content-between  form-row'>
                                    <div className='d-flex flex-column form-group'>
                                        <label htmlFor='name' className='form-check-label'>Wpisz swoje imię</label>
                                        <input type='text' id='name' name='name'/>
                                    </div>
                                    <div className=' d-flex flex-column form-group'>
                                        <label className='form-check-label' htmlFor='email'>Wpisz email</label>
                                        <input id='email' name='email' type='email'/>
                                    </div>
                                </div>
                                <div className='d-flex flex-column form-row'>
                                    <label htmlFor='message'>Wpisz swoją wiadomość</label>
                                    <textarea id='message' name='message' rows={3}/>
                                </div>
                                <div className=' p-0 m-0   row justify-content-end'>
                                    <a className='sendButton'>Wyślij</a>
                                </div>
                            </form>
                        </FormValidation>

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
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
        this.rules = {
            name: {required: true, minlength: 3, alpha: true},
            email: {required: true, email: true},
            message: {required: true }
        }
    }
    updateFormValue = (event) => {
        this.setState({[event.target.name]: event.target.value},
            )
    }
}