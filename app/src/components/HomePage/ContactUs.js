import React, {Component} from 'react';
import decorationBar from '../../assets/Decoration.svg'

export class ContactUs extends Component {
    render() {
        return (
                <div className='container-fluid contactUs-container'>
                    <div className='row '>
                        <div className='col-7'></div>
                        <div className='col-5  text-center  contactUs-form-container'>
                            <h3>Skontaktuj się z nami</h3>
                            <img src={decorationBar}/>
                            <form className=' form-group '>
                                <div className='row'>
                                    <div>
                                        <label className='form-check-label' >Wpisz swoje imię</label>
                                        <input  className='form-control' type='text'/>
                                    </div>
                                    <div>
                                        <label className='form-check-label'>Wpisz swój email</label>
                                        <input className='form-control'/>
                                    </div>
                                </div>

                                <div className='row'>
                                    <label className='form-check-label'>Wpisz swoją wiadomość</label>
                                    <input className='form-control' type='textarea'/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )

    }
}