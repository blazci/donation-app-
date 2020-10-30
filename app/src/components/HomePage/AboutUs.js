import React, {Component} from 'react' ;
import happyPeopleimg from '././../../assets/People.jpg';
import decorationBar from '../../assets/Decoration.svg';

export class AboutUs extends Component {
    render() {
        return (
            <div className='m-0 p-0 container-fluid '>
                <div className='row '>
                    <div className='col text-center aboutUs-description-container'>
                         <h3>O nas</h3>
                        <img src={decorationBar} alt='decoration'/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias architecto beatae consectetur dolor ducimus eos laborum molestias nemo neque, odit officiis optio placeat possimus quidem rem reprehenderit sed voluptatem?</p>
                    </div>
                    <div className='col happy-img-container'>

                    </div>
                </div>
            </div>
        );
    }
}