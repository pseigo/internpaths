import React, { Component } from 'react';
import Map from '../components/Map';

class Company extends Component {
    constructor(props) {
        super(props);

        this.renderPage = this.renderPage.bind(this);
    }

    renderPage() {
        let data = this.props.data;
        let menu = [];
        Object.keys(data).map((index) => {
            return(
            menu.push(
                <div key={index}>
                    <h3>{data[index].company_name}</h3>
                    <p>{data[index].description}</p>
                    <p>{data[index].company_url}</p>
                    <p>{data[index].date_applied}</p>
                    <p>{data[index].date_posted}</p>
                    <p>{data[index].location}</p>
                    <p>{data[index].email}</p>
                    <p>{data[index].phone}</p>
                    <p>{data[index].job_title}</p>
                    <p>{data[index].listing_url}</p>
                    <p>{data[index].stage}</p>
                </div>
            ))
        })
        return menu;
    }
    
    render() {
        return (  
            <div>
                <Map
                    markers={this.props.data}
                />
                {this.renderPage()}
            </div>
        );
    }
}
 
export default Company;