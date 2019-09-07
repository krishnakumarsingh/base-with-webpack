import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from 'react'
const mapStyles = {
  width: '100%',
  height: '25rem',
};
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  mapClicked(mapProps, map, clickEvent) {
    console.log('mapProps, map, clickEvent');
  }
  onMarkerClick(mapProps, map, clickEvent) {
    console.log('mapProps, map, clickEvent');
  }
  onInfoWindowClose(mapProps, map, clickEvent) {
    console.log('mapProps, map, clickEvent');
  }
  render() {
    return (
        <Map
          google={this.props.google}
          zoom={20}
          style={mapStyles}
          center={{
            lat: 12.925453,
            lng: 77.546761
          }}
          onClick={this.mapClicked}
        >
          <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
          <InfoWindow onClose={this.onInfoWindowClose}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
          </InfoWindow>
        </Map>
    );
  }
}

export default GoogleApiWrapper(
  (props) => ({
    apiKey: props.apiKey,
    language: props.language,
  }
))(Map);