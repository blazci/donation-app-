import React, {Component} from 'react' ;
import decorationBar from '../../assets/Decoration.svg';
import shirt from '../../assets/Icon-1.svg';
import bag from '../../assets/Icon-2.svg';
import loupe from '../../assets/Icon-3.svg';
import circle from '../../assets/Icon-4.svg';

export class FourSteps extends Component {
    render() {
        return(
            <div className='container-fluid p-0  text-center four-steps-container'>
                <h3 className='  p-3 text-center'>Wystarczą 4 proste kroki</h3>
                <img className='decoration-bar' src={decorationBar}/>
                <div className='row m-0 justify-content-around col-12 four-steps-columns-container'>
                    <div className='col-2 four-steps-column'>
                        <img src={shirt}/>
                        <h5>Wybierz rzeczy</h5>
                        <div className='line'></div>
                        <p>ubrania, zabawki, sprzęt i inne</p>
                    </div>
                    <div className='col-2 four-steps-column '>
                        <img src={bag}/>
                        <h5>Spakuj je</h5>
                        <div className='line'></div>
                        <p>skorzystaj z worków na śmieci</p>
                    </div>
                    <div className='col-2 four-steps-column' >
                        <img src={loupe}/>
                        <h5>Zdecyduj komu chcesz pomóc</h5>
                        <div className='line'></div>
                        <p>wybierz zaufane miejsce</p>
                    </div>
                    <div className='col-2 four-steps-column'>
                        <img src={circle}/>
                        <h5>Zamów kuriera</h5>
                        <div className='line'></div>
                        <p>kurier przyjedzie w dogodnym terminie</p>
                    </div>
                </div>
                <div className='row justify-content-center m-0 p-0 '>
                    <a>
                        <div className='largeBtn four-steps-button text-center '>
                            <p>ODDAJ <br/> RZECZY </p>
                        </div>
                    </a>
                </div>


            </div>
        )
    }
}