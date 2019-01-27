import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, withScriptjs, Marker, InfoWindow } from 'react-google-maps';
import { compose } from "recompose";
import { Popover, Drawer, notification, Button, Row, Col, Card } from 'antd';


const GoogleMapReact = compose(
  withScriptjs,withGoogleMap)(props => {
    return(
  <GoogleMap
    defaultCenter = {{lat: 49.262218,
      lng: -123.245260}}
    defaultZoom = {15}
    onClick={props.onMapClick}
  >
  {props.markers.map(marker =>{
    const onMarkerClick = props.onMarkerClick.bind(this, marker)
          return(
            <Marker
              key={marker._id}
              onClick={ onMarkerClick }
              position={{lat:marker.lat, lng:marker.lng }}
              label={marker.company_name}
            >
            {
              props.selectedMarker === marker &&
              <InfoWindow>
              <div>
                  <h3>{marker.company_name}</h3>
                  <p>{marker.description}</p>
                  <p>{marker.company_url}</p>
                  <p>{marker.date_applied}</p>
                  <p>{marker.date_posted}</p>
                  <p>{marker.location}</p>
                  <p>{marker.email}</p>
                  <p>{marker.phone}</p>
                  <p>{marker.job_title}</p>
                  {marker.company_name === "ICA Projects Inc" && !props.success?
                  <Popover
                    content="Compatible form found! Would you like to easy-apply?"
                    title="Easy apply"
                    trigger="hover"
                    visible={props.hovered}
                    onVisibleChange={props.handleHoverChange}
                  >
                  <Popover
                    content={(<a href onClick={props.hide}>Close</a>)}
                    title="Successfully applied!"
                    trigger="click"
                    visible={props.clicked}
                    onVisibleChange={props.handleClickChange}
                  >
                    <Button>Easy apply</Button>
                  </Popover>
                </Popover>
                  :
                    null
                  }
                  <p>{marker.listing_url}</p>
                  {props.success ?
                    <p>Interview</p>
                    :
                    <p>{marker.stage}</p>
                  }
              </div>
              </InfoWindow>}

            </Marker>

          )
        })}
  </GoogleMap>)
});

class Maps extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedMarker: false,
      clicked: false,
      hovered: false,
      success: false,
    }
  }

  hide = () => {
    this.setState({
      clicked: false,
      hovered: false,
    });
  }

  handleHoverChange = (visible) => {
    this.setState({
      hovered: visible,
      clicked: false,
    });
  }

  handleClickChange = (visible) => {
    this.setState({
      clicked: visible,
      hovered: false,
      success: true,
    });
    const args = {
      message: 'Success!',
      description: 'Successfully applied to the job. You will receive an email conformation soon!',
      duration: 1.5,
    };
    notification.open(args);
  }

  onMarkerOver = (marker, e) => {
    this.setState({
      selectedMarker: marker,
    });
  }

  onMapOver = (props) => {
      this.setState({
        selectedMarker: false,
      });

  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: window.innerHeight-138, width: '100%' }}>
        <GoogleMapReact
          hide={this.hide}
          handleHoverChange={this.handleHoverChange}
          handleClickChange={this.handleClickChange}
          selectedMarker={this.state.selectedMarker}
          markers={this.props.markers}
          onMapClick={this.onMapOver}
          hovered={this.state.hovered}
          clicked={this.state.clicked}
          visible={this.state.visible}
          success={this.state.success}
          handleVisibleChange={this.handleVisibleChange}
          onMarkerClick={this.onMarkerOver}
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAzlL-ahnHzJ5HG4MD8IoC1y2kETuhvajA&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />

        {/* <Row>
          <Col span={18}>
            <GoogleMapReact
              hide={this.hide}
              handleHoverChange={this.handleHoverChange}
              handleClickChange={this.handleClickChange}
              selectedMarker={this.state.selectedMarker}
              markers={this.props.markers}
              onMapClick={this.onMapOver}
              hovered={this.state.hovered}
              clicked={this.state.clicked}
              visible={this.state.visible}
              success={this.state.success}
              handleVisibleChange={this.handleVisibleChange}
              onMarkerClick={this.onMarkerOver}
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAzlL-ahnHzJ5HG4MD8IoC1y2kETuhvajA&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `100%` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </Col>
          <Col span={6}></Col>
        </Row> */}
        {/* <Drawer
        title="Jobs"
          placement="right"
          closable={false}
          visible={true}
          mask={false}
          zIndex={1}
        >
          {this.props.markers.map((marker, index) => {
            return(
              <div key={index}>
                  <h3>{marker.company_name}</h3>
                  <p>{marker.description}</p>
                  <p>{marker.company_url}</p>
                  <p>{marker.date_applied}</p>
                  <p>{marker.date_posted}</p>
                  <p>{marker.location}</p>
                  <p>{marker.email}</p>
                  <p>{marker.phone}</p>
                  <p>{marker.job_title}</p>
                  <p>{marker.listing_url}</p>
                  <p>{marker.stage}</p>
              </div>
            )
          })}
        </Drawer> */}
      </div>
    );
  }
}

export default Maps;
