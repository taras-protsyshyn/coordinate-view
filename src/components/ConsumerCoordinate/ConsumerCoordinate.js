import { useState } from "react";
import Hamburger from "hamburger-react";
import { getWGSDecimalFromText } from "./parseText";

import s from "./ConsumerCoordinate.module.css";

export const ConsumerCoordinate = ({ className, onParse, cords, onSetView, onRemove }) => {
  const [isOpen, setOpen] = useState(true);
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const parse = () => {
    onParse(getWGSDecimalFromText(text));
  };

  const clear = () => {
    onParse([]);
  };

  return (
    <div className={`${s.wrapper} ${isOpen ? "" : s.wrapperClose} ${className}`}>
      <div className={s.head}>
        <div className={s.subHead}>
          <h1 className={s.title}>Текст з координатами </h1>
          <p className={s.subTitle}>Координати в форматі WGS-84 десяткові</p>
        </div>
        <div className={s.burger}>
          <Hamburger toggled={isOpen} toggle={setOpen} size={24} />
        </div>
      </div>
      {cords.length ? (
        <ul className={s.cordsList}>
          {cords.map((el) => (
            <li className={s.cordsListItem} key={el[0] + "-" + el[1]}>
              <button onClick={() => onSetView(el)} className={s.cord}>
                {el[0]}; {el[1]}
              </button>
              <button onClick={() => onRemove(el)} className={s.remove}>
                x
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <textarea onChange={onChange} input={text} className={s.input} rows={5} />
      )}
      {cords.length ? (
        <button className={s.btn} onClick={clear}>
          Очистити
        </button>
      ) : (
        <button className={s.btn} onClick={parse}>
          Відобразити на карті
        </button>
      )}
    </div>
  );
};
