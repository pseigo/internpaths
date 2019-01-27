import React, { Component } from 'react';
import Navbar from './Navbar';
import MapController from './MapController'
import JobsList from './JobsList'
import Footer from './Footer'
import JobsListHandler from './JobsListHandler';
import { Card, Col, Row } from 'antd';
import axios from 'axios';
import { Empty } from 'antd';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            markers: ""
        }
    }

    componentDidMount() {
        axios.post('/api/get', {
            job_title: 'Software Developer',
        })
        .then(function(res) {
            this.setState({
                markers: res.data
            })
            console.log(res)
        })
        .catch(function(err) {
            console.log(err);
        })
    }

    render() {
        return (
            <div className="dashboard-wrapper">
                <Navbar />
                <Row>
                    <Col span={18}>
                        <MapController filter={this.props.job_title} />
                    </Col>
                    <Col span={6}>
                        <Card>
                        <h3>Gold's Gym University Market</h3>
                        This is a full time permanent position based on 37 hour/week with the annual salary of $72K and competitive benefits package including extended health, vision, dental and disability insurance, 3 business weeks paid vacation, up to 6 paid sick days per year, gym membership, training subsidy. This role will be working out of our corporate office at 200-13111 Vanier Place, Richmond, BC, V6V 2J1
                        <br /><br />
                        <h3>ICA Projects Inc</h3>
                        Payfirma is looking for a junior software developer with background in building scalable, web and mobile applications. Working within an Agile environment you will assist in the development of our HQ platform and mobile apps. If you are driven, a detail-oriented problem solver, and are looking for an opportunity where you can develop experience across a variety of technologies, Payfirma is a great organization for you to grow within.
                        <br /><br />
                        <h3>Ponderosa Studios</h3>
                        Latero Labs is looking for a Software Developer that is passionate about building products to work with small teams on various upcoming projects. Join a dynamic, dedicated, and collaborative team to tackle real-world problems from many different industry verticals.
                        </Card>
                        </Col>
                </Row>

                <JobsListHandler />
                <Footer />
            </div>
        );
    }
}

export default Dashboard;
