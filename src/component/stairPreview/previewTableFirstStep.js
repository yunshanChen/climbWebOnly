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
  firstStepInfoFirst.stepWidth = valueToDeciaml1(firstStepInfoFirst.stepWidth);
  firstStepInfoFirst.stepHeight = valueToDeciaml1(
    firstStepInfoFirst.stepHeight
  );
  firstStepInfoSecond.stepWidth = valueToDeciaml1(
    firstStepInfoSecond.stepWidth
  );
  firstStepInfoSecond.stepHeight = valueToDeciaml1(
    firstStepInfoSecond.stepHeight
  );

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
