import React from "react";

function FloorEditorTableHalf(props) {
  // console.log(props.floorIndex);
  let stepNumber = parseInt(props.stepNumber);
  // 樓梯資料Index新增索引
  // 複製資料
  let firstStepIndex = structuredClone(props.floorIndex);
  firstStepIndex.stepClass = "firstStepInfo";
  firstStepIndex.stepClassIndex = 0;
  // 複製資料
  let turnPlatformIndex = structuredClone(props.floorIndex);
  turnPlatformIndex.stepClass = "turnPlatform";
  turnPlatformIndex.stepClassIndex = 0;

  // 將索引轉成id綁在各個input上
  function indexToId(index) {
    let id =
      index.floorNameIndex +
      "-" +
      index.upDown +
      "-" +
      index.stepClass +
      "-" +
      index.stepClassIndex +
      "-" +
      index.stepValueName;
    return id;
  }

  function handleOnKeyUp(e, index) {
    // e.preventDefault();
    if (e.key === "Enter") {
      //第一階
      if (index.stepClass === "firstStepInfo") {
        if (index.stepValueName === "stepWidth") {
          //如果是級寬，focus到第一階級高
          //複製一份做為要focus的index
          let nextIndex = structuredClone(index);
          nextIndex.stepValueName = "stepHeight";
          let nextFocus = document.getElementById(indexToId(nextIndex));
          //有抓到這個input才focus
          if (nextFocus !== null) {
            nextFocus.focus();
          }
        } else if (index.stepValueName === "stepHeight") {
          //如果是級高，focus到下一階的斜邊長
          //複製一份做為要focus的index
          let nextIndex = structuredClone(index);
          nextIndex.stepValueName = "stepHypotenuse";
          nextIndex.stepClass = "otherStepInfo";
          let nextFocus = document.getElementById(indexToId(nextIndex));
          //有抓到這個input才focus
          if (nextFocus !== null) {
            nextFocus.focus();
          }
        }
      } else if (index.stepClass === "otherStepInfo") {
        //其他階
        //如果是斜邊長，focus到同一階的高
        if (index.stepValueName === "stepHypotenuse") {
          //複製一份做為要focus的index
          let nextIndex = structuredClone(index);
          nextIndex.stepValueName = "stepHeight";
          let nextFocus = document.getElementById(indexToId(nextIndex));
          //有抓到這個input才focus
          if (nextFocus !== null) {
            nextFocus.focus();
          }
        } else if (index.stepValueName === "stepHeight") {
          //如果是高，focus到下一階的斜邊長
          let nextIndex = structuredClone(index);
          nextIndex.stepValueName = "stepHypotenuse";
          nextIndex.stepClassIndex += 1;
          let nextFocus = document.getElementById(indexToId(nextIndex));
          //有抓到這個input才focus
          if (nextFocus !== null) {
            nextFocus.focus();
          }
        }
      } else if (index.stepClass === "turnPlatform") {
        //迴轉平台
        //如果是g1，focus到g2
        if (index.stepValueName === "g1") {
          //複製一份做為要focus的index
          let nextIndex = structuredClone(index);
          nextIndex.stepValueName = "g2";
          let nextFocus = document.getElementById(indexToId(nextIndex));
          //有抓到這個input才focus
          if (nextFocus !== null) {
            nextFocus.focus();
          }
        } else if (index.stepValueName === "g2") {
          //複製一份做為要focus的index
          let nextIndex = structuredClone(index);
          nextIndex.stepValueName = "g3g4";
          let nextFocus = document.getElementById(indexToId(nextIndex));
          //有抓到這個input才focus
          if (nextFocus !== null) {
            nextFocus.focus();
          }
        }
      }
    }
  }

  //每半層由第一階＋其他階組成
  // 第一階
  let floorSteps = [
    <FloorTableStepFirst
      stepNumber={stepNumber}
      firstStepInfo={props.firstStepInfo[0]}
      handleChange={props.handleChange}
      handleOnKeyUp={handleOnKeyUp}
      floorIndex={firstStepIndex}
      indexToId={indexToId}
      key={props.firstStepInfo.stepName + "first"}
    />,
  ];

  // ＋其他階
  for (let i = 0; i < stepNumber - 1; i++) {
    // 複製資料
    let otherStepIndex = structuredClone(props.floorIndex);
    otherStepIndex.stepClass = "otherStepInfo";
    otherStepIndex.stepClassIndex = i;
    floorSteps.push(
      <FloorTableStepOther
        stepInfo={props.otherStepInfo[i]}
        floorIndex={otherStepIndex}
        handleChange={props.handleChange}
        handleOnKeyUp={handleOnKeyUp}
        indexToId={indexToId}
        key={i}
      />
    );
  }

  return (
    <>
      {floorSteps}
      {/* <!-- 中間迴轉平台 --> */}
      <TurnPlatform
        turnPlatform={props.turnPlatform}
        floorIndex={turnPlatformIndex}
        handleChange={props.handleChange}
        handleOnKeyUp={handleOnKeyUp}
        indexToId={indexToId}
      />
    </>
  );
}
export default FloorEditorTableHalf;

