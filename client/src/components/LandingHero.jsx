import React, { Component } from 'react';
import MapConfig from './MapConfig';
import { Row, Col } from 'antd';

class LandingHero extends Component {
    render() {
        return (
        <div className="landing-hero">
            <Row type="flex" justify="center">
                <Col span={16}>
                    <h1 style={{color: 'white',
                                'text-shadow': '2px 2px 4px #000000',
                                'font-size': '36px'}}>
                        Find jobs and track your progress.
                    </h1>
                </Col>
            </Row>
            <Row type="flex" justify="center">
                <Col sm={20} md={14} lg={12}>
                    <MapConfig />
                </Col>
                <Col sm={0} md={4} lg={6} />
            </Row>
        </div>
    );
    }
}

export default LandingHero;
