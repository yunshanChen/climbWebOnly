import React from "react";
import PreviewTableFirstStep from "./previewTableFirstStep";
import PreviewTableOtherStep from "./previewTableOtherStep";
import PreviewTableTurnPlatform from "./previewTableTurnPlatform";

function PreviewTableHalf(props) {
  //其他階總共有１４階
  let otherSteps = [];
  for (let i = 0; i < 14; i++) {
    otherSteps.push(
      <PreviewTableOtherStep
        stepName={i + 2}
        otherStepInfoFirst={props.floorInfoFirst.otherStepInfo[i]}
        otherStepInfoSecond={
          props.floorInfoSecond ? props.floorInfoSecond.otherStepInfo[i] : ""
        }
        key={"previewTableOtherStep" + i}
      />
    );
  }

  return (
    <>
      <PreviewTableFirstStep
        firstStepInfoFirst={props.floorInfoFirst.firstStepInfo[0]}
        firstStepInfoSecond={
          props.floorInfoSecond ? props.floorInfoSecond.firstStepInfo[0] : ""
        }
      />
      {otherSteps}
      <PreviewTableTurnPlatform
        upDown={props.upDown}
        turnPlatformFirst={props.floorInfoFirst.turnPlatform[0]}
        turnPlatformSecond={
          props.floorInfoSecond ? props.floorInfoSecond.turnPlatform[0] : ""
        }
      />
    </>
  );
}
export default PreviewTableHalf;
