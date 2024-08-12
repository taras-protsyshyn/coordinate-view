import { useState } from "react";

import { ConsumerCoordinate, Map } from "./components";

import s from "./App.module.css";

function App() {
  const [coordinate, setCoordinate] = useState([]);

  return (
    <div className={s.app}>
      <ConsumerCoordinate className={s.coordinate} onParse={setCoordinate} />
      <Map coordinate={coordinate} />
    </div>
  );
}

export default App;
