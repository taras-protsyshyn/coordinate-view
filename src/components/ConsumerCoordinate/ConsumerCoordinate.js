import { getWGSDecimalFromText } from "./parseText";

import s from "./ConsumerCoordinate.module.css";
import { useState } from "react";

export const ConsumerCoordinate = ({ className, onParse }) => {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const parse = () => {
    onParse(getWGSDecimalFromText(text));
  };

  return (
    <div className={`${s.wrapper} ${className}`}>
      <h1 className={s.title}>Текст з координатами </h1>
      <textarea onChange={onChange} input={text} className={s.input} rows={5} />
      <button onClick={parse}>Відобразити на карті</button>
    </div>
  );
};
