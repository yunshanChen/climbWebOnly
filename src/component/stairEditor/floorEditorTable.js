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
      mode={props.mode}
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
        mode={props.mode}
        stepNumber={props.floorDownStep.stepNumber}
        firstStepInfo={props.floorDownStep.firstStepInfo}
        otherStepInfo={props.floorDownStep.otherStepInfo}
        turnPlatform={props.floorDownStep.turnPlatform}
        floorIndex={floorDownIndex}
        handleChange={props.handleChange}
      />
    );
  }
  //「還我下半層」按鈕是否顯示
  let isBackDownStepShow;
  //如果下半層有值，不顯示
  if (props.floorDownStep) {
    isBackDownStepShow = false;
  } else if (props.floorName === "1.5F ↹ 2F") {
    //下半層沒有值，但是是1.5F~2F(不能有下半層)
    isBackDownStepShow = false;
  } else {
    isBackDownStepShow = true;
  }
  return (
    <>
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
              <span className="table-title">(公分)</span>
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
      <button
        type="button"
        className={
          isBackDownStepShow
            ? "floor-editor-button"
            : "floor-editor-button none"
        }
        onClick={props.handleBackDownStepClick}
      >
        還我 {props.floorName} 的下半層
      </button>
    </>
  );
}
export default FloorEditorTable;
