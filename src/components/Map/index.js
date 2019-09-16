import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from 'react'

class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  render() {
    const { apiKey, zoom, mapStyles, center, initialCenter } = this.props;
    return (
        <Map
          google={this.props.google}
          zoom={zoom}
          style={mapStyles}
          center={center}
          initialCenter={initialCenter}
        >
        </Map>
    );
  }
}

export default GoogleApiWrapper(
  (props) => ({
    apiKey: props.apiKey,
    language: props.language,
  }
))(MapComponent);