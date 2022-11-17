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

  otherStepInfoFirst.stepHeight = valueToDeciaml1(
    otherStepInfoFirst.stepHeight
  );
  otherStepInfoFirst.stepHypotenuse = valueToDeciaml1(
    otherStepInfoFirst.stepHypotenuse
  );
  otherStepInfoFirst.stepAngle = valueToDeciaml2(otherStepInfoFirst.stepAngle);
  otherStepInfoSecond.stepHeight = valueToDeciaml1(
    otherStepInfoSecond.stepHeight
  );
  otherStepInfoSecond.stepHypotenuse = valueToDeciaml1(
    otherStepInfoSecond.stepHypotenuse
  );
  otherStepInfoSecond.stepAngle = valueToDeciaml2(
    otherStepInfoSecond.stepAngle
  );

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

//將傳入的值取到小數點下一位（或自動補０）
function valueToDeciaml1(value) {
  if (value === "") {
    //如果是空值，直接回傳
    return value;
  } else {
    //是數字
    if (value.toString().includes(".")) {
      //如果有小數點
      //取出小數點後的數值
      let afterDecimalStr = value.toString().split(".")[1];
      if (afterDecimalStr !== "0") {
        //如果小數點後不是0，取小數點下一位
        value = Math.round(value * 10) / 10;
      }
    } else {
      //沒有小數點，補０
      value += ".0";
    }
  }
  return value;
}
//傳入的值取小數點下第二位
function valueToDeciaml2(value) {
  if (value === "") {
    //如果是空值，直接回傳
    return value;
  } else {
    //是數字
    if (value.toString().includes(".")) {
      //如果有小數點，取小數點下二位
      value = Math.round(value * 100) / 100;
      //取出小數點後字串
      let afterDecimalStr = value.toString().split(".")[1];
      if (afterDecimalStr.length === 1) {
        //如果小數點後字串只有一位 ex. 20.5 -> 20.50
        value += "0";
      }
    } else {
      //沒有小數點，補０
      value += ".00";
    }
  }
  return value;
}
