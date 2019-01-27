import React, { Component } from 'react';
import { Card, Row, Col } from 'antd';

class LandingContent extends Component {
  render() {
    return (
      <div className="landing-content-wrapper">
        <Row type="flex" justify="space-around" align="top">
          <Col span={2} />
          <Col span={6}>
            <Card
              title="Find Nearby Jobs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus id diam molestie vestibulum. Aliquam iaculis eros euismod dui mollis luctus.
            </Card>
          </Col>
          <Col span={6}>
            <Card
              title="Organise Your Postings">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus id diam molestie vestibulum. Aliquam iaculis eros euismod dui mollis luctus.
            </Card>
          </Col>
          <Col span={6}>
            <Card
              title="Track Status">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus id diam molestie vestibulum. Aliquam iaculis eros euismod dui mollis luctus.
            </Card>
          </Col>
          <Col span={2} />
        </Row>
      </div>
    );
  }
}

export default LandingContent;
