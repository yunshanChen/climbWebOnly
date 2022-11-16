import React from "react";
import PreviewTableHalf from "./previewTableHalf";

function previewTableOtherPage(props) {
  //如果這一階是undefined，給他初始值
  // (a || b) -> 如果a是truthy，回傳a，否則回傳b
  let floorInfoFirstFloor = props.floorInfoFirstFloor || {
    floorName: "",
    floorUpStep: {
      stepNumber: "",
      firstStepInfo: [],
      otherStepInfo: [],
      turnPlatform: [{ g1: "", g2: "", g3g4: "", g3: "", g4: "" }],
    },
    floorDownStep: {
      stepNumber: "",
      firstStepInfo: [],
      otherStepInfo: [],
      turnPlatform: [{ g1: "", g2: "", g3g4: "", g3: "", g4: "" }],
    },
  };
  let floorInfoSecondFloor = props.floorInfoSecondFloor || {
    floorName: "",
    floorUpStep: {
      stepNumber: 2,
      firstStepInfo: [
        {
          stepName: "1",
          stepWidth: "",
          stepHeight: "",
          isStepHeightOver: false,
        },
      ],
      otherStepInfo: [
        {
          stepName: "2",
          stepHeight: "",
          stepHypotenuse: "",
          stepAngle: "",
          isStepHeightOver: false,
          isStepHypotenuseOver: false,
          isStepAngleOver: false,
        },
      ],
      turnPlatform: [{ g1: "", g2: "", g3g4: "", g3: "", g4: "" }],
    },
    floorDownStep: {
      stepNumber: 2,
      firstStepInfo: [
        {
          stepName: "1",
          stepWidth: "",
          stepHeight: "",
          isStepHeightOver: false,
        },
      ],
      otherStepInfo: [
        {
          stepName: "2",
          stepHeight: "",
          stepHypotenuse: "",
          stepAngle: "",
          isStepHeightOver: false,
          isStepHypotenuseOver: false,
          isStepAngleOver: false,
        },
      ],
      turnPlatform: [{ g1: "", g2: "", g3g4: "", g3: "", g4: "" }],
    },
  };
  return (
    <section className="stair-preview print">
      <div className="tables-page">
        <table className="preview-table">
          <thead>
            <tr className="border-b">
              <th colSpan="11" scope="col">
                垂直通路-一般樓梯紀錄表
              </th>
            </tr>
            <tr>
              <th scope="col" className="border-double-r"></th>
              <th colSpan="5" className="floor-name border-double-r">
                {floorInfoFirstFloor.floorName}
              </th>
              {/* <!-- 第二個樓層 --> */}
              <th colSpan="5" className="floor-name">
                {floorInfoSecondFloor.floorName}
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
              floorInfoFirst={floorInfoFirstFloor.floorUpStep}
              floorInfoSecond={floorInfoSecondFloor.floorUpStep}
            />
            {/* <!-- 轉彎後 --> */}
            <PreviewTableHalf
              upDown={"floorDownStep"}
              floorInfoFirst={floorInfoFirstFloor.floorDownStep}
              floorInfoSecond={floorInfoSecondFloor.floorDownStep}
            />
          </tbody>
        </table>
      </div>
    </section>
  );
}
export default previewTableOtherPage;
