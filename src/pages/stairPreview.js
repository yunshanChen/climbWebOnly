import React from "react";
import { Link } from "react-router-dom";
import PreviewTableFirstPage from "../component/stairPreview/previewTableFirstPage";
import PreviewTableOtherPage from "../component/stairPreview/previewTableOtherPage";
import SuitableClimber from "../component/stairPreview/suitableClimber";
import "../css/stairPreview.css";

function StairPreview() {
  //收到的資料
  //基本資料
  const stairBasicInfo = {
    caseName: "王小華",
    bodyWeight: "20",
    address: "新北市ＯＯ區ＯＯ路123巷45弄78號3樓之9",
  };
  //表格資料
  const floorTableInfo = {
    floorNumber: "7",
    floorInfo: [
      {
        floorName: "1F ↹ 1.5F",
        floorUpStep: {
          stepNumber: 3,
          firstStepInfo: [
            {
              stepName: "1",
              stepWidth: "93.0",
              stepHeight: "17.0",
              isStepHeightOver: false,
            },
          ],
          otherStepInfo: [
            {
              stepName: "2",
              stepHeight: "18.0",
              stepHypotenuse: "31.0",
              stepAngle: "35.5",
              isStepHeightOver: false,
              isStepHypotenuseOver: false,
              isStepAngleOver: false,
            },
            {
              stepName: "3",
              stepHeight: "20.5",
              stepHypotenuse: "31.5",
              stepAngle: "40.6",
              isStepHeightOver: false,
              isStepHypotenuseOver: false,
              isStepAngleOver: true,
            },
          ],
          turnPlatform: [
            { g1: "98.0", g2: "88.0", g3g4: "192.5", g3: "", g4: "" },
          ],
        },
        floorDownStep: {
          stepNumber: 3,
          firstStepInfo: [
            {
              stepName: "1",
              stepWidth: "93",
              stepHeight: "19",
              isStepHeightOver: false,
            },
          ],
          otherStepInfo: [
            {
              stepName: "2",
              stepHeight: "19",
              stepHypotenuse: "31.5",
              stepAngle: "37.10",
              isStepHeightOver: false,
              isStepHypotenuseOver: false,
              isStepAngleOver: false,
            },
            {
              stepName: "3",
              stepHeight: "18.0",
              stepHypotenuse: "32.0",
              stepAngle: "37.10",
              isStepHeightOver: false,
              isStepHypotenuseOver: false,
              isStepAngleOver: false,
            },
          ],
          turnPlatform: [{ g1: "243", g2: "228", g3g4: "193", g3: "", g4: "" }],
        },
      },
      {
        floorName: "1.5F ↹ 2F",
        floorUpStep: {
          stepNumber: 3,
          firstStepInfo: [
            {
              stepName: "1",
              stepWidth: "93.0",
              stepHeight: "17.0",
              isStepHeightOver: false,
            },
          ],
          otherStepInfo: [
            {
              stepName: "2",
              stepHeight: "18.0",
              stepHypotenuse: "31.0",
              stepAngle: "35.5",
              isStepHeightOver: false,
              isStepHypotenuseOver: false,
              isStepAngleOver: false,
            },
            {
              stepName: "3",
              stepHeight: "20.5",
              stepHypotenuse: "31.5",
              stepAngle: "40.6",
              isStepHeightOver: false,
              isStepHypotenuseOver: false,
              isStepAngleOver: true,
            },
          ],
          turnPlatform: [
            { g1: "98.0", g2: "88.0", g3g4: "192.5", g3: "", g4: "" },
          ],
        },
        floorDownStep: {
          stepNumber: "",
          firstStepInfo: [],
          otherStepInfo: [],
          turnPlatform: [{ g1: "", g2: "", g3g4: "", g3: "", g4: "" }],
        },
      },
      {
        floorName: "2F ↹ 3F",
        floorUpStep: {
          stepNumber: 3,
          firstStepInfo: [
            {
              stepName: "1",
              stepWidth: "93.0",
              stepHeight: "18.5",
              isStepHeightOver: false,
            },
          ],
          otherStepInfo: [
            {
              stepName: "2",
              stepHeight: "18.5",
              stepHypotenuse: "29.5",
              stepAngle: "38.84",
              isStepHeightOver: false,
              isStepHypotenuseOver: false,
              isStepAngleOver: false,
            },
            {
              stepName: "3",
              stepHeight: "18.5",
              stepHypotenuse: "29.5",
              stepAngle: "38.84",
              isStepHeightOver: false,
              isStepHypotenuseOver: false,
              isStepAngleOver: false,
            },
          ],
          turnPlatform: [
            { g1: "92.0", g2: "86.0", g3g4: "195.0", g3: "", g4: "" },
          ],
        },
        floorDownStep: {
          stepNumber: 3,
          firstStepInfo: [
            {
              stepName: "1",
              stepWidth: "94.0",
              stepHeight: "21.5",
              isStepHeightOver: true,
            },
          ],
          otherStepInfo: [
            {
              stepName: "2",
              stepHeight: "20.0",
              stepHypotenuse: "31.0",
              stepAngle: "40.18",
              isStepHeightOver: false,
              isStepHypotenuseOver: false,
              isStepAngleOver: true,
            },
            {
              stepName: "3",
              stepHeight: "200.0",
              stepHypotenuse: "200.0",
              stepAngle: "",
              isStepHeightOver: true,
              isStepHypotenuseOver: true,
              isStepAngleOver: false,
            },
          ],
          turnPlatform: [
            { g1: "238.0", g2: "229.0", g3g4: "192.0", g3: "", g4: "" },
          ],
        },
      },
      {
        floorName: "3F ↹ 4F",
        floorUpStep: {
          stepNumber: 3,
          firstStepInfo: [
            {
              stepName: "1",
              stepWidth: "93.0",
              stepHeight: "200.0",
              isStepHeightOver: true,
            },
          ],
          otherStepInfo: [
            {
              stepName: "2",
              stepHeight: "15.0",
              stepHypotenuse: "28.0",
              stepAngle: "32.39",
              isStepHeightOver: false,
              isStepHypotenuseOver: false,
              isStepAngleOver: false,
            },
            {
              stepName: "3",
              stepHeight: "18.0",
              stepHypotenuse: "31.0",
              stepAngle: "35.50",
              isStepHeightOver: false,
              isStepHypotenuseOver: false,
              isStepAngleOver: false,
            },
          ],
          turnPlatform: [
            { g1: "100.0", g2: "100.0", g3g4: "100.0", g3: "", g4: "" },
          ],
        },
        floorDownStep: {
          stepNumber: 3,
          firstStepInfo: [
            {
              stepName: "1",
              stepWidth: "93.0",
              stepHeight: "19.0",
              isStepHeightOver: false,
            },
          ],
          otherStepInfo: [
            {
              stepName: "2",
              stepHeight: "17.5",
              stepHypotenuse: "32.0",
              stepAngle: "33.15",
              isStepHeightOver: false,
              isStepHypotenuseOver: false,
              isStepAngleOver: false,
            },
            {
              stepName: "3",
              stepHeight: "19.0",
              stepHypotenuse: "31.5",
              stepAngle: "37.10",
              isStepHeightOver: false,
              isStepHypotenuseOver: false,
              isStepAngleOver: false,
            },
          ],
          turnPlatform: [
            { g1: "100.0", g2: "100.0", g3g4: "", g3: "100.0", g4: "100.0" },
          ],
        },
      },
      {
        floorName: "4F ↹ 5F",
        floorUpStep: {
          stepNumber: 3,
          firstStepInfo: [
            {
              stepName: "1",
              stepWidth: "93.0",
              stepHeight: "200.0",
              isStepHeightOver: true,
            },
          ],
          otherStepInfo: [
            {
              stepName: "2",
              stepHeight: "15.0",
              stepHypotenuse: "123.0",
              stepAngle: "99.99",
              isStepHeightOver: false,
              isStepHypotenuseOver: true,
              isStepAngleOver: true,
            },
            {
              stepName: "3",
              stepHeight: "18.0",
              stepHypotenuse: "31.0",
              stepAngle: "35.50",
              isStepHeightOver: false,
              isStepHypotenuseOver: false,
              isStepAngleOver: false,
            },
          ],
          turnPlatform: [
            { g1: "100.0", g2: "100.0", g3g4: "100.0", g3: "", g4: "" },
          ],
        },
        floorDownStep: {
          stepNumber: 3,
          firstStepInfo: [
            {
              stepName: "1",
              stepWidth: "93.0",
              stepHeight: "19.0",
              isStepHeightOver: false,
            },
          ],
          otherStepInfo: [
            {
              stepName: "2",
              stepHeight: "17.5",
              stepHypotenuse: "32.0",
              stepAngle: "33.15",
              isStepHeightOver: false,
              isStepHypotenuseOver: false,
              isStepAngleOver: false,
            },
            {
              stepName: "3",
              stepHeight: "19.0",
              stepHypotenuse: "31.5",
              stepAngle: "37.10",
              isStepHeightOver: false,
              isStepHypotenuseOver: false,
              isStepAngleOver: false,
            },
          ],
          turnPlatform: [
            { g1: "100.0", g2: "100.0", g3g4: "", g3: "100.0", g4: "100.0" },
          ],
        },
      },
      {
        floorName: "5F ↹ 6F",
        floorUpStep: {
          stepNumber: 3,
          firstStepInfo: [
            {
              stepName: "1",
              stepWidth: "93.0",
              stepHeight: "200.0",
              isStepHeightOver: true,
            },
          ],
          otherStepInfo: [
            {
              stepName: "2",
              stepHeight: "15.0",
              stepHypotenuse: "123.0",
              stepAngle: "99.99",
              isStepHeightOver: false,
              isStepHypotenuseOver: true,
              isStepAngleOver: true,
            },
            {
              stepName: "3",
              stepHeight: "18.0",
              stepHypotenuse: "31.0",
              stepAngle: "35.50",
              isStepHeightOver: false,
              isStepHypotenuseOver: false,
              isStepAngleOver: false,
            },
          ],
          turnPlatform: [
            { g1: "100.0", g2: "100.0", g3g4: "100.0", g3: "", g4: "" },
          ],
        },
        floorDownStep: {
          stepNumber: 3,
          firstStepInfo: [
            {
              stepName: "1",
              stepWidth: "93.0",
              stepHeight: "19.0",
              isStepHeightOver: false,
            },
          ],
          otherStepInfo: [
            {
              stepName: "2",
              stepHeight: "17.5",
              stepHypotenuse: "32.0",
              stepAngle: "33.15",
              isStepHeightOver: false,
              isStepHypotenuseOver: false,
              isStepAngleOver: false,
            },
            {
              stepName: "3",
              stepHeight: "19.0",
              stepHypotenuse: "31.5",
              stepAngle: "37.10",
              isStepHeightOver: false,
              isStepHypotenuseOver: false,
              isStepAngleOver: false,
            },
          ],
          turnPlatform: [
            { g1: "100.0", g2: "100.0", g3g4: "", g3: "100.0", g4: "100.0" },
          ],
        },
      },
      {
        floorName: "6F ↹ 7F",
        floorUpStep: {
          stepNumber: 3,
          firstStepInfo: [
            {
              stepName: "1",
              stepWidth: "93.0",
              stepHeight: "200.0",
              isStepHeightOver: true,
            },
          ],
          otherStepInfo: [
            {
              stepName: "2",
              stepHeight: "15.0",
              stepHypotenuse: "123.0",
              stepAngle: "99.99",
              isStepHeightOver: false,
              isStepHypotenuseOver: true,
              isStepAngleOver: true,
            },
            {
              stepName: "3",
              stepHeight: "18.0",
              stepHypotenuse: "31.0",
              stepAngle: "35.50",
              isStepHeightOver: false,
              isStepHypotenuseOver: false,
              isStepAngleOver: false,
            },
          ],
          turnPlatform: [
            { g1: "100.0", g2: "100.0", g3g4: "100.0", g3: "", g4: "" },
          ],
        },
        floorDownStep: {
          stepNumber: 3,
          firstStepInfo: [
            {
              stepName: "1",
              stepWidth: "93.0",
              stepHeight: "19.0",
              isStepHeightOver: false,
            },
          ],
          otherStepInfo: [
            {
              stepName: "2",
              stepHeight: "17.5",
              stepHypotenuse: "32.0",
              stepAngle: "33.15",
              isStepHeightOver: false,
              isStepHypotenuseOver: false,
              isStepAngleOver: false,
            },
            {
              stepName: "3",
              stepHeight: "19.0",
              stepHypotenuse: "31.5",
              stepAngle: "37.10",
              isStepHeightOver: false,
              isStepHypotenuseOver: false,
              isStepAngleOver: false,
            },
          ],
          turnPlatform: [
            { g1: "100.0", g2: "100.0", g3g4: "", g3: "100.0", g4: "100.0" },
          ],
        },
      },
    ],
  };
  //其他問題資料
  const otherQuestionInfo = {
    stepRounded: true,
    stepDeep: true,
    stepSpecial: false,
  };

  //需要印出的頁數為 樓層數(長度)/2無條件進位
  let printPageNumber = Math.round(floorTableInfo.floorInfo.length / 2);
  //要印出來的表格至少會有第一頁
  let previewTable = [
    <PreviewTableFirstPage
      stairBasicInfo={stairBasicInfo}
      floorNumber={floorTableInfo.floorNumber}
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
    <main>
      <section className="result-buttons no-print">
        <Link className="back-to-stair-info" to="/stairEditor">
          回樓梯表單
        </Link>
        <button className="print-PDF" onClick={() => window.print()}>
          生成PDF檔
        </button>
      </section>
      {previewTable}
      <SuitableClimber />
    </main>
  );
}
export default StairPreview;
