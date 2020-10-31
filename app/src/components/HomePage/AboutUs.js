import React, {Component} from 'react' ;
import happyPeopleimg from '././../../assets/People.jpg';
import signature from '../../assets/Signature.svg'
import decorationBar from '../../assets/Decoration.svg';

export class AboutUs extends Component {
    render() {
        return (
            <div className='m-0 p-0 container-fluid '>
                <div className='row p-0 m-0'>
                    <div className='col text-center aboutUs-description-container'>
                         <h3>O nas</h3>
                        <img src={decorationBar} alt='decoration'/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias architecto beatae consectetur dolor ducimus eos laborum molestias nemo neque, odit officiis optio placeat possimus quidem rem reprehenderit sed voluptatem?</p>
                        <div className='row signature-container justify-content-end'>
                            <img className='' src={signature}/>
                        </div>
                    </div>
                    <div className='col p-0 m-0 happy-img-container'></div>
                </div>
            </div>
        );
    }
}