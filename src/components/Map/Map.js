import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

const zoom = 12;

export const Map = ({ coordinate }) => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator && map) {
      navigator.geolocation.getCurrentPosition((position) => {
        map.setView([position.coords.latitude, position.coords.longitude], zoom);
      });
    }
  }, [map]);

  useEffect(() => {
    if (map && coordinate.length > 0) {
      map.setView(coordinate[0], 9);
    }
  }, [map, coordinate]);

  return (
    <MapContainer
      MapContainer
      style={{ height: "100vh" }}
      center={[50.4504, 30.5245]}
      zoom={zoom}
      scrollWheelZoom={false}
      ref={setMap}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {coordinate.map((el) => (
        <Marker key={`${el[0]}-${el[1]}`} position={el} />
      ))}
    </MapContainer>
  );
};