function FloorTableStepFirst(props) {
  // 樓梯資料Index新增索引
  // 複製資料
  let stepWidthIndex = structuredClone(props.floorIndex);
  stepWidthIndex.stepValueName = "stepWidth";
  let stepHeightIndex = structuredClone(props.floorIndex);
  stepHeightIndex.stepValueName = "stepHeight";
  return (
    <tr>
      <th scope="row">第1階</th>
      <td rowSpan={props.stepNumber}>
        <div className="input-group-table">
          <input
            type="number"
            placeholder="1"
            id={props.indexToId(stepWidthIndex)}
            value={props.firstStepInfo.stepWidth}
            onChange={(e) => props.handleChange(e, stepWidthIndex)}
            onKeyUp={(e) => props.handleOnKeyUp(e, stepWidthIndex)}
          />
        </div>
      </td>
      <td>
        <div className="input-group-table">
          <input
            type="number"
            placeholder="2"
            id={props.indexToId(stepHeightIndex)}
            value={props.firstStepInfo.stepHeight}
            onChange={(e) => props.handleChange(e, stepHeightIndex)}
            onKeyUp={(e) => props.handleOnKeyUp(e, stepHeightIndex)}
            style={{ color: props.firstStepInfo.isStepHeightOver ? "red" : "" }}
          />
        </div>
      </td>
      {/* 第一階斜邊長，固定沒有值 */}
      <td></td>
      {/* 第一階傾角，固定沒有值 */}
      <td></td>
      <td rowSpan={props.stepNumber}>
        <div>是否皆</div>
        <div>≧12公分</div>
      </td>
    </tr>
  );
}

function FloorTableStepOther(props) {
  // 樓梯資料Index新增索引
  // 複製資料
  let stepHeightIndex = structuredClone(props.floorIndex);
  stepHeightIndex.stepValueName = "stepHeight";
  let stepHypotenuseIndex = structuredClone(props.floorIndex);
  stepHypotenuseIndex.stepValueName = "stepHypotenuse";
  return (
    <tr>
      <th scope="row">第{props.stepInfo.stepName}階</th>
      <td>
        <div className="input-group-table">
          <input
            type="number"
            placeholder="4"
            id={props.indexToId(stepHeightIndex)}
            value={props.stepInfo.stepHeight}
            onChange={(e) => props.handleChange(e, stepHeightIndex)}
            onKeyUp={(e) => props.handleOnKeyUp(e, stepHeightIndex)}
            style={{
              backgroundColor: props.stepInfo.isStepHeightOver
                ? "rgb(129,172,222)"
                : "",
            }}
          />
        </div>
      </td>
      <td>
        <div className="input-group-table">
          <input
            type="number"
            placeholder="3"
            id={props.indexToId(stepHypotenuseIndex)}
            value={props.stepInfo.stepHypotenuse}
            onChange={(e) => props.handleChange(e, stepHypotenuseIndex)}
            onKeyUp={(e) => props.handleOnKeyUp(e, stepHypotenuseIndex)}
            style={{
              backgroundColor: props.stepInfo.isStepHypotenuseOver
                ? "rgb(136,200,70)"
                : "",
            }}
          />
        </div>
      </td>
      <td
        style={{
          backgroundColor: props.stepInfo.isStepAngleOver
            ? "rgb(129,172,222)"
            : "",
        }}
      >
        {props.stepInfo.stepAngle}
      </td>
    </tr>
  );
}

function TurnPlatform(props) {
  let g1Index = structuredClone(props.floorIndex);
  g1Index.stepValueName = "g1";
  let g2Index = structuredClone(props.floorIndex);
  g2Index.stepValueName = "g2";
  let g3g4Index = structuredClone(props.floorIndex);
  g3g4Index.stepValueName = "g3g4";
  let g3Index = structuredClone(props.floorIndex);
  g3Index.stepValueName = "g3";
  let g4Index = structuredClone(props.floorIndex);
  g4Index.stepValueName = "g4";
  return (
    <>
      <tr className="turn-platform">
        <th rowSpan="2">迴轉平台</th>
        <th scope="col">深(g1)</th>
        <th scope="col">深(g2)</th>
        <th scope="col">寬(g3+g4)</th>
        <th scope="col">寬(g3)</th>
        <th scope="col">寬(g4)</th>
      </tr>
      <tr className="turn-platform">
        <td>
          <div className="input-group-table">
            <input
              type="number"
              placeholder="108"
              id={props.indexToId(g1Index)}
              value={props.turnPlatform[0].g1}
              onChange={(e) => props.handleChange(e, g1Index)}
              onKeyUp={(e) => props.handleOnKeyUp(e, g1Index)}
            />
          </div>
        </td>
        <td>
          <div className="input-group-table">
            <input
              type="number"
              placeholder="107"
              id={props.indexToId(g2Index)}
              value={props.turnPlatform[0].g2}
              onChange={(e) => props.handleChange(e, g2Index)}
              onKeyUp={(e) => props.handleOnKeyUp(e, g2Index)}
            />
          </div>
        </td>
        <td>
          <div className="input-group-table">
            <input
              type="number"
              placeholder="202.5"
              id={props.indexToId(g3g4Index)}
              value={props.turnPlatform[0].g3g4}
              onChange={(e) => props.handleChange(e, g3g4Index)}
            />
          </div>
        </td>
        <td>
          <div className="input-group-table">
            <input
              type="number"
              placeholder=""
              id={props.indexToId(g3Index)}
              value={props.turnPlatform[0].g3}
              onChange={(e) => props.handleChange(e, g3Index)}
            />
          </div>
        </td>
        <td>
          <div className="input-group-table">
            <input
              type="number"
              placeholder=""
              id={props.indexToId(g4Index)}
              value={props.turnPlatform[0].g4}
              onChange={(e) => props.handleChange(e, g4Index)}
            />
          </div>
        </td>
      </tr>
    </>
  );
}
