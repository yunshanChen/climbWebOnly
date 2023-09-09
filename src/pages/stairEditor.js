import React, { useContext, useEffect, useState } from "react";
import { StairDataContext } from "../component/contexts";
import FloorEditor from "../component/stairEditor/floorEditor";
import OtherEditor from "../component/stairEditor/otherEditor";
import StairEditorBasic from "../component/stairEditor/stairEditorBasic";
import StairEditorSystemMessage from "../component/stairEditor/stairEditorSystemMessage";
import {
  getAngleByDeep,
  getAngleByHypotenuse,
  getTriangleNumber,
  initFloorTableInfo,
  initFloorHalfStep,
} from "../component/caculate";
import "../css/stairEditor.css";

function StairEditor() {
  const { setStairData } = useContext(StairDataContext);
  const { stairData } = useContext(StairDataContext);
  // 資料設定 //
  // stairBasicInfo
  const [stairBasicInfo, setStairBasicInfo] = useState({
    caseName: "",
    bodyWeight: "",
    address: "",
    // 新北市ＯＯ區ＯＯ路123巷45弄78號3樓之9
  });
  // floorTableInfo 預設：沒有樓層, 斜邊長模式
  const [floorTableInfo, setFloorTableInfo] = useState(
    structuredClone(initFloorTableInfo)
  );
  // 預設一層樓
  let aFloor = {
    floorName: "1F ↹ 2F",
    floorUpStep: structuredClone(initFloorHalfStep),
    floorDownStep: structuredClone(initFloorHalfStep),
  };
  // 其他問題
  const [otherQuestionInfo, setOtherQuestionInfo] = useState({
    stepRounded: false,
    stepDeep: false,
    stepSpecial: false,
  });
  useEffect(() => {
    //如果有樓梯表單的值就放進去，沒有就重設
    if (stairData) {
      setStairBasicInfo(stairData.stairBasicInfo);
      setFloorTableInfo(stairData.floorTableInfo);
      setOtherQuestionInfo(stairData.otherQuestionInfo);
    }
  }, []);
  // 功能設定 //
  // stairBasicInfo -> 資料監聽
  function handleBasicInfoChange(e, changeTitle) {
    let value = e.target.value;
    // 複製原有的資料
    const newStairBasicInfo = structuredClone(stairBasicInfo);
    newStairBasicInfo[changeTitle] = value;
    setStairBasicInfo(newStairBasicInfo);
  }
  // floorTableInfo -> 改變樓層數
  function handleFloorNumberChange(e) {
    let newFloorNumber = e.target.value;
    //複製原有的資料
    const newFloorTableInfo = structuredClone(floorTableInfo);
    newFloorTableInfo.floorNumber = newFloorNumber;
    //寫入新的資料
    setFloorTableInfo(newFloorTableInfo);
  }
  // floorTableInfo -> 樓層數資料
  // onBlur：離開focus狀態才改變樓層數資料
  function handleFloorNumberOnBlur(e) {
    let newFloorNumber = e.target.value;
    let oldFloorNumber = floorTableInfo.floorInfo.length + 1;
    //複製原有的資料
    const newFloorTableInfo = structuredClone(floorTableInfo);

    //如果有特殊樓層
    if (floorTableInfo.specialFloor.haveSpecialFloor) {
      oldFloorNumber--;
    }

    //如果輸入的數字<=1（不合法）
    if (newFloorNumber <= 1) {
      //根據資料，寫回原本的樓層數
      if (oldFloorNumber >= 2) {
        //如果有存在樓層，樓層數 = 舊的樓層數
        newFloorNumber = oldFloorNumber;
      } else {
        //如果不存在樓層，強制變更為２層樓
        newFloorNumber = 2;
        let addFloor = structuredClone(aFloor);
        addFloor.floorName = "1F ↹ 2F";
        newFloorTableInfo.floorInfo.push(addFloor);
      }
      //寫入新的樓層
      newFloorTableInfo.floorNumber = newFloorNumber;
      alert("樓層數必須>1");
    } else {
      //如果輸入的數字>=2 (合法)，根據樓層數修改表格資料表
      if (oldFloorNumber === newFloorNumber) {
        //樓層數不變，資料不變
      } else if (oldFloorNumber > newFloorNumber) {
        //樓層數變少
        //如果有特殊樓層
        if (floorTableInfo.specialFloor.haveSpecialFloor) {
          newFloorTableInfo.floorInfo.splice(newFloorNumber);
        } else {
          newFloorTableInfo.floorInfo.splice(newFloorNumber - 1);
        }
      } else if (oldFloorNumber < newFloorNumber) {
        //樓層數變多
        for (let i = oldFloorNumber; i < newFloorNumber; i++) {
          let newFloorName = i + "F ↹ " + (i + 1) + "F";
          // 依照樓層模板寫入新的樓層
          let addFloor = structuredClone(aFloor);
          addFloor.floorName = newFloorName;
          newFloorTableInfo.floorInfo.push(addFloor);
        }
      }
    }

    setFloorTableInfo(newFloorTableInfo);
  }
  // 1.5樓
  function handleSpecialFloorClick(haveSpecialFloor) {
    // 複製原有的資料
    const newFloorTableInfo = structuredClone(floorTableInfo);
    newFloorTableInfo.specialFloor.haveSpecialFloor = haveSpecialFloor;
    //如果有特殊樓層
    if (haveSpecialFloor) {
      //調整樓層表格
      let specialFloor = {
        floorName: "1.5F ↹ 2F",
        floorUpStep: structuredClone(initFloorHalfStep),
      };
      newFloorTableInfo.floorInfo[0].floorName = "1F ↹ 1.5F";
      //新增特殊樓層1.5~2
      newFloorTableInfo.floorInfo.splice(1, 0, specialFloor);
      //調整button的class
      newFloorTableInfo.specialFloor.haveSpecialFloorClass =
        "have-special-floor none";
      //顯示沒有特殊樓層按鈕
      newFloorTableInfo.specialFloor.noSpecialFloor = "no-special-floor";
    } else {
      //沒有特殊樓層
      //調整樓層表格名稱
      newFloorTableInfo.floorInfo[0].floorName = "1F ↹ 2F";
      //刪除特殊樓層1.5~2
      newFloorTableInfo.floorInfo.splice(1, 1);
      //調整button的class
      newFloorTableInfo.specialFloor.haveSpecialFloorClass =
        "have-special-floor";
      //顯示沒有特殊樓層按鈕
      newFloorTableInfo.specialFloor.noSpecialFloor = "no-special-floor none";
    }
    setFloorTableInfo(newFloorTableInfo);
  }
  // 斜邊長/級高模式
  function handleModeClick(modeName) {
    // 複製原有的資料
    const newFloorTableInfo = structuredClone(floorTableInfo);
    // 修改mode
    newFloorTableInfo.mode = modeName;
    setFloorTableInfo(newFloorTableInfo);
  }
  // floorTableInfo -> 樓梯表格資料onchange，角度、顏色、階數
  function handleTableChange(e, floorIndex) {
    // console.log(floorIndex);
    // 複製原有的資料
    const newFloorTableInfo = structuredClone(floorTableInfo);
    //判斷小數點輸入
    //point若為-1，表示沒有小數點
    //第一個小數點的位置
    const firstPoint = e.target.value.indexOf(".");
    //最後一個小數點的位置
    const LastPoint = e.target.value.lastIndexOf(".");
    let value = 0;
    // console.log("小數點在的位置", firstPoint, LastPoint);
    // console.log("字串總長度", e.target.value.length);
    //如果數值相等，表示是合法的輸入
    if (firstPoint === LastPoint && !isNaN(e.target.value)) {
      // console.log("合法的輸入");
      //如果小數點是最後一位（最新輸入的項目）以下判斷全部跳過
      if (firstPoint === e.target.value.length - 1) {
        // console.log("有小數點而且跟字串長度相同！");
        //直接將資料寫入
        value = e.target.value;
        newFloorTableInfo["floorInfo"][floorIndex.floorNameIndex][
          floorIndex.upDown
        ][floorIndex.stepClass][floorIndex.stepClassIndex][
          floorIndex.stepValueName
        ] = value;
        setFloorTableInfo(newFloorTableInfo);
        return;
      } else {
        // console.log("收到的值取到小數點下一位");
        //收到的值取到小數點下一位
        value = Math.round(Number(e.target.value) * 10) / 10;
      }
    } else {
      // console.log("不合法的輸入");
      //不合法的輸入則刪除最後一個字元，不做判斷
      value = e.target.value.slice(0, -1);
      // 修改為新的資料
      newFloorTableInfo["floorInfo"][floorIndex.floorNameIndex][
        floorIndex.upDown
      ][floorIndex.stepClass][floorIndex.stepClassIndex][
        floorIndex.stepValueName
      ] = value;
      setFloorTableInfo(newFloorTableInfo);
      return;
    }
    // 所有的onchange都至少要重新寫入一次資料
    // 修改為新的資料
    newFloorTableInfo["floorInfo"][floorIndex.floorNameIndex][
      floorIndex.upDown
    ][floorIndex.stepClass][floorIndex.stepClassIndex][
      floorIndex.stepValueName
    ] = value;
    // console.log(floorIndex);
    //接著判斷其他需要改變的值（style，角度）
    if (floorIndex.stepClass === "firstStepInfo") {
      //b,f,e需要根據資料的值改變style
      // 第一階b1>20
      if (floorIndex.stepValueName === "stepHeight") {
        if (value > 20) {
          newFloorTableInfo["floorInfo"][floorIndex.floorNameIndex][
            floorIndex.upDown
          ][floorIndex.stepClass][floorIndex.stepClassIndex][
            "isStepHeightOver"
          ] = true;
        } else {
          newFloorTableInfo["floorInfo"][floorIndex.floorNameIndex][
            floorIndex.upDown
          ][floorIndex.stepClass][floorIndex.stepClassIndex][
            "isStepHeightOver"
          ] = false;
        }
      }
    } else if (floorIndex.stepClass === "otherStepInfo") {
      // 其他階值改變，處理style，角度重算
      let nowHeight = getTriangleNumber(
        newFloorTableInfo,
        floorIndex,
        "stepHeight"
      );
      let newAngle;
      if (floorTableInfo.mode === "hypotenuse") {
        //斜邊長模式
        let nowHypotenuse = getTriangleNumber(
          newFloorTableInfo,
          floorIndex,
          "stepHypotenuse"
        );
        // 斜邊長必須>高 才算角度
        if (nowHypotenuse > nowHeight) {
          newAngle = getAngleByHypotenuse(nowHeight, nowHypotenuse);
        }
      } else {
        //深度模式
        let nowDeep = getTriangleNumber(
          newFloorTableInfo,
          floorIndex,
          "stepDeep"
        );
        // getAngleByDeep()回傳：角度 及 修正後的斜邊長
        let newHypotenuse = "";
        [newAngle, newHypotenuse] = getAngleByDeep(nowHeight, nowDeep);
        //寫入斜邊長
        newFloorTableInfo["floorInfo"][floorIndex.floorNameIndex][
          floorIndex.upDown
        ][floorIndex.stepClass][floorIndex.stepClassIndex]["stepHypotenuse"] =
          newHypotenuse;
      }

      //寫入資料
      newFloorTableInfo["floorInfo"][floorIndex.floorNameIndex][
        floorIndex.upDown
      ][floorIndex.stepClass][floorIndex.stepClassIndex]["stepAngle"] =
        newAngle;

      // 其他階值改變：處理角度style
      if (newAngle > 40) {
        newFloorTableInfo["floorInfo"][floorIndex.floorNameIndex][
          floorIndex.upDown
        ][floorIndex.stepClass][floorIndex.stepClassIndex][
          "isStepAngleOver"
        ] = true;
      } else {
        newFloorTableInfo["floorInfo"][floorIndex.floorNameIndex][
          floorIndex.upDown
        ][floorIndex.stepClass][floorIndex.stepClassIndex][
          "isStepAngleOver"
        ] = false;
      }
      // 其他階值改變：處理級高style，
      if (floorIndex.stepValueName === "stepHeight") {
        // b>22
        if (value > 22) {
          newFloorTableInfo["floorInfo"][floorIndex.floorNameIndex][
            floorIndex.upDown
          ][floorIndex.stepClass][floorIndex.stepClassIndex][
            "isStepHeightOver"
          ] = true;
        } else {
          newFloorTableInfo["floorInfo"][floorIndex.floorNameIndex][
            floorIndex.upDown
          ][floorIndex.stepClass][floorIndex.stepClassIndex][
            "isStepHeightOver"
          ] = false;
        }
      } else if (floorIndex.stepValueName === "stepHypotenuse") {
        // 斜邊長>34
        if (value > 34) {
          newFloorTableInfo["floorInfo"][floorIndex.floorNameIndex][
            floorIndex.upDown
          ][floorIndex.stepClass][floorIndex.stepClassIndex][
            "isStepHypotenuseOver"
          ] = true;
        } else {
          newFloorTableInfo["floorInfo"][floorIndex.floorNameIndex][
            floorIndex.upDown
          ][floorIndex.stepClass][floorIndex.stepClassIndex][
            "isStepHypotenuseOver"
          ] = false;
        }
      }
    }

    //其他階自動開階
    //如果目前位置是[其他階]的[最後一階]，且onchange的值(高或斜邊長或深)不為""
    if (
      floorIndex.stepClass === "otherStepInfo" &&
      floorIndex.stepClassIndex + 1 ===
        newFloorTableInfo["floorInfo"][floorIndex.floorNameIndex][
          floorIndex.upDown
        ][floorIndex.stepClass].length &&
      value !== ""
    ) {
      //如果[上半層][未達３０階] 或 [下半層][未達１５階]
      if (
        (floorIndex.upDown === "floorUpStep" &&
          newFloorTableInfo["floorInfo"][floorIndex.floorNameIndex][
            floorIndex.upDown
          ][floorIndex.stepClass].length +
            2 <=
            30) ||
        (floorIndex.upDown === "floorDownStep" &&
          newFloorTableInfo["floorInfo"][floorIndex.floorNameIndex][
            floorIndex.upDown
          ][floorIndex.stepClass].length +
            2 <=
            15)
      ) {
        // console.log("階數未達最大值的最後一階！");
        //設定確認目標
        let checkFloorIndex = structuredClone(floorIndex);
        //如果是 斜邊長模式
        if (floorTableInfo.mode === "hypotenuse") {
          if (floorIndex.stepValueName === "stepHeight") {
            //如果是高度，要確認斜邊長
            checkFloorIndex.stepValueName = "stepHypotenuse";
          } else if (floorIndex.stepValueName === "stepHypotenuse") {
            //如果是斜邊長，要確認高度
            checkFloorIndex.stepValueName = "stepHeight";
          }
        } else {
          //如果是 深度模式
          if (floorIndex.stepValueName === "stepHeight") {
            //如果是高度，要確認深度
            checkFloorIndex.stepValueName = "stepDeep";
          } else if (floorIndex.stepValueName === "stepDeep") {
            //如果是深度，要確認高度
            checkFloorIndex.stepValueName = "stepHeight";
          }
        }

        //取得確認目標之值（此階的斜邊長或高度）
        let checkValue = document.getElementById(
          indexToId(checkFloorIndex)
        ).value;
        //若確認之值不為空（此階級高、斜邊長都有值）
        if (checkValue !== "") {
          //[上半層]若是第16階皆不為空，則刪除下半層資料
          if (
            newFloorTableInfo["floorInfo"][floorIndex.floorNameIndex][
              floorIndex.upDown
            ][floorIndex.stepClass].length +
              2 ===
            17
          ) {
            //第１６階
            // console.log("第１６階高斜邊長都有值");
            newFloorTableInfo["floorInfo"][floorIndex.floorNameIndex][
              "floorDownStep"
            ] = undefined;
          }
          // console.log("新增一階！");
          let newStepName = floorIndex.stepClassIndex + 3;
          //新增一階
          newFloorTableInfo["floorInfo"][floorIndex.floorNameIndex][
            floorIndex.upDown
          ]["stepNumber"] += 1;
          newFloorTableInfo["floorInfo"][floorIndex.floorNameIndex][
            floorIndex.upDown
          ][floorIndex.stepClass].push({
            stepName: newStepName.toString(),
            stepHeight: "",
            stepDeep: "",
            stepHypotenuse: "",
            stepAngle: "",
            isStepHeightOver: false,
            isStepHypotenuseOver: false,
            isStepAngleOver: false,
          });
        }
      }
    }

    //如果目前是[下半層]，[onchange的值不為""]，[上半層超過１６階]，刪掉上半層第１６階
    if (
      floorIndex.upDown === "floorDownStep" &&
      value !== "" &&
      newFloorTableInfo["floorInfo"][floorIndex.floorNameIndex]["floorUpStep"][
        "otherStepInfo"
      ].length +
        1 >
        15
    ) {
      // console.log(
      //   "目前是[下半層]，[onchange的值不為空值]，[上半層超過１６階]"
      // );
      //總層數修改為15
      newFloorTableInfo["floorInfo"][floorIndex.floorNameIndex]["floorUpStep"][
        "stepNumber"
      ] = 15;
      //階梯資料只留１５階
      newFloorTableInfo["floorInfo"][floorIndex.floorNameIndex]["floorUpStep"][
        "otherStepInfo"
      ].splice(14);
    }

    setFloorTableInfo(newFloorTableInfo);
  }
  //還我下半層
  function handleBackDownStepClick(floorIndex) {
    // 複製原有的資料
    let newFloorTableInfo = structuredClone(floorTableInfo);
    //還他預設的下半層
    let downStep = structuredClone(aFloor.floorDownStep);
    newFloorTableInfo["floorInfo"][floorIndex.floorNameIndex].floorDownStep =
      downStep;
    //上半層只留１５階
    newFloorTableInfo["floorInfo"][floorIndex.floorNameIndex]["floorUpStep"][
      "stepNumber"
    ] = 15;
    newFloorTableInfo["floorInfo"][floorIndex.floorNameIndex]["floorUpStep"][
      "otherStepInfo"
    ].splice(14);
    //寫入新的值
    setFloorTableInfo(newFloorTableInfo);
  }
  //新增一層
  function handleAddFloorClick() {
    // 複製原有的資料
    const newFloorTableInfo = structuredClone(floorTableInfo);
    //舊的樓層數
    let oldFloorNumber = Number(floorTableInfo.floorNumber);
    //新樓層數＝舊的＋１
    let newFloorNumber = oldFloorNumber + 1;
    //新樓層名稱
    let newFloorName = "";
    if (oldFloorNumber === 0) {
      newFloorName = "1F ↹ 2F";
      newFloorTableInfo.floorNumber = newFloorNumber + 1;
    } else {
      newFloorTableInfo.floorNumber = newFloorNumber;
      newFloorName = newFloorNumber - 1 + "F ↹ " + newFloorNumber + "F";
    }
    //新增樓層
    let addFloor = structuredClone(aFloor);
    addFloor.floorName = newFloorName;
    newFloorTableInfo.floorInfo.push(addFloor);
    setFloorTableInfo(newFloorTableInfo);
  }
  //其他問題 -> 資料監聽
  function handleOtherQChange(changeItem) {
    let newOtherQuestionInfo = structuredClone(otherQuestionInfo);
    newOtherQuestionInfo[changeItem] = !otherQuestionInfo[changeItem];
    setOtherQuestionInfo(newOtherQuestionInfo);
  }

  //儲存(submitMessage)的預設state
  const [submitMessage, setSubmitMessage] = useState({
    isSubmit: false,
    isSubmitSuccess: undefined,
    message: [],
  });
  //submitHandler
  function submitHandler(e) {
    //防止按下Enter自動submit
    e.preventDefault();
  }
  function handleSubmitClick() {
    // 複製原有的資料
    let newSubmitMessage = structuredClone(submitMessage);

    //防呆：
    // stairBasicInfo 姓名:
    if (stairBasicInfo.caseName === "") {
      newSubmitMessage.isSubmitSuccess = false;
      newSubmitMessage.message.push("姓名必須有值");
    }
    // stairBasicInfo 體重：
    if (stairBasicInfo.bodyWeight === "") {
      newSubmitMessage.isSubmitSuccess = false;
      newSubmitMessage.message.push("體重必須有值");
    }
    // floorTableInfo 樓層數：
    if (floorTableInfo.floorNumber === "") {
      newSubmitMessage.isSubmitSuccess = false;
      newSubmitMessage.message.push("樓層數必須有值");
    } else {
      //有樓層數代表有樓層表格
      //每個樓層表格之上半層必須有 a1, b1, b2, f2
      //遍歷每層樓
      for (let i = 0; i < floorTableInfo.floorInfo.length; i++) {
        //第一階 a1, b1
        //a1必須有值
        if (
          floorTableInfo.floorInfo[i].floorUpStep.firstStepInfo[0].stepWidth ===
          ""
        ) {
          newSubmitMessage.isSubmitSuccess = false;
          newSubmitMessage.message.push(
            floorTableInfo.floorInfo[i].floorName + "的上半層級寬(a1)必須有值"
          );
        }
        //b1必須有值
        if (
          floorTableInfo.floorInfo[i].floorUpStep.firstStepInfo[0]
            .stepHeight === ""
        ) {
          newSubmitMessage.isSubmitSuccess = false;
          newSubmitMessage.message.push(
            floorTableInfo.floorInfo[i].floorName +
              "的上半層第一階級高(b1)必須有值"
          );
        }
        //其他階 b2, f2
        //b2必須有值
        if (
          floorTableInfo.floorInfo[i].floorUpStep.otherStepInfo[0]
            .stepHeight === ""
        ) {
          newSubmitMessage.isSubmitSuccess = false;
          newSubmitMessage.message.push(
            floorTableInfo.floorInfo[i].floorName +
              "的上半層第二階級高(b2)必須有值"
          );
        }
        //f2必須有值
        if (
          floorTableInfo.floorInfo[i].floorUpStep.otherStepInfo[0]
            .stepHypotenuse === ""
        ) {
          newSubmitMessage.isSubmitSuccess = false;
          newSubmitMessage.message.push(
            floorTableInfo.floorInfo[i].floorName +
              "的上半層第二階斜邊長(f2)必須有值"
          );
        }

        //遍歷上下半層
        //如果是沒有下半層(ex. 1.5F~2F，上半層超過１５階)
        let upDownList = [];
        if (floorTableInfo.floorInfo[i]["floorDownStep"] === undefined) {
          upDownList = ["floorUpStep"];
        } else {
          upDownList = ["floorUpStep", "floorDownStep"];
        }

        for (let j = 0; j < upDownList.length; j++) {
          let upDownName = "";
          if (j === 0) {
            upDownName = "上半層";
          } else {
            upDownName = "下半層";
          }
          //遍歷其他階
          //若某階b有值，則f也必有值，反之亦然
          for (
            let k = 1;
            k < floorTableInfo.floorInfo[i][upDownList[j]].otherStepInfo.length;
            k++
          ) {
            //有b，f必須有
            if (
              floorTableInfo.floorInfo[i][upDownList[j]].otherStepInfo[k]
                .stepHeight !== "" &&
              floorTableInfo.floorInfo[i][upDownList[j]].otherStepInfo[k]
                .stepHypotenuse === ""
            ) {
              newSubmitMessage.isSubmitSuccess = false;
              newSubmitMessage.message.push(
                floorTableInfo.floorInfo[i].floorName +
                  "的" +
                  upDownName +
                  "第" +
                  floorTableInfo.floorInfo[i][upDownList[j]].otherStepInfo[j]
                    .stepName +
                  "階級高(b)有值，此階斜邊長(f)必須有值"
              );
            }
            //有f，b必須有
            if (
              floorTableInfo.floorInfo[i][upDownList[j]].otherStepInfo[k]
                .stepHypotenuse !== "" &&
              floorTableInfo.floorInfo[i][upDownList[j]].otherStepInfo[k]
                .stepHeight === ""
            ) {
              newSubmitMessage.isSubmitSuccess = false;
              newSubmitMessage.message.push(
                floorTableInfo.floorInfo[i].floorName +
                  "的" +
                  upDownName +
                  "第" +
                  floorTableInfo.floorInfo[i][upDownList[j]].otherStepInfo[k]
                    .stepName +
                  "階斜邊長(f)有值，此階級高(b)必須有值"
              );
            }
          }
          //每個上/下半層都有一個迴轉平台
          let g1 =
            floorTableInfo.floorInfo[i][upDownList[j]].turnPlatform[0].g1;
          let g2 =
            floorTableInfo.floorInfo[i][upDownList[j]].turnPlatform[0].g2;
          let g3g4 =
            floorTableInfo.floorInfo[i][upDownList[j]].turnPlatform[0].g3g4;
          let g3 =
            floorTableInfo.floorInfo[i][upDownList[j]].turnPlatform[0].g3;
          let g4 =
            floorTableInfo.floorInfo[i][upDownList[j]].turnPlatform[0].g4;
          //沒有值都是undefined, undefined to boolean is false
          //有值為true (0也是false)
          if (
            (g1 && g2 && g3g4 && !g3 && !g4) ||
            (g1 && g2 && !g3g4 && g3 && g4) ||
            (!g1 && !g2 && !g3g4 && !g3 && !g4) ||
            (g1 && !g2 && !g3g4 && g3 && !g4)
          ) {
            //可接受的形式
            // console.log("迴轉平台判斷成功 ");
          } else {
            newSubmitMessage.isSubmitSuccess = false;
            newSubmitMessage.message.push(
              floorTableInfo.floorInfo[i].floorName +
                "的" +
                upDownName +
                "迴轉平台錯誤！"
            );
            // console.log("迴轉平台錯誤 ");
          }
        }
      }
    }
    //其他資料不防呆
    //印出資料
    let stairData = {
      stairBasicInfo: stairBasicInfo,
      floorTableInfo: floorTableInfo,
      otherQuestionInfo: otherQuestionInfo,
    };
    console.log(stairData);
    //如果以上判斷都正確，則newSubmitMessage.isSubmitSuccess = undefined;
    if (newSubmitMessage.isSubmitSuccess === undefined) {
      newSubmitMessage.isSubmitSuccess = true;
      stairData.floorTableInfo.judgeVersion = "新北市輔具資源中心1111118版";
      setStairData(stairData);
    }

    //顯示系統訊息
    newSubmitMessage.isSubmit = true;

    setSubmitMessage(newSubmitMessage);
  }
  function closeMessageCardClick() {
    let initialSubmitMessage = {
      isSubmit: false,
      isSubmitSuccess: undefined,
      message: [],
    };
    setSubmitMessage(initialSubmitMessage);
  }
  function resetForm() {
    // 資料設定 //
    // stairBasicInfo
    setStairBasicInfo({
      caseName: "",
      bodyWeight: "",
      address: "",
    });
    // floorTableInfo 預設：沒有樓層
    setFloorTableInfo(structuredClone(initFloorTableInfo));
    // 其他問題
    setOtherQuestionInfo({
      stepRounded: false,
      stepDeep: false,
      stepSpecial: false,
    });
  }

  return (
    <>
      <main>
        <section className="stair-editor">
          <div className="card">
            <div className="card-top">
              <div className="card-title">垂直通路：一般樓梯記錄表</div>
              <button className="reset" onClick={() => resetForm()}>
                重設
              </button>
            </div>
            <div className="card-txt">
              <form onSubmit={(e) => submitHandler(e)}>
                <StairEditorBasic
                  stairBasicInfo={stairBasicInfo}
                  floorNumber={floorTableInfo.floorNumber}
                  handleFloorNumberChange={handleFloorNumberChange}
                  handleFloorNumberOnBlur={handleFloorNumberOnBlur}
                  handleBasicInfoChange={handleBasicInfoChange}
                />
                <FloorEditor
                  floorTableInfo={floorTableInfo}
                  handleSpecialFloorClick={handleSpecialFloorClick}
                  handleTableChange={handleTableChange}
                  handleBackDownStepClick={handleBackDownStepClick}
                  handleAddFloorClick={handleAddFloorClick}
                  handleModeClick={handleModeClick}
                />
                <OtherEditor
                  otherQuestionInfo={otherQuestionInfo}
                  handleOtherQChange={handleOtherQChange}
                />
                <div className="stair-editor-buttons">
                  <button
                    type="button"
                    className="save-stair-editor"
                    onClick={handleSubmitClick}
                  >
                    儲存
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <StairEditorSystemMessage
        submitMessage={submitMessage}
        closeMessageCardClick={closeMessageCardClick}
      />
    </>
  );
}
export default StairEditor;

// floorEditor將索引轉成id綁在各個input上
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
