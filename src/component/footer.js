import React from "react";
import "../css/footer.css";
import BlackCapoo from "./capoos/blackCaooo";
import Capoo from "./capoos/capoo";
import Chicken from "./capoos/chicken";

function Footer() {
  return (
    <footer>
      <div className="foot-txt">Capoo Play Ground</div>
      <Capoo />
      <BlackCapoo />
      <div className="chickens">
        <Chicken />
        <Chicken />
        <Chicken />
      </div>
    </footer>
  );
}
export default Footer;
