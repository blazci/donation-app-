import React, {Component} from 'react';
import decorationBar from '../../assets/Decoration.svg';
import {ActionButton} from "./ActionButton";
import {Button} from "./Button";
import {Pagination} from "./Pagination";
const a = '' ;
export class WhoWeHelp extends Component {

    render() {
        return (
            <div className=' p-0 m-0 container-fluid text-center whoWeHelp-container' id='whoWeHelp'>
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
                    {this.renderOrganizations(this.state.fundations)}
                </div>
                <div className='row p-0 m-0 col-12 justify-content-center'>
                <Pagination currentPage={this.state.currency}
                            callback={this.changePageNr}
                            organization={this.state.fundations}/>

                </div>
            </div>
    )
    }
    changePageNr = (val) => {
                this.setState({currentPage: val});
    }
    renderOrganizations = (org) => {
        const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
        const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
        const currentPosts = org.slice(indexOfFirstPost,indexOfLastPost);
       return (
          currentPosts.map(element => {
              return <div key={element.name} className='row  whoWeHelp-singleOrg-container justify-content-between'>
              <div className='col-7 text-left p-0 '>
                  <h4>{element.name}</h4>
                  <p>{element.purpose}</p>
              </div>
              <div className='col-4 text-right'>
                  <p>{element.examples}</p>
              </div>
          </div>
          })
            )
    }
    constructor(props) {
        super(props);
        this.state = {
            postsPerPage: 3,
            currentPage: 1,
            fundations: [
                {
                    name: `Fundacja  "Dbam o Zdrowie"`,
                    purpose: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.',
                    examples: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki',
                    id: 1,
                },
                {
                    name: `Fundacja "Dla Dzieci"`,
                    purpose: 'Cel i misja: Pomoc dzieciom z ubogich rodzin.',
                    examples: 'ubrania, meble, zabawki',
                    id: 2,
                },
                {
                    name: `Fundacja "Bez domu"`,
                    purpose: 'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.',
                    examples: 'ubrania, jedzenie, ciepłe koce',
                    id: 3,
                },
                {
                    name: `Fundacja "Pajacyk"`,
                    purpose: 'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.',
                    examples: 'ubrania, jedzenie, ciepłe koce',
                    id:4,
                },
                {
                    name: `Fundacja "Polsatu"`,
                    purpose: 'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.',
                    examples: 'ubrania, jedzenie, ciepłe koce',
                    id: 5,
                },
                {
                    name: `Fundacja "Nie jesteś sam"`,
                    purpose: 'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.',
                    examples: 'ubrania, jedzenie, ciepłe koce',
                    id: 6
                },
                {
                    name: `Fundacja "Caritas"`,
                    purpose: 'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.',
                    examples: 'ubrania, jedzenie, ciepłe koce',
                    id: 7,
                },
                {
                    name: `Fundacja "Przygarnij kropka"`,
                    purpose: 'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.',
                    examples: 'ubrania, jedzenie, ciepłe koce',
                    id: 8,
                },
                {
                    name: `Fundacja "Example 9"`,
                    purpose: 'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.',
                    examples: 'ubrania, jedzenie, ciepłe koce',
                    id: 9
                }

            ]
        }
    }
}