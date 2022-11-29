import React from "react";
import PreviewTableFirstPage from "../component/stairPreview/previewTableFirstPage";
import PreviewTableOtherPage from "../component/stairPreview/previewTableOtherPage";
import SuitableClimber from "../component/stairPreview/suitableClimber";

function PrintPDFInfo(props) {
  let stairBasicInfo = props.stairBasicInfo;
  let floorTableInfo = props.floorTableInfo;
  let otherQuestionInfo = props.otherQuestionInfo;
  let suitableClimbers = props.suitableClimbers;
  //需要印出的頁數為 樓層數(長度)/2無條件進位
  let printPageNumber = Math.round(floorTableInfo.floorInfo.length / 2);
  //要印出來的表格至少會有第一頁
  let previewTable = [
    <PreviewTableFirstPage
      stairBasicInfo={stairBasicInfo}
      floorNumber={floorTableInfo.floorNumber}
      judgeVersion={floorTableInfo.judgeVersion}
      floorInfoFirstFloor={floorTableInfo.floorInfo[0]}
      floorInfoSecondFloor={floorTableInfo.floorInfo[1]}
      otherQuestionInfo={otherQuestionInfo}
      key={"previewTableFirstPageFloor"}
    />,
  ];
  //要多印的頁數 第一頁一定要印，要多印的數量為總數-1
  for (let i = 0; i < printPageNumber - 1; i++) {
    previewTable.push(
      <PreviewTableOtherPage
        floorInfoFirstFloor={floorTableInfo.floorInfo[2 * i + 2]}
        floorInfoSecondFloor={floorTableInfo.floorInfo[2 * i + 3]}
        key={"previewTableOtherPageFloor" + i}
      />
    );
  }

  return (
    <div className="print-PDF-info" ref={props.pdfRef}>
      {previewTable}
      <SuitableClimber suitableClimbers={suitableClimbers} />
    </div>
  );
}
export default PrintPDFInfo;
