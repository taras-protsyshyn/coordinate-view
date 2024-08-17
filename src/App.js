import { useEffect, useState } from "react";

import { ConsumerCoordinate, Map } from "./components";
import { useCordsFromSearch } from "./hooks";

import s from "./App.module.css";

function App() {
  const [cords, setCoordinate] = useCordsFromSearch();
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (map && cords.length > 0) {
      map.setView(cords[0], 9);
    }
  }, [map, cords]);

  const onParse = (cords) => {
    setCoordinate(cords);
  };

  const onRemove = (el) => {
    setCoordinate(cords.filter(([lat, lon]) => !(el[0] === lat && el[1] === lon)));
  };

  return (
    <div className={s.app}>
      <ConsumerCoordinate
        className={s.coordinate}
        onSetView={(cord) => map.setView(cord, 12)}
        onParse={onParse}
        cords={cords}
        onRemove={onRemove}
      />
      <Map setMap={setMap} coordinate={cords} />
    </div>
  );
}

export default App;
