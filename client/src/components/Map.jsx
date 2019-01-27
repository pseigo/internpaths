import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class Maps extends Component {

  static defaultProps = {
    center: {
      lat: 49.260798,
      lng: -123.245934
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAzlL-ahnHzJ5HG4MD8IoC1y2kETuhvajA'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={49.260798}
            lng={-123.245934}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Maps;