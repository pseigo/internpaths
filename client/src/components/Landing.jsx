import React, { Component } from 'react';
import Navbar from './Navbar';
import LandingHero from './LandingHero';
import LandingContent from './LandingContent';
import '../assets/styles/landing.css';
import Footer from './Footer';

class Landing extends Component {
    render() {
        return (
            <div className="body">
                <Navbar />
                <LandingHero />
                <LandingContent />
                <Footer />
            </div>
        );
    }
}

export default Landing;
