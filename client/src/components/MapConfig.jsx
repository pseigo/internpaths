import React, { Component } from 'react';
import { Form } from 'antd';
import MapConfigForm from './MapConfigForm';
import '../assets/styles/mapconfig.css';

class MapConfig extends Component {
  render() {
    const WrappedMapConfigForm = Form.create({ name: 'map_config' }) (MapConfigForm);

    return (
      <div className="map-config">
        <WrappedMapConfigForm 
          handleSubmit={this.props.handleSubmit}
        />
      </div>
    );
  }
}

export default MapConfig;
