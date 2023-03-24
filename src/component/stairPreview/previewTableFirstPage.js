import React from "react";
import PreviewTableFoot from "./previewTableFoot";
import PreviewTableHalf from "./previewTableHalf";

function previewTableFirstPage(props) {
  return (
    <section className="stair-preview print">
      <div className="tables-page">
        <table className="preview-table">
          <thead>
            <tr>
              <th colSpan="11" scope="col">
                垂直通路-一般樓梯紀錄表
              </th>
            </tr>
            <tr>
              <th colSpan="4" scope="col">
                <span>姓名：</span>
                <span>{props.stairBasicInfo.caseName}</span>
              </th>
              <th colSpan="3" scope="col">
                <span>體重：</span>
                <span>{props.stairBasicInfo.bodyWeight}</span>
                <span>公斤</span>
              </th>
              <th colSpan="4" scope="col" className="form-version">
                {props.judgeVersion}
              </th>
            </tr>
            <tr>
              <th colSpan="3" scope="col">
                <span>一般樓梯：共</span>
                <span>{props.floorNumber}</span>
                <span>層樓</span>
              </th>
              <th colSpan="8" scope="col">
                <span>地址：</span>
                <span>{props.stairBasicInfo.address}</span>
              </th>
            </tr>
            <tr className="floor-name-tr">
              <th scope="col" className="border-double-r"></th>
              <th colSpan="5" className="floor-name border-double-r">
                {props.floorInfoFirstFloor.floorName}
              </th>
              {/* <!-- 第二個樓層 --> */}
              <th colSpan="5" className="floor-name">
                {props.floorInfoSecondFloor
                  ? props.floorInfoSecondFloor.floorName
                  : ""}
              </th>
            </tr>
            <tr>
              <th scope="col" className="floor-step border-double-r"></th>
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
              <th scope="col" className="step-depth border-double-r">
                <span className="table-title">級深</span>
                <span className="table-title">(公分)</span>
              </th>
              {/* <!-- 第二個樓層 --> */}
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
            <PreviewTableHalf
              upDown={"floorUpStep"}
              floorInfoFirst={props.floorInfoFirstFloor.floorUpStep}
              floorInfoSecond={
                props.floorInfoSecondFloor
                  ? props.floorInfoSecondFloor.floorUpStep
                  : ""
              }
            />
            {/* <!-- 轉彎後 --> */}
            <PreviewTableHalf
              upDown={"floorDownStep"}
              floorInfoFirst={props.floorInfoFirstFloor.floorDownStep}
              floorInfoSecond={
                props.floorInfoSecondFloor
                  ? props.floorInfoSecondFloor.floorDownStep
                  : ""
              }
            />
          </tbody>
          <PreviewTableFoot otherQuestionInfo={props.otherQuestionInfo} />
        </table>
      </div>
    </section>
  );
}
export default previewTableFirstPage;
