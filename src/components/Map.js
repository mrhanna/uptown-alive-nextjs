'use client';

import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import * as L from 'leaflet';
import 'leaflet-defaulticon-compatibility';


export default function Map(props) {
    const center = [0,0];
    const markers = [];
    
    props.markers.forEach((marker) => {
        center[0] += marker.lat;
        center[1] += marker.lon;

        markers.push(
            <Marker key={markers.length} position={[marker.lat, marker.lon]}>
                <Popup>
                    {marker.info}
                </Popup>
            </Marker>
        );
    });

    console.log(center);

    if (markers.length > 0) {
        center[0] /= markers.length;
        center[1] /= markers.length;
    }
    
    return (
        <MapContainer 
            center={center}
            zoom={13}
            attributionControl={false}
            zoomControl={false}
            {...props}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {markers}
        </MapContainer>
    );
}