import React from "react";

function PreviewTableFirstStep(props) {
  //如果這一階是undefined，給他初始值
  // (a || b) -> 如果a是truthy，回傳a，否則回傳b
  let firstStepInfoFirst = props.firstStepInfoFirst || {
    stepName: "",
    stepWidth: "",
    stepHeight: "",
    isStepHeightOver: false,
  };
  let firstStepInfoSecond = props.firstStepInfoSecond || {
    stepName: "",
    stepWidth: "",
    stepHeight: "",
    isStepHeightOver: false,
  };

  return (
    <tr>
      <th scope="row">第1階</th>
      <td rowSpan="15">{firstStepInfoFirst.stepWidth}</td>
      <td className="first-step">
        <div
          className="first-step-border"
          style={{
            color: firstStepInfoFirst.isStepHeightOver ? "red" : "",
          }}
        >
          {firstStepInfoFirst.stepHeight}
        </div>
      </td>
      <td className="cross">
        <div className="cross-line"></div>
      </td>
      <td className="cross">
        <div className="cross-line"></div>
      </td>
      <td rowSpan="15" className="border-double-r">
        <div>是否皆</div>
        <div>≧12公分</div>
      </td>
      {/* <!-- 第二個樓層 --> */}
      <td rowSpan="15">{firstStepInfoSecond.stepWidth}</td>
      <td className="first-step">
        <div
          className="first-step-border"
          style={{
            color: firstStepInfoSecond.isStepHeightOver ? "red" : "",
          }}
        >
          {firstStepInfoSecond.stepHeight}
        </div>
      </td>
      <td className="cross">
        <div className="cross-line"></div>
      </td>
      <td className="cross">
        <div className="cross-line"></div>
      </td>
      <td rowSpan="15" className="border-r">
        <div>是否皆</div>
        <div>≧12公分</div>
      </td>
    </tr>
  );
}
export default PreviewTableFirstStep;
