import React,{ useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
// import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// let DefaultIcon = L.icon({
//   iconUrl: icon,
//   shadowUrl: iconShadow,
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
//   tooltipAnchor: [16, -28],
//   shadowSize: [41, 41]
// });

let RedIcon = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});


function Map() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    async function fetchLocations() {
      try {
        // const response = await axios.get("http://localhost:3000/api/v1/tours/locations/64522042bd6e2043389c9191");
        // const data = response.data;
        const data = [[23.36584,42.6936],[23.41361,42.68014],[23.45644,42.6646]];
    
        const locations = data.map((location) => {
          const latitude = location[1];
          const longitude = location[0];
    
          // only return values if both latitude and longitude are defined
          if (latitude && longitude) {
            return {
              latitude,
              longitude
            };
          }
    
          return null; // otherwise return null
        }).filter(location => location !== null); // filter out null values
    
        setLocations(locations);
        // console.log(locations.latitude);
      } catch (error) {
        console.log(error);
      }
    }
    
    fetchLocations();
  }, []);


  const positionList = locations.map((location) => {
    console.log(location);
    return [location.latitude, location.longitude];
  });

  const markers = locations.map((location, index) => {
    return (
      <Marker key={index} position={[location.latitude, location.longitude]} icon={RedIcon}>
        <Popup>{location.name}</Popup>
      </Marker>
    );
  });

  const [route, setRoute] = useState([]);

  useEffect(() => {
    async function fetchRoute() {
      if (positionList.length > 1) {
        try {
          const encodedPositions = positionList.map((position) => position.reverse().join(',')).join(';');
          const url = `http://router.project-osrm.org/route/v1/driving/${encodedPositions}?geometries=geojson&overview=full`;

          // const url = "https://router.project-osrm.org/route/v1/driving/${positionList.map((position) => position.reverse().join(',')).join(';')}?geometries=geojson&overview=full";
          const response = await axios.get(url);
          const data = response.data;
          const route = data.routes[0].geometry.coordinates.map((coord) =>
            coord.reverse()
          );
          setRoute(route);
        } catch (error) {
          console.log(error);
        }
      }
    }

    fetchRoute();
  }, [positionList]);

  // console.log(positionList[0]);

  const center = positionList.length > 0 ? positionList[0] : [19.076090,72.877426];

  return (
    <MapContainer center={center} zoom={6} style={{ height: "100px" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {markers}
      {route.length > 1 && <Polyline positions={route} />}
    </MapContainer>
  );
}

export default Map;
