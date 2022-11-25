import React from "react";
import "../../css/chicken.css";

export function Chicken() {
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
export function TrumpetChicken() {
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
      <div className="trumpet">
        <div className="trumpet-triangle">
          <div className="triangle-outline"></div>
          <div className="triangle-inner"></div>
        </div>
        <div className="horn-big">
          <div className="horn-outline"></div>
          <div className="horn-inner"></div>
        </div>
        <div className="horn-small">
          <div className="horn-outline"></div>
          <div className="horn-inner"></div>
        </div>
        <div className="trumpet-sound">
          <div className="sound sound-1"></div>
          <div className="sound sound-2"></div>
          <div className="sound sound-3"></div>
        </div>
      </div>
    </div>
  );
}
