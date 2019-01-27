import React, { Component } from 'react';
import Navbar from './Navbar';
import LandingHero from './LandingHero';
import '../assets/styles/landing.css'
import LandingContent from './LandingContent';

class Landing extends Component {
    render() {
        return (
            <div className="body">
                <Navbar />
                <LandingHero />
                <LandingContent />
            </div>
        );
    }
}

export default Landing;
