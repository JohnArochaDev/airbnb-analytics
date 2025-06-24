import { FC } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { StyledCard } from "../../StyledComponents/StyledCard";

export const MapCard: FC = () => {
  return (
    <StyledCard>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          className="map-tiles"
        />
        {/* map through the plots found and place markers like these below */}
        {/* <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
      </MapContainer>
      <style>
        {`
          .map-tiles {
            filter: invert(100%) hue-rotate(360deg) brightness(95%) contrast(90%);
          }
        `}
      </style>
    </StyledCard>
  );
};