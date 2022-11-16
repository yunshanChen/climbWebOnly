import React from "react";
import FloorEditorTableHalf from "./floorEditorTableHalf";

function FloorEditorTable(props) {
  // 樓梯資料Index新增索引
  // 複製資料
  let floorUpIndex = structuredClone(props.floorIndex);
  floorUpIndex.upDown = "floorUpStep";
  // 複製資料
  let floorDownIndex = structuredClone(props.floorIndex);
  floorDownIndex.upDown = "floorDownStep";
  let floorEditorTableUp = (
    <FloorEditorTableHalf
      stepNumber={props.floorUpStep.stepNumber}
      firstStepInfo={props.floorUpStep.firstStepInfo}
      otherStepInfo={props.floorUpStep.otherStepInfo}
      turnPlatform={props.floorUpStep.turnPlatform}
      floorIndex={floorUpIndex}
      handleChange={props.handleChange}
    />
  );
  //判斷有沒有下半層的資料(1.5F)
  let floorEditorTableDown;
  if (props.floorDownStep === undefined) {
    floorEditorTableDown = "";
  } else {
    floorEditorTableDown = (
      <FloorEditorTableHalf
        stepNumber={props.floorDownStep.stepNumber}
        firstStepInfo={props.floorDownStep.firstStepInfo}
        otherStepInfo={props.floorDownStep.otherStepInfo}
        turnPlatform={props.floorDownStep.turnPlatform}
        floorIndex={floorDownIndex}
        handleChange={props.handleChange}
      />
    );
  }
  return (
    <table className="floor-editor-table">
      <thead>
        <tr>
          <th scope="col"></th>
          <th colSpan="5" className="text-center">
            {props.floorName}
          </th>
        </tr>
        <tr>
          <th scope="col" className="floor-step"></th>
          <th scope="col" className="step-width">
            <span className="table-title">級寬</span>
            <span className="table-title">(公分)</span>
          </th>
          <th scope="col" className="step-height">
            <span className="table-title">級高</span>
            <span className="table-title">(公分)</span>
          </th>
          <th scope="col" className="step-hypotenuse">
            <span className="table-title">斜邊長</span>
            <span className="table-title">(公分)</span>
          </th>
          <th scope="col" className="step-inclination">
            <span className="table-title">傾角</span>
            <span className="table-title">(度)</span>
          </th>
          <th scope="col" className="step-depth">
            <span className="table-title">級深</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {/* 上半層 */}
        {floorEditorTableUp}
        {/* 下半層 */}
        {floorEditorTableDown}
      </tbody>
    </table>
  );
}
export default FloorEditorTable;
