import React from "react";

function OtherEditor(props) {
  return (
    <div className="other-editor">
      <div className="check-group">
        <input
          type="checkbox"
          value=""
          checked={props.otherQuestionInfo.stepRounded}
          onChange={() => props.handleOtherQChange("stepRounded")}
          id="stepRounded"
        />
        <label className="form-check-label" htmlFor="stepRounded">
          ※梯階圓角≦9mm半徑圓弧(履帶式條件)
        </label>
      </div>
      <div className="check-group">
        <input
          type="checkbox"
          value=""
          checked={props.otherQuestionInfo.stepDeep}
          onChange={() => props.handleOtherQChange("stepDeep")}
          id="stepDeep"
        />
        <label className="form-check-label" htmlFor="stepDeep">
          ※級深皆≧12公分 (撐桿式條件)
        </label>
      </div>
      <div className="check-group">
        <input
          type="checkbox"
          value=""
          checked={props.otherQuestionInfo.stepSpecial}
          onChange={() => props.handleOtherQChange("stepSpecial")}
          id="stepSpecial"
        />
        <label className="form-check-label" htmlFor="stepSpecial">
          ※有三角型階梯、螺旋型階梯(履帶式條件)
        </label>
      </div>
    </div>
  );
}
export default OtherEditor;
