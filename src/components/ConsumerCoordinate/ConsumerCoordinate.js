import { useState } from "react";
import Hamburger from "hamburger-react";
import { paseCoordinateFormText } from "./parseText";

import s from "./ConsumerCoordinate.module.css";

export const ConsumerCoordinate = ({ className, onParse }) => {
  const [isOpen, setOpen] = useState(true);
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const parse = () => {
    onParse(paseCoordinateFormText(text));
  };

  return (
    <div className={`${s.wrapper} ${isOpen ? "" : s.wrapperClose} ${className}`}>
      <div className={s.head}>
        <h1 className={s.title}>Текст з координатами </h1>
        <div className={s.burger}>
          <Hamburger toggled={isOpen} toggle={setOpen} size={24} />
        </div>
      </div>
      <textarea onChange={onChange} input={text} className={s.input} rows={5} />
      <button className={s.btn} onClick={parse}>
        Відобразити на карті
      </button>
    </div>
  );
};
