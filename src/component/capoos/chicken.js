import React from "react";
import "../../css/chicken.css";

function Chicken() {
  return (
    <div className="chicken cover">
      <div className="body-outline"></div>
      <div className="body-inner">
        <div className="eyes">
          <div className="eye eye-left"></div>
          <div className="eye eye-right"></div>
        </div>
        <div className="mouse">
          <div className="mouse-outline"></div>
          <div className="mouse-inner"></div>
        </div>
      </div>
      <div className="feet">
        <div className="foot foot-left"></div>
        <div className="foot foot-right"></div>
      </div>
    </div>
  );
}
export default Chicken;
