import React, { Component } from 'react';
import { Form, Input, Icon, Checkbox, Button } from 'antd';
import "antd/dist/antd.css";
import MapConfigForm from './MapConfigForm';
import '../assets/styles/MapConfig.css'

class MapConfig extends Component {
  render() {
    const WrappedMapConfigForm = Form.create({ name: 'normal_login' }) (MapConfigForm);

    return (
      <div className="map-config">
        <WrappedMapConfigForm />
        <h1>This is a super long header inside this box.</h1>
      </div>
    );
  }
}

export default MapConfig;
