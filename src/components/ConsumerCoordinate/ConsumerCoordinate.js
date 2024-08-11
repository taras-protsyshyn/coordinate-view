import s from "./ConsumerCoordinate.module.css";

export const ConsumerCoordinate = ({ className }) => {
  return (
    <div className={`${s.wrapper} ${className}`}>
      <h1 className={s.title}>Текст з координатами </h1>
      <textarea className={s.input} rows={5} />
    </div>
  );
};
