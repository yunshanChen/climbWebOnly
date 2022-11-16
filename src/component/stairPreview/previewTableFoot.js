import React from "react";
import OtherQHave from "../../img/other_Q_have.png";
import OtherQNo from "../../img/other_Q_no.png";
import OtherQNotHave from "../../img/other_Q_notHave.png";
import OtherQYes from "../../img/other_Q_yes.png";

function previewTableFoot(props) {
  return (
    <tfoot>
      <tr>
        <td colSpan="6">※梯階圓角≦9mm半徑圓弧(履帶式條件)(請附照片)</td>
        <td colSpan="5" className="img-cover">
          <img
            src={props.otherQuestionInfo.stepRounded ? OtherQYes : OtherQNo}
            alt="梯階圓角≦9mm半徑圓弧"
          />
        </td>
      </tr>
      <tr>
        <td colSpan="6">※級深皆≧12公分 (撐桿式條件)</td>
        <td colSpan="5" className="img-cover">
          <img
            src={props.otherQuestionInfo.stepDeep ? OtherQYes : OtherQNo}
            alt="級深皆≧12公分"
          />
        </td>
      </tr>
      <tr>
        <td colSpan="6">※有三角型階梯、螺旋型階梯(履帶式條件)</td>
        <td colSpan="5" className="img-cover">
          <img
            src={
              props.otherQuestionInfo.stepSpecial ? OtherQHave : OtherQNotHave
            }
            alt="有三角型階梯、螺旋型階梯"
          />
        </td>
      </tr>
      <tr>
        <td colSpan="11">
          ※樓梯傾角測量誤差範圍5度內，需原廠確認安全後可使用履帶式
        </td>
      </tr>
      <tr>
        <td colSpan="11">備註：</td>
      </tr>
    </tfoot>
  );
}
export default previewTableFoot;
