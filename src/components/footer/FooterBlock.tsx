import style from "./FooterBlock.module.scss";
import { NavLink } from "react-router-dom";

export default function FooterBlock() {
  return (
    <div className={style.footerBlock}>
      <NavLink to="/" className={style.footerLink} />
      The design was honestly copied by Andrew. No rights, no responsibilities.
    </div>
  );
}
