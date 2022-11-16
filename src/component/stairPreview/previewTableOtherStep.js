import React from "react";

function PreviewTableOtherStep(props) {
  //如果這一階是undefined，給他初始值
  // (a || b) -> 如果a是truthy，回傳a，否則回傳b
  let otherStepInfoFirst = props.otherStepInfoFirst || {
    stepName: "",
    stepHeight: "",
    stepHypotenuse: "",
    stepAngle: "",
    isStepHeightOver: false,
    isStepHypotenuseOver: false,
    isStepAngleOver: false,
  };
  let otherStepInfoSecond = props.otherStepInfoSecond || {
    stepName: "",
    stepHeight: "",
    stepHypotenuse: "",
    stepAngle: "",
    isStepHeightOver: false,
    isStepHypotenuseOver: false,
    isStepAngleOver: false,
  };

  return (
    <tr>
      <th scope="row">第{props.stepName}階</th>
      <td
        style={{
          backgroundColor: otherStepInfoFirst.isStepHeightOver
            ? "rgb(129,172,222)"
            : "",
        }}
      >
        {otherStepInfoFirst.stepHeight}
      </td>
      <td
        style={{
          backgroundColor: otherStepInfoFirst.isStepHypotenuseOver
            ? "rgb(136,200,70)"
            : "",
        }}
      >
        {otherStepInfoFirst.stepHypotenuse}
      </td>
      <td
        style={{
          backgroundColor: otherStepInfoFirst.isStepAngleOver
            ? "rgb(129,172,222)"
            : "",
        }}
      >
        {otherStepInfoFirst.stepAngle}
      </td>
      {/* <!-- 第二個樓層 --> */}
      <td
        style={{
          backgroundColor: otherStepInfoSecond.isStepHeightOver
            ? "rgb(129,172,222)"
            : "",
        }}
      >
        {otherStepInfoSecond.stepHeight}
      </td>
      <td
        style={{
          backgroundColor: otherStepInfoSecond.isStepHypotenuseOver
            ? "rgb(136,200,70)"
            : "",
        }}
      >
        {otherStepInfoSecond.stepHypotenuse}
      </td>
      <td
        style={{
          backgroundColor: otherStepInfoSecond.isStepAngleOver
            ? "rgb(129,172,222)"
            : "",
        }}
      >
        {otherStepInfoSecond.stepAngle}
      </td>
    </tr>
  );
}
export default PreviewTableOtherStep;
