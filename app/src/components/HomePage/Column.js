import React, {Component} from 'react';

export class Column extends Component {
    render() {
        return(
            <div className='col-4 text-center column-container'>
                <h3 className='m-2 p-2'>{this.props.number}</h3>
                <h4 className=' p-2 m-3' >{this.props.action}</h4>
                <p className='text-center p-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consequuntur, deleniti deserunt exercitationem impedit ipsam ipsum laboriosam libero minus, neque nobis porro quaerat quas rem rerum tempora tenetur totam! Accusamus!</p>
            </div>
        )
    }
}