import { FC } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { StyledCard } from "../../StyledComponents/StyledCard";
import L from "leaflet";

// change this later to be a component with a number on it
const markerIcon = new L.Icon({
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
  shadowSize: [41, 41],
});

export const MapCard: FC = () => {
  // const [center, setCenter] = useState<[number, number]>([38.83772130989119, -104.81939388855676]);

  const center: [number, number] = [38.83772130989119, -104.81939388855676]


  return (
    <StyledCard>
      <MapContainer
        center={center}
        zoom={13}
        scrollWheelZoom={true}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          className="map-tiles"
        />
        <Marker position={center} icon={markerIcon}>
          <Popup>
            Searched location: {"A place"}. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      <style>
        {`
          .map-tiles {
            filter: invert(100%) hue-rotate(360deg) brightness(95%) contrast(90%) saturate(70%);
          }
        `}
      </style>
      {/* Bright Version */}
      {/* <style>
        {`
          .map-tiles {
            filter: brightness(100%) contrast(100%) saturate(100%);
          }
        `}
      </style> */}
    </StyledCard>
  );
};
