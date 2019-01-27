import React, { Component } from 'react';
import Map from './Map';

class Company extends Component {
    
    render() {
        return (  
            <div>
                <Map
                    markers={this.props.data}
                />
            </div>
        );
    }
}
 
export default Company;