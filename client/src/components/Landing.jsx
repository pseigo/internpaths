import React, { Component } from 'react';
import Navbar from './Navbar';
import LandingHero from './LandingHero';
import LandingContent from './LandingContent';
import '../assets/styles/landing.css';
import Footer from './Footer';
import App from './MapController';
import Dashboard from './Dashboard';

class Landing extends Component {
    constructor(props){
        super(props);

        this.state={
          map: false,
          job_title: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (e, form) => {
        e.preventDefault();
        form.validateFields((err, values) => {
          if (!err) {
            //console.log('Received values of form: ', values);
            this.setState({
              map: true,
              job_title: values['job_title']
            })
          }
        });
    }

    render() {
        if (!this.state.map) {
            return (
                <div className="body">
                    <Navbar />
                    <LandingHero
                        handleSubmit={this.handleSubmit}
                    />
                    <LandingContent />
                    <Footer />
                </div>
            );
        }
        else if(this.state.map) {
            return(
                <Dashboard
                    job_title={this.state.job_title}
                />
            )
        }

    }
}

export default Landing;
