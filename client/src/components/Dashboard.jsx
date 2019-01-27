import React, { Component } from 'react';
import Navbar from './Navbar';
import MapController from './MapController'
import Footer from './Footer'
import JobsListHandler from './JobsListHandler';
import { Card, Col, Row } from 'antd';
import axios from 'axios';
import '../assets/styles/dashboard.css'

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
                    <Col span={6} className="mapSidebar">
                        <Card>
                        <h3>Ponderosa Studios</h3>
                        Latero Labs is looking for a Software Developer that is passionate about building products to work with small teams on various upcoming projects. Join a dynamic, dedicated, and collaborative team to tackle real-world problems from many different industry verticals.

                        <h3>Gold's Gym University Market</h3>
                        This is a full time permanent position based on 37 hour/week with the annual salary of $72K and competitive benefits package including extended health, vision, dental and disability insurance, 3 business weeks paid vacation, up to 6 paid sick days per year, gym membership, training subsidy. This role will be working out of our corporate office at 200-13111 Vanier Place, Richmond, BC, V6V 2J1

                        <br /><br />
                        <h3>ICA Projects Inc</h3>
                        Payfirma is looking for a junior software developer with background in building scalable, web and mobile applications. Working within an Agile environment you will assist in the development of our HQ platform and mobile apps. If you are driven, a detail-oriented problem solver, and are looking for an opportunity where you can develop experience across a variety of technologies, Payfirma is a great organization for you to grow within.

                        <br /><br />
                        <h3>Takumi Japanese Restaurant</h3>
                        We are looking for full stack developers to join our talented and amazing team in Vancouver.REBCA is an innovative startup in the real estate industry that is determined to introduce exciting and groundbreaking changes to the industry. Our vision is to bring forth unprecedented levels of responsiveness, efficiency, convenience, and transparency in different aspects of the real estate services. If you are an ambitious individual interested in joining a team to help shape the future of the real estate industry, we encourage you to apply!

                        <br /><br />
                        <h3>UBC Farm</h3>
                        Clevest is growing our development team and looking for a Junior Software Developer with a passion for developing software. You will be responsible for delivering quality software systems from requirements through design, development, integration and QA. Development activities may include new product functionality, troubleshooting and maintenance.

                        <br /><br />
                        <h3>BC Golf Museum</h3>
                        You're keen to be a part of a team designing, building, testing, and deploying code daily into a Production environment. You're on your way to becoming a full-stack developer, meaning: you understand front end development and debugging, have experience on the back end, and may have tinkered with databases and servers. You've heard of agile software development and may have participated in a Scrum team at work or in school.
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
