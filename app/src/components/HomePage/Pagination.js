import React, {Component} from 'react';

export class Pagination extends Component {


    render() {
     return (
         <div>
             {this.createNrArr().map(e => {
              return    <a key={e}   onClick={() => this.handleClick(e) }
                           style={{fontWeight: this.props.currentPage === e && 'bold'}}
                           className='pageBtn'>{e}</a>
                 }
             )}
         </div>
     )
    }
    createNrArr = () => {
        const arr = [];
        for(let i = 1 ; i <= this.props.organization.length / 3 ; i++){
            arr.push(i);
        }
        return arr;
    }

    handleClick = (e) => {
        this.props.callback(e);
    }

}