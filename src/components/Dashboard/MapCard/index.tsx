import { FC, useState } from "react";
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
  const [center, setCenter] = useState<[number, number]>([38.83772130989119, -104.81939388855676]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(searchQuery)}&format=json&limit=1`
      );
      const data = await response.json();
      if (data.length > 0) {
        const { lat, lon } = data[0];
        setCenter([parseFloat(lat), parseFloat(lon)]);
      }
    } catch (error) {
      console.error("Geocoding error:", error);
    }
  };

  return (
    <StyledCard>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for a place"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
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
            Searched location: {searchQuery || "A place"}. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      <style>
        {`
          .map-tiles {
            filter: invert(100%) hue-rotate(360deg) brightness(95%) contrast(90%) saturate(80%);
          }
        `}
      </style>
    </StyledCard>
  );
};
