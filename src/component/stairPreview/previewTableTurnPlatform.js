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
        <td>{props.turnPlatformFirst.g1}</td>
        <td>{props.turnPlatformFirst.g2}</td>
        <td>{props.turnPlatformFirst.g3g4}</td>
        <td>{props.turnPlatformFirst.g3}</td>
        <td className="border-double-r">{props.turnPlatformFirst.g4}</td>
        {/* <!-- 第二個樓層 --> */}
        <td>{props.turnPlatformSecond.g1}</td>
        <td>{props.turnPlatformSecond.g2}</td>
        <td>{props.turnPlatformSecond.g3g4}</td>
        <td>{props.turnPlatformSecond.g3}</td>
        <td className="border-r">{props.turnPlatformSecond.g4}</td>
      </tr>
    </>
  );
}
export default PreviewTableTurnPlatform;
