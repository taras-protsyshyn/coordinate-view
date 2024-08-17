import { useEffect, useState } from "react";
import qs from "qs";

// TODO: move it to context
export const useCordsFromSearch = () => {
  const [cords, setCords] = useState([]);

  const handleChangeCords = (cords) => {
    window.history.pushState(
      null,
      "",
      window.location.pathname + `?${qs.stringify({ cords }, { encode: false })}`
    );
    setCords(cords);
  };

  useEffect(() => {
    if (window.location.search) {
      const cords = qs.parse(window.location.search.replace("?", ""))?.cords;

      if (Array.isArray(cords)) {
        setCords(cords);
      }

      if (typeof cords === "object") {
        setCords(Object.values(cords));
      }
    }
  }, []);

  return [cords, handleChangeCords];
};
