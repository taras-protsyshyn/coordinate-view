import { ConsumerCoordinate, Map } from "./components";

import s from "./App.module.css";

function App() {
  return (
    <div className={s.app}>
      <ConsumerCoordinate className={s.coordinate} />
      <Map />
    </div>
  );
}

export default App;
