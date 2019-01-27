import React, { Component } from 'react';
import { Form, Input, Icon, Checkbox, Button } from 'antd';
import "antd/dist/antd.css"; // TODO: merge to index.js
import MapConfigForm from './MapConfigForm';
import '../assets/styles/mapconfig.css'

class MapConfig extends Component {
  render() {
    const WrappedMapConfigForm = Form.create({ name: 'map_config' }) (MapConfigForm);

    return (
      <div className="map-config">
        <WrappedMapConfigForm />
      </div>
    );
  }
}

export default MapConfig;
