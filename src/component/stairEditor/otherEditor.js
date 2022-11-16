import React from "react";

function OtherEditor() {
  return (
    <div className="other-editor">
      <div className="check-group">
        <input type="checkbox" value="" id="stepRounded" />
        <label className="form-check-label" htmlFor="stepRounded">
          ※梯階圓角≦9mm半徑圓弧(履帶式條件)
        </label>
      </div>
      <div className="check-group">
        <input type="checkbox" value="" id="stepDeep" />
        <label className="form-check-label" htmlFor="stepDeep">
          ※級深皆≧12公分 (撐桿式條件)
        </label>
      </div>
      <div className="check-group">
        <input type="checkbox" value="" id="stepSpecial" />
        <label className="form-check-label" htmlFor="stepSpecial">
          ※有三角型階梯、螺旋型階梯(履帶式條件)
        </label>
      </div>
    </div>
  );
}
export default OtherEditor;
