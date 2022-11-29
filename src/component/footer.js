import React from "react";
import "../css/footer.css";
import BlackCapoo from "./capoos/blackCaooo";
import Capoo from "./capoos/capoo";
import { Chicken, TrumpetChicken } from "./capoos/chicken";

function Footer() {
  return (
    <footer className="no-print">
      <div className="foot-txt">Capoo Play Ground</div>
      <Capoo />
      <BlackCapoo />
      <div className="chickens">
        <TrumpetChicken />
        <Chicken />
        <Chicken />
      </div>
    </footer>
  );
}
export default Footer;
