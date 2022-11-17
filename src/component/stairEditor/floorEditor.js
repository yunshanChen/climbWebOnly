import React from "react";
import FloorEditorTable from "./floorEditorTable";

function FloorEditor(props) {
  //special-floor-buttons
  let specialFloorButtonsClass = "special-floor-buttons";
  //沒有樓層的話就display: none
  if (props.floorTableInfo.floorInfo.length === 0) {
    specialFloorButtonsClass += " none";
  }
  // 每張樓梯記錄表中，有很多層樓梯，根據資料決定顯示
  let floorTables = [];
  let floorInfo = props.floorTableInfo.floorInfo;
  for (let i = 0; i < floorInfo.length; i++) {
    let nowFloor = floorInfo[i];
    // let floorIndex = [i];
    let floorIndex = { floorNameIndex: i };
    floorTables.push(
      <FloorEditorTable
        floorName={nowFloor.floorName}
        floorUpStep={nowFloor.floorUpStep}
        floorDownStep={nowFloor.floorDownStep}
        floorIndex={floorIndex}
        handleChange={props.handleTableChange}
        handleBackDownStepClick={() =>
          props.handleBackDownStepClick(floorIndex)
        }
        key={nowFloor.floorName + i}
      />
    );
  }

  return (
    <div className="floor-editor">
      <div className={specialFloorButtonsClass}>
        <button
          type="button"
          className={props.floorTableInfo.specialFloor.haveSpecialFloorClass}
          onClick={() => props.handleSpecialFloorClick(true)}
        >
          有1.5樓
        </button>
        <button
          type="button"
          className={props.floorTableInfo.specialFloor.noSpecialFloor}
          onClick={() => props.handleSpecialFloorClick(false)}
        >
          沒有1.5樓
        </button>
      </div>
      <div className="tables">{floorTables}</div>
      <div className="floor-editor-add">
        <button
          type="button"
          className="add-floor"
          onClick={props.handleAddFloorClick}
        >
          新增一層
        </button>
      </div>
    </div>
  );
}
export default FloorEditor;
