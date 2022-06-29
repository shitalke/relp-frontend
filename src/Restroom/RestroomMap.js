import React, {Component} from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const ucsdCenter = {
  lat: 32.8801,
  lng: -117.2300
};


function MapComonent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAGKGmhs8VyoDmXuRtsOzKSD0aZ43q0MPY"
  })

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={ucsdCenter}
        zoom={14}

      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

const Map = React.memo(MapComonent)

export default function RestroomMap() {
  const redirectToLocation = () => {
    console.log("hello")
  }
    return(
      <>
      <div style={{borderRadius:"15px", overflow: "hidden", zIndex:"5"}} onClick={() => redirectToLocation()}>
        <Map />
      </div>
      </>
    );
}
