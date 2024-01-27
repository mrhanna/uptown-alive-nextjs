'use client';

import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

export default function Map(props) {
    return (
        <MapContainer center={props.coordinate} zoom={13} {...props}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={props.coordinate}>
            <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
            </Marker>
        </MapContainer>
    );
}