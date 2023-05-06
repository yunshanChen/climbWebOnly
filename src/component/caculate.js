// 個個爬梯機的限制
// otherQ中的問題：true表示有這個限制，false表示沒有這個限制
const climberLimit = [
  {
    name: "翔鎰/天創行電動爬梯椅(座椅式)",
    minWidth: "",
    maxFirstHeight: "",
    maxHeight: "",
    depth: false,
    maxAngle: 40,
    round: false,
    maxHypotenuse: 77,
    minG1: 90,
    minG2: 90,
    minG3G4: 90,
    minG3: 90,
    minG4: 90,
    maxWeight: 110,
    special: true,
  },
  {
    name: "弘采 SC-5(座椅式)",
    minWidth: 90,
    maxFirstHeight: 18,
    maxHeight: "",
    depth: false,
    maxAngle: 40,
    round: true,
    maxHypotenuse: 68,
    minG1: 95,
    minG2: 95,
    minG3G4: 190,
    minG3: 95,
    minG4: 95,
    maxWeight: 130,
    special: true,
  },
  {
    name: "元倫 ASC-120B(座椅式)",
    minWidth: 90,
    maxFirstHeight: 20,
    maxHeight: "",
    depth: false,
    maxAngle: 40,
    round: true,
    maxHypotenuse: 68,
    minG1: 93,
    minG2: 93,
    minG3G4: 190,
    minG3: 93,
    minG4: 93,
    maxWeight: 120,
    special: true,
  },
  {
    name: "弘采 SA-S(輪椅式)",
    minWidth: 90,
    maxFirstHeight: 18,
    maxHeight: "",
    depth: false,
    maxAngle: 40,
    round: true,
    maxHypotenuse: 68,
    minG1: 100,
    minG2: 100,
    minG3G4: 192,
    minG3: 100,
    minG4: 100,
    maxWeight: 150,
    special: true,
  },
  {
    name: "元倫 ASC-130B(輪椅式)",
    minWidth: 105,
    maxFirstHeight: 21.5,
    maxHeight: "",
    depth: false,
    maxAngle: 40,
    round: true,
    maxHypotenuse: 70,
    minG1: 105,
    minG2: 105,
    minG3G4: 190,
    minG3: 105,
    minG4: 105,
    maxWeight: 130,
    special: true,
  },
  {
    name: "天群 S-max sella(撐桿式)",
    minWidth: 63,
    maxFirstHeight: "",
    maxHeight: 22,
    depth: true,
    maxAngle: "",
    round: false,
    maxHypotenuse: "",
    minG1: 63,
    minG2: 63,
    minG3G4: 63,
    minG3: 63,
    minG4: 63,
    maxWeight: 135,
    special: false,
  },
  {
    name: "禮享家 PT-S(撐桿式)",
    minWidth: 63,
    maxFirstHeight: "",
    maxHeight: 22,
    depth: false,
    maxAngle: "",
    round: false,
    maxHypotenuse: "",
    minG1: 90,
    minG2: 90,
    minG3G4: 80,
    minG3: 80,
    minG4: 80,
    maxWeight: 130,
    special: false,
  },
];
const climberRentList = [
  {
    climbName: "翔鎰/天創行電動爬梯椅(座椅式)",
    ATcenter: "無",
    businessForSingle:
      "益百利、北台灣、芯願、振生、福倫交通、生通、樂活協會、好爸爸、大立亨、安欣、第一、小驢駒、大心、康健、平安好行",
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
  {
    climbName: "禮享家 PT-S(撐桿式)",
    ATcenter: "無",
    businessForSingle: "第一爬梯機",
    businessForMonth: "無",
  },
  {
    climbName: "爬梯機皆不適用",
    ATcenter: "無",
    businessForSingle: "無",
    businessForMonth: "無",
  },
];

const getStairFeature = (stairData) => {
  const floorInfo = stairData.floorTableInfo.floorInfo;
  const otherQ = stairData.otherQuestionInfo;
  //各項指標數值 列表
  const widthList = [];
  const firstHeightList = [];
  const heightList = [];
  const angleList = [];
  const twoHypotenuseList = [];
  const g1List = [];
  const g2List = [];
  const g3List = [];
  const g4List = [];
  const g3g4List = [];
  //遍歷所有 樓梯資訊 取得 樓梯特性
  for (let i = 0; i < floorInfo.length; i++) {
    //上半層
    ///第一階
    const upWidth = floorInfo[i].floorUpStep.firstStepInfo[0].stepWidth;
    const upHeight = floorInfo[i].floorUpStep.firstStepInfo[0].stepHeight;
    if (upWidth) widthList.push(upWidth);
    if (upHeight) firstHeightList.push(upHeight);
    ///其他階
    for (let j = 0; j < floorInfo[i].floorUpStep.otherStepInfo.length; j++) {
      const upHeight = floorInfo[i].floorUpStep.otherStepInfo[j].stepHeight;
      const upAngle = floorInfo[i].floorUpStep.otherStepInfo[j].stepAngle;
      let upTwoHypotenuse = 0;
      if (j > 0) {
        upTwoHypotenuse =
          parseFloat(floorInfo[i].floorUpStep.otherStepInfo[j].stepHypotenuse) +
          parseFloat(
            floorInfo[i].floorUpStep.otherStepInfo[j - 1].stepHypotenuse
          );
      }
      if (upHeight) heightList.push(upHeight);
      if (upAngle) angleList.push(upAngle);
      if (upTwoHypotenuse) twoHypotenuseList.push(upTwoHypotenuse);
    }
    //迴轉平台
    const turnPlatform = floorInfo[i].floorUpStep.turnPlatform[0];
    if (turnPlatform.g1) g1List.push(turnPlatform.g1);
    if (turnPlatform.g2) g2List.push(turnPlatform.g2);
    if (turnPlatform.g3g4) g3g4List.push(turnPlatform.g3g4);
    if (turnPlatform.g3) g3List.push(turnPlatform.g3);
    if (turnPlatform.g4) g4List.push(turnPlatform.g4);

    //下半層
    ///第一階
    if (floorInfo[i].floorDownStep) {
      //如果有下半層
      const downWidth = floorInfo[i].floorDownStep.firstStepInfo[0].stepWidth;
      const downHeight = floorInfo[i].floorDownStep.firstStepInfo[0].stepHeight;
      if (downWidth) widthList.push(downWidth);
      if (downHeight) firstHeightList.push(downHeight);
      ///其他階
      for (
        let j = 0;
        j < floorInfo[i].floorDownStep.otherStepInfo.length;
        j++
      ) {
        const downHeight =
          floorInfo[i].floorDownStep.otherStepInfo[j].stepHeight;
        const downAngle = floorInfo[i].floorDownStep.otherStepInfo[j].stepAngle;
        let downTwoHypotenuse = 0;
        if (j > 0) {
          downTwoHypotenuse =
            parseFloat(
              floorInfo[i].floorDownStep.otherStepInfo[j].stepHypotenuse
            ) +
            parseFloat(
              floorInfo[i].floorDownStep.otherStepInfo[j - 1].stepHypotenuse
            );
        }
        if (downHeight) heightList.push(downHeight);
        if (downAngle) angleList.push(downAngle);
        if (downTwoHypotenuse) twoHypotenuseList.push(downTwoHypotenuse);
      }
      //迴轉平台
      const turnPlatform = floorInfo[i].floorDownStep.turnPlatform[0];
      if (turnPlatform.g1) g1List.push(turnPlatform.g1);
      if (turnPlatform.g2) g2List.push(turnPlatform.g2);
      if (turnPlatform.g3g4) g3g4List.push(turnPlatform.g3g4);
      if (turnPlatform.g3) g3List.push(turnPlatform.g3);
      if (turnPlatform.g4) g4List.push(turnPlatform.g4);
    }
  }
  //取得目前樓梯的各項特性
  const stairFeature = {
    minWidth: Math.min(...widthList),
    maxFirstHeight: Math.max(...firstHeightList),
    maxHeight: Math.max(...firstHeightList.concat(heightList)),
    maxAngle: Math.max(...angleList),
    maxTwoHypotenuse: Math.max(...twoHypotenuseList),
    minG1: Math.min(...g1List),
    minG2: Math.min(...g2List),
    minG3G4: Math.min(...g3g4List),
    minG3: Math.min(...g3List),
    minG4: Math.min(...g4List),
    stepDeep: otherQ.stepDeep,
    stepRounded: otherQ.stepRounded,
    stepSpecial: otherQ.stepSpecial,
    bodyWeight: parseFloat(stairData.stairBasicInfo.bodyWeight),
  };
  console.log(stairFeature);
  return stairFeature;
};

const getClimber = (stairFeature) => {
  const suitClimberList = [];
  for (let i = 0; i < climberLimit.length; i++) {
    //判斷所有條件，只要有一個條件不符合，則表示此機器不適用。
    const climber = climberLimit[i];
    //1. 寬度
    if (climber.minWidth) {
      if (climber.minWidth > stairFeature.minWidth) {
        console.log(i + 1, climber.name, "寬度不符合");
        continue;
      }
    }
    //2-1. 第一階級高 跳過
    //2-2. 級高
    if (climber.maxHeight) {
      if (climber.maxHeight < stairFeature.maxHeight) {
        console.log(i + 1, climber.name, "級高不符合");
        continue;
      }
    }
    //3. 級深 如果機器要判斷 且 特色是false
    if (climber.depth) {
      if (!stairFeature.stepDeep) {
        console.log(i + 1, climber.name, "級深不符合");
        continue;
      }
    }
    //4.傾角
    if (climber.maxAngle) {
      if (climber.maxAngle < stairFeature.maxAngle) {
        console.log(i + 1, climber.name, "傾角不符合");
        continue;
      }
    }
    //5.圓角 如果機器要判斷 且 特色是false
    if (climber.round) {
      if (!stairFeature.stepRounded) {
        console.log(i + 1, climber.name, "圓角不符合");
        continue;
      }
    }
    //6.斜邊長
    if (climber.maxHypotenuse) {
      if (climber.maxHypotenuse < stairFeature.maxTwoHypotenuse) {
        console.log(i + 1, climber.name, "斜邊長不符合");
        continue;
      }
    }
    //7-1.g1
    if (stairFeature.minG1) {
      if (climber.minG1 > stairFeature.minG1) {
        console.log(i + 1, climber.name, "g1不符合");
        continue;
      }
    }
    //7-2.g2
    if (stairFeature.minG2) {
      if (climber.minG2 > stairFeature.minG2) {
        console.log(i + 1, climber.name, "g2不符合");
        continue;
      }
    }
    //7-3.g3g4
    if (stairFeature.minG3G4) {
      if (climber.minG3G4 > stairFeature.minG3G4) {
        console.log(i + 1, climber.name, "g3g4不符合");
        continue;
      }
    }
    //7-4.g3
    if (stairFeature.minG3) {
      if (climber.minG3 > stairFeature.minG3) {
        console.log(i + 1, climber.name, "g3不符合");
        continue;
      }
    }
    //7-4.g4
    if (stairFeature.minG4) {
      if (climber.minG4 > stairFeature.minG4) {
        console.log(i + 1, climber.name, "g4不符合");
        continue;
      }
    }
    //8.體重
    if (climber.maxWeight < stairFeature.bodyWeight) {
      console.log(i + 1, climber.name, "體重不符合");
      continue;
    }
    //9.特殊階梯 如果機器有限制 且 特色是true(有特殊階梯)
    if (climber.special && stairFeature.stepSpecial) {
      console.log(i + 1, climber.name, "特殊階梯不符合");
      continue;
    }
    //符合以上條件就加入list
    console.log(i + 1, climber.name, "符合");
    suitClimberList.push(i);
  }
  return suitClimberList;
};

//判斷適用機型
export const getSuitableClimber = (stairData) => {
  //取得此階梯的特性
  const stairFeature = getStairFeature(stairData);
  //根據機型判斷各項條件，取得適用爬梯機的id
  const suitClimbersList = getClimber(stairFeature);
  //取得適用爬梯機的借用條件
  const suitableClimbers = [];
  if (suitClimbersList.length > 0) {
    for (let i = 0; i < suitClimbersList.length; i++) {
      const climberId = suitClimbersList[i];
      suitableClimbers.push(climberRentList[climberId]);
    }
  } else {
    //如果沒有適用的爬梯機
    suitableClimbers.push(climberRentList[climberRentList.length - 1]);
  }
  return suitableClimbers;
};
