import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvent,
  useMapEvents,
} from "react-leaflet";
import { useEffect, useState } from "react";
import { useCities } from "../contexts/CitiesContext";
import { useGeolocation } from "../hooks/useGeoLocation";
import Button from "./Button";
import { useUrlPosition } from "../hooks/useUrlPositon";

function Map() {
  const navigate = useNavigate(); //return a fn ,it is used to navigate to particular url
  const [mapPosition, setMapPosition] = useState([40, 0]); //rember map longitude and longitude over time
  const { cities } = useCities(); //getting access to cities loaded from api using context api

  // when we wwant some fucntionality to be reused,we use custom hooks in react
  //it can comprise of stateful logic and other hooks and returning state and state updating fns sometimes
  const {
    isLoading: isLoadingPosition,
    position: geolocationPostion,
    getPosition,
  } = useGeolocation();

  //since we are using the same logic at multiple places we can use a custom hook
  // const [searchParams] = useSearchParams();
  // const mapLat = searchParams.get("lat");
  // const mapLng = searchParams.get("lng");

  const [mapLat, mapLng] = useUrlPosition();

  //synchronizing mapPosition with mapLat and mapLng when one of them changes atleast
  useEffect(
    function () {
      if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
    },
    [mapLat, mapLng]
  );

  useEffect(
    function () {
      if (geolocationPostion) setMapPosition([geolocationPostion.lat, geolocationPostion.lng]);
    },
    [geolocationPostion]
  );
  return (
    <div className={styles.mapContainer}>
      {!geolocationPostion && (
        <Button type="position" onClick={getPosition}>
          {isLoadingPosition ? "Loading..." : "Use your position"}
        </Button>
      )}
      <MapContainer center={mapPosition} zoom={6} scrollWheelZoom={true} className={styles.map}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker position={[city.position.lat, city.position.lng]} key={city.id}>
            <Popup>
              <span>{city.emoji}</span> <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position={mapPosition} />
        <DetectClick />
      </MapContainer>
    </div>
  );
}

// Now in this library, everything works with components.

// So whenever we need to implement a functionality like this

// we need to create a custom component

function ChangeCenter({ position }) {
  const map = useMap(); //to get instance of map which is currently being displayed
  map.setView(position);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();
  // to the useMap Event hook we pass the object with click property set to a callback function
  //that will be called when map gets clicked
  //in this case event object we will have latlng property that gives us the position where we have clciked
  useMapEvents({
    click: (e) => {
      const newUrl = `form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`;
      navigate(newUrl);
    },
  });
  return null;
}
// const DetectClick = (e) => {
//   const navigate = useNavigate();
//   const { lat, lng } = e.latlng;
//   navigate("form", { state: { lat, lng } });
// };
export default Map;

//step1 check out documentation

//first check out installation

//then the sample code
