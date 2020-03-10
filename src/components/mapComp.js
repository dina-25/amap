import React, {Component} from 'react'
import Leaflet from 'leaflet'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import mapStyling from '../styles/map.module.scss'

Leaflet.Icon.Default.imagePath =
'../node_modules/leaflet'

delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

export default class MapComponent extends Component {
    state = {
      lat: 50.770420,
      lng: 6.038450,
      zoom: 13,
  }


  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map center={position} zoom={this.state.zoom} className={mapStyling.leafletMap}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={position}>
          <Popup>
            Amap GmbH <br/> Schurzelter Straße 570 <br/>
52074 Aachen
          </Popup>
        </Marker>
      </Map>
    )
  }
}
