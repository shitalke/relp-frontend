import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";

import axios from "axios";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const ucsdCenter = {
  lat: 32.8801,
  lng: -117.23,
};

function MapComonent({ name, lat, lng }) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY,
  });

  // redirect function -- invoked when map is clicked
  const redirectToLocation = () => {
    // get user's current location
    axios({
      method: "post",
      url: `https://www.googleapis.com/geolocation/v1/geolocate?key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}`,
      data: {},
    })
      .then((res) => {
        // generate redirect url for directions to restroom
        const url = `https://www.google.com/maps/dir/?api=1&origin=${res.data.location.lat},${res.data.location.lng}&destination=${lat},${lng}&travelmode=walking`;
        window.open(url, "_blank");
      })
      .catch((err) => {
        // no location found
        console.log(err);
      });
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={ucsdCenter}
      zoom={14}
      clickableIcons={false}
      onClick={() => redirectToLocation()}
    >
      <Marker
        label={name}
        position={{ lat: parseFloat(lat), lng: parseFloat(lng) }}
        zIndex={10}
      />
    </GoogleMap>
  ) : (
    <></>
  );
}

// memoize component
const Map = React.memo(MapComonent);

export default function RestroomMap(props) {
  return (
    <>
      <div style={{ borderRadius: "15px", overflow: "hidden", zIndex: "5" }}>
        <Map name={props.name} lat={props.latitude} lng={props.longitude} />
      </div>
    </>
  );
}
