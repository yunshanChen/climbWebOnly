import React, {
  useCallback,
  useContext,
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
import { StairDataContext } from "../component/contexts";
import { getSuitableClimber } from "../component/caculate";

function StairPreview() {
  const pdfRef = useRef(null);
  //收到的資料
  const { stairData } = useContext(StairDataContext);
  const printPageNumber = stairData.floorTableInfo.specialFloor.haveSpecialFloor
    ? (parseInt(stairData.floorTableInfo.floorNumber) + 1) / 2 + 1
    : parseInt(stairData.floorTableInfo.floorNumber) / 2 + 1;
  const printFileName = stairData.stairBasicInfo.caseName + ".pdf";
  // console.log(stairData);
  //下載loading畫面
  const capooList = useMemo(() => {
    return [<Capoo />, <BlackCapoo />, <Chicken />, <TrumpetChicken />];
  }, []);
  // const [downloading, loadingCover] = useDownloadPDF(pdfRef);
  const [downloading] = useDownloadPDF(pdfRef, printPageNumber, printFileName);
  const [loadingCover, setLoadingCover] = useState("");
  const [isDownloading, setIsDownloading] = useState(false);

  //機型判斷
  const suitableClimbers = getSuitableClimber(stairData);

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
        stairBasicInfo={stairData.stairBasicInfo}
        floorTableInfo={stairData.floorTableInfo}
        otherQuestionInfo={stairData.otherQuestionInfo}
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
const useDownloadPDF = (pdfRef, printPageNumber, printFileName) => {
  // console.log("useDownloadPDF開始");

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
          const pageNumber = printPageNumber;
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
          responsePDF.save(printFileName);
          console.log("下載結束");
          setIsDownloading(false);

          if (getDownloadState() === "true") {
            setDownloadState(false); //localStorage
            window.close();
          }
        });
      };

      if (download === "download") {
        // console.log("下載開始");
        handleDownload();
      }
    },
    [pdfRef]
  );

  // console.log("useDownloadPDF結束");
  return [downloading];
};
