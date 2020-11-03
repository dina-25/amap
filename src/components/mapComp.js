import React, {Component} from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import mapStyling from '../styles/map.module.scss'


export default class MapComponent extends Component {
  render() {
    const position = [50.770420, 6.038450]
      if(typeof(window) !== "undefined"){
        return (
          <MapContainer center={position} zoom={20} className={mapStyling.leafletMap}>
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
          </MapContainer>
      )
    }
    return null
  }
}
