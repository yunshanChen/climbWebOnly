import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import { toJpeg } from "html-to-image";
import { setDownloadState, getDownloadState } from "../component/utils";
import PrintPDFInfo from "../component/printPDFInfo";
import Capoo from "../component/capoos/capoo";
import BlackCapoo from "../component/capoos/blackCapoo";
import { Chicken, TrumpetChicken } from "../component/capoos/chicken";

import "../css/stairPreview.css";
import "../css/loadingCover.css";

function StairPreview() {
  const pdfRef = useRef(null);
  const capooList = useMemo(() => {
    return [<Capoo />, <BlackCapoo />, <Chicken />, <TrumpetChicken />];
  }, []);
  // const [downloading, loadingCover] = useDownloadPDF(pdfRef);
  const [downloading] = useDownloadPDF(pdfRef);
  const [loadingCover, setLoadingCover] = useState("");
  const [isDownloading, setIsDownloading] = useState(false);
  // console.log("loadingCover : ", loadingCover);
  //如果是從stairList來的，列印資料後自行關閉
  useEffect(() => {
    window.scrollTo(0, 0);
    let downloadState = getDownloadState();
    //如果是從stairList跳轉過來的下載
    if (downloadState === "true") {
      //按下載鈕
      setLoadingCover(capooList[(Math.random() * 4) | 0]);
      document.getElementById("stair-preview-download-button").click();
    }
  }, [capooList]);

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

  return (
    <main className="main-stair-preview">
      <section className="result-buttons no-print">
        <Link className="back-to-stair-info" to="/stairEditor">
          回樓梯表單
        </Link>
        <button
          type="button"
          className="print-PDF"
          id="stair-preview-download-button"
          onClick={() => {
            setLoadingCover(capooList[(Math.random() * 4) | 0]);
            setIsDownloading(true);
            downloading("download", setIsDownloading);
          }}
        >
          生成PDF檔
        </button>
      </section>
      <PrintPDFInfo
        stairBasicInfo={stairBasicInfo}
        floorTableInfo={floorTableInfo}
        otherQuestionInfo={otherQuestionInfo}
        suitableClimbers={suitableClimbers}
        pdfRef={pdfRef}
      />
      <div
        className={isDownloading ? "loading-cover" : "loading-cover none"}
        id="loading-cover"
      >
        <div className="loading-txt">Loading...</div>
        {loadingCover}
      </div>
    </main>
  );
}
export default StairPreview;

//下載檔案
//下載功能function
const useDownloadPDF = (pdfRef) => {
  console.log("useDownloadPDF開始");

  //定義下載函式
  const downloading = useCallback(
    (download, setIsDownloading) => {
      console.log("執行downloading");
      console.log("download : ", download);

      const handleDownload = () => {
        //取得資料位置
        console.log("執行handleDownload");
        const content = pdfRef.current;

        var responsePDF = new jsPDF();
        //html-to-image
        toJpeg(content, {
          quality: 1,
        }).then((imgData) => {
          const pdfWidth = responsePDF.internal.pageSize.getWidth(); //a4寬度210mm
          const a4h = 297; //a4高度297mm
          const pageNumber = 5;
          // 根據圖片的寬高，依比例計算在pdf內的高度
          const pdfHeight = a4h * pageNumber;

          let position = 0; //目前要印的位置（在圖片上距離y軸)
          responsePDF.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);

          while (-position < pdfHeight) {
            responsePDF.addImage(
              imgData,
              "JPEG",
              0,
              position,
              pdfWidth,
              pdfHeight
            );
            position = position - a4h;
            //如果還沒印完，新增空白頁
            if (-position < pdfHeight) {
              responsePDF.addPage();
            }
          }
          responsePDF.save("test.pdf");
          console.log("下載結束");
          setIsDownloading(false);

          if (getDownloadState() === "true") {
            setDownloadState(false); //localStorage
            window.close();
          }
        });
      };

      if (download === "download") {
        console.log("下載開始");
        handleDownload();
      }
    },
    [pdfRef]
  );

  console.log("useDownloadPDF結束");
  return [downloading];
};
