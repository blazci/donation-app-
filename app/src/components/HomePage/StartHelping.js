import React, {Component} from 'react';
import decorationBar from '../../assets/Decoration.svg';
import {ActionButton} from "./ActionButton";
import {BrowserRouter, Link} from "react-router-dom";

export class StartHelping extends Component {

    render() {
        return (
            <div className='container startHelp col-10 text-center'>
                <p>Zacznij pomagać!</p>
                <p>Oddaj niechciane rzeczy w zaufane ręce</p>
                <img src={decorationBar}/>
            <div className='large-btn-container row'>
                  <BrowserRouter>
                      <div className='col-6'>
                          <Link to='/login' style={{textDecoration: 'none'}}>
                              <div className='largeBtn'>
                                  ODDAJ <br/> RZECZY
                              </div>
                          </Link>
                      </div>
                      <div className='col-6'>
                          <Link to='/login' style={{textDecoration: 'none'}}>
                              <div className='largeBtn'>
                                  ZORGANIZUJ <br/> ZBIÓRKĘ
                              </div>
                          </Link>
                      </div>
                  </BrowserRouter>

            </div>
            </div>
        );
    }
}