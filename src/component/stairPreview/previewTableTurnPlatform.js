import React from "react";

function PreviewTableTurnPlatform(props) {
  return (
    <>
      <tr className="turn-platform">
        <th
          rowSpan="2"
          className={props.upDown === "floorUpStep" ? "" : "border-b"}
        >
          迴轉平台
        </th>
        <th scope="col">深(g1)</th>
        <th scope="col">深(g2)</th>
        <th scope="col">寬(g3+g4)</th>
        <th scope="col">寬(g3)</th>
        <th scope="col" className="border-double-r">
          寬(g4)
        </th>
        {/* <!-- 第二個樓層 --> */}
        <th scope="col">深(g1)</th>
        <th scope="col">深(g2)</th>
        <th scope="col">寬(g3+g4)</th>
        <th scope="col">寬(g3)</th>
        <th scope="col" className="border-r">
          寬(g4)
        </th>
      </tr>
      <tr className="turn-platform">
        <td>{valueToDeciaml1(props.turnPlatformFirst.g1)}</td>
        <td>{valueToDeciaml1(props.turnPlatformFirst.g2)}</td>
        <td>{valueToDeciaml1(props.turnPlatformFirst.g3g4)}</td>
        <td>{valueToDeciaml1(props.turnPlatformFirst.g3)}</td>
        <td className="border-double-r">
          {valueToDeciaml1(props.turnPlatformFirst.g4)}
        </td>
        {/* <!-- 第二個樓層 --> */}
        <td>{valueToDeciaml1(props.turnPlatformSecond.g1)}</td>
        <td>{valueToDeciaml1(props.turnPlatformSecond.g2)}</td>
        <td>{valueToDeciaml1(props.turnPlatformSecond.g3g4)}</td>
        <td>{valueToDeciaml1(props.turnPlatformSecond.g3)}</td>
        <td className="border-r">
          {valueToDeciaml1(props.turnPlatformSecond.g4)}
        </td>
      </tr>
    </>
  );
}
export default PreviewTableTurnPlatform;

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
