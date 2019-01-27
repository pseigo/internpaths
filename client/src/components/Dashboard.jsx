import React, { Component } from 'react';
import Navbar from './Navbar';
import MapController from './MapController'
import JobsList from './JobsList'
import Footer from './Footer'
import JobsListHandler from './JobsListHandler';

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard-wrapper">
                <Navbar />
                <MapController filter={this.props.job_title} />
                <JobsListHandler />
                <Footer />
            </div>
        );
    }
}

export default Dashboard;
