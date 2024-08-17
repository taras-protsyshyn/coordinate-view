import { MapContainer, TileLayer, Marker } from "react-leaflet";

export const Map = ({ coordinate, setMap }) => {
  return (
    <MapContainer
      MapContainer
      style={{ height: "100vh" }}
      center={[50.4504, 30.5245]}
      zoom={12}
      scrollWheelZoom={false}
      ref={setMap}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {coordinate.map((el) => {
        return <Marker key={`${el[0]}-${el[1]}`} position={el} style={{ opacity: 0.5 }} />;
      })}
    </MapContainer>
  );
};
