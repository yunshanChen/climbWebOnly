import React, { useRef } from "react";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import { toJpeg } from "html-to-image";
import PrintPDFInfo from "../component/printPDFInfo";
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
    judgeVersion: "新北市輔具資源中心1111020版",
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
  //適用機型資料
  const suitableClimbers = [
    {
      climbName: "翔鎰/天創行電動爬梯椅(座椅式)",
      ATcenter: "無",
      businessForSingle:
        "益百利、北台灣、優遊小客車、芯願、振生、福倫交通、生通、樂活協會、好爸爸、大立亨、安欣、第一、小驢駒、大心、康健、平安好行",
      businessForMonth:
        "益百利、北台灣、優遊小客車、芯願、振生、福倫交通、樂活協會、安欣、第一",
    },
    {
      climbName: "弘采SC-5(座椅式)",
      ATcenter: "可月租",
      businessForSingle: "益百利、車福、多扶接送、喜多移動",
      businessForMonth: "益百利、車福、弘采介護",
    },
    {
      climbName: "元倫ASC-120B(座椅式)",
      ATcenter: "可月租",
      businessForSingle: "高森能源",
      businessForMonth: "高森能源",
    },
    {
      climbName: "弘采SA-S(輪椅式)",
      ATcenter: "可月租",
      businessForSingle: "無",
      businessForMonth: "弘采介護",
    },
    {
      climbName: "元倫ASC-130B(輪椅式)",
      ATcenter: "無",
      businessForSingle: "高森能源",
      businessForMonth: "高森能源",
    },
    {
      climbName: "天群S-max sella(撐桿式)",
      ATcenter: "無",
      businessForSingle: "益百利、北台灣、振生、福倫交通、安欣、平安好行",
      businessForMonth: "振生、福倫交通",
    },
  ];
  //列印ＰＤＦ
  const pdfRef = useRef(null);
  const handleDownload = () => {
    const content = pdfRef.current;

    var responsePDF = new jsPDF();
    //html-to-image
    toJpeg(content, {
      quality: 0.7,
    }).then((imgData) => {
      // const imgData = canvas.toDataURL("image.jpeg");

      const pdfWidth = responsePDF.internal.pageSize.getWidth();
      const a4h = 297; //a4高度297mm
      const pageNumber = 5;
      // 根據圖片的寬高，依比例計算在pdf內的高度
      const pdfHeight = a4h * pageNumber;
      // responsePDF.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);
      let position = 0; //目前要印的位置（在圖片上距離y軸)
      responsePDF.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);

      while (-position < pdfHeight) {
        responsePDF.addImage(imgData, "JPEG", 0, position, pdfWidth, pdfHeight);
        position = position - a4h;
        //如果還沒印完，新增空白頁
        if (-position < pdfHeight) {
          responsePDF.addPage();
        }
      }
      responsePDF.save("test.pdf");
    });
  };
  return (
    <main className="main-stair-preview">
      <section className="result-buttons no-print">
        <Link className="back-to-stair-info" to="/stairEditor">
          回樓梯表單
        </Link>
        <button className="print-PDF" onClick={() => window.print()}>
          生成PDF檔
        </button>
        <button className="print-PDF" onClick={() => handleDownload()}>
          jstoPDF
        </button>
      </section>
      <PrintPDFInfo
        stairBasicInfo={stairBasicInfo}
        floorTableInfo={floorTableInfo}
        otherQuestionInfo={otherQuestionInfo}
        suitableClimbers={suitableClimbers}
        pdfRef={pdfRef}
      />
    </main>
  );
}
export default StairPreview;
