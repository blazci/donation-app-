import React, {Component} from 'react';
import decorationBar from '../../assets/Decoration.svg';
import {ActionButton} from "./ActionButton";
import {Button} from "./Button";

export class WhoWeHelp extends Component {

    render() {
        return (
            <div className=' p-0 m-0 container-fluid text-center whoWeHelp-container'>
                <h2>Komu pomagamy?</h2>
                <img src={decorationBar} alt='decorationBar'/>
                <div className='row m-0 s justify-content-center col-8 '>
                    <div className='col-2 p-0 '>
                        <Button text='Fundacjom' class=' largeBtn whoWeHelp-btn' />
                    </div>
                    <div className='col-2 p-0'>
                        <Button text='Organizacjom pozarządowym' class=' largeBtn whoWeHelp-btn'/>
                    </div>
                    <div className='col-2 p-0 '>
                        <Button text='Lokalnym zbiórkom' class='largeBtn whoWeHelp-btn'/>
                    </div>
                </div>
                <p className='whoWeHelp-description'>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                <div className='container-fluid whoWeHelp-organizations-container'>
                    {this.state.fundations.map((e,index) => {
                     return    this.singleOrganization(e)
                    })}
                </div>
                <div className='row p-0 m-0 col-12 justify-content-center'>
                    {this.pageBtn()}
                </div>

            </div>
        )
    }
    pageBtn = () => {
        return <a className='pageBtn'>
            1
        </a>
    }
    singleOrganization = (org) => {
        return  <div key={org.name} className='row  whoWeHelp-singleOrg-container justify-content-between'>
            <div className='col-7 text-left p-0 '>
                <h4>{org.name}</h4>
                <p>{org.purpose}</p>
            </div>
            <div className='col-4 text-right'>
                <p>{org.examples}</p>
            </div>
        </div>
    }
    constructor(props) {
        super(props);
        this.state = {
            fundations: [
                {
                    name: `Fundacja  "Dbam o Zdrowie"`,
                    purpose: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.',
                    examples: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'
                },
                {
                    name: `Fundacja "Dla Dzieci"`,
                    purpose: 'Cel i misja: Pomoc dzieciom z ubogich rodzin.',
                    examples: 'ubrania, meble, zabawki'
                },
                {
                    name: `Fundacja "Bez domu"`,
                    purpose: 'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.',
                    examples: 'ubrania, jedzenie, ciepłe koce'
                }

            ]
        }
    }
}