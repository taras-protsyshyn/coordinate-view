import toast from "react-hot-toast";

import { CopyLink } from "../../icons";

import s from "./CopyURLBtn.module.css";

export const CopyURLBtn = () => {
  const copyURL = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast("Посилання скопійоване");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div onClick={copyURL} className={s.wrapper}>
      <CopyLink />
    </div>
  );
};
