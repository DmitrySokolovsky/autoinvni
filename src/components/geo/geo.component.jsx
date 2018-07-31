import React from 'react';
import './geo.style.scss';

import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"

export const Geo = withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
        {props.isMarkerShown || <Marker position={{ lat: -34.397, lng: 150.644 }} />}
    </GoogleMap>
);
