import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import markerPNG from '../assets/marker.png';

const AnyReactComponent = ({  text, img_src }) => <div>{text}<img src={img_src} alt="marker" style={{width:24, height:31}} /></div>;
 
class Maps extends Component {
  constructor(props){
    super(props);
    this.state = {
          showingInfoWindow: false,
          activeMarker: {},
          selectedPlace: {}
        }
        // binding this to event-handler functions
        this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMarkerClick = this.onMarkerClick.bind(this);
  }


  static defaultProps = {
    center: {
      lat: 49.260798,
      lng: -123.245934
    },
    zoom: 11
  };
  
  componentDidMount(){
    // or you can set markers list somewhere else
    // please also set your correct lat & lng
    // you may only use 1 image for all markers, if then, remove the img_src attribute ^^
    this.setState({
      markers: [{lat: 49.260776, lng: -123.245936, img_src: markerPNG},
                {lat: 49.260475, lng: -123.251193, img_src: markerPNG},
                {lat: 49.267106, lng: -123.242674,  img_src: markerPNG}],
    });
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
    console.log("worked");
  }

  onMapClick = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAzlL-ahnHzJ5HG4MD8IoC1y2kETuhvajA'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onClick = { this.onMapClick }
        >
          {this.props.markers.map((marker, i) =>{
              return(
                <AnyReactComponent
                  key={i}
                  onClick = { this.onMarkerClick }
                  lat={marker.lat}
                  lng={marker.lng}
                  text={marker.company_name}
                  img_src={markerPNG}
                />
              )
            })}      
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Maps;