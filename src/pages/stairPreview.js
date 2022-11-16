import React from "react";
import { Link } from "react-router-dom";
import "../css/stairPreview.css";
import OtherQHave from "../img/other_Q_have.png";
import OtherQNo from "../img/other_Q_no.png";
import OtherQNotHave from "../img/other_Q_notHave.png";
import OtherQYes from "../img/other_Q_yes.png";
import QRcodeAppointed from "../img/QRcode_appointed.png";
import QRcodeAsistCenter from "../img/QRcode_asistcenter.png";

function StairPreview() {
  return (
    <main>
      <section className="result-buttons no-print">
        <Link className="back-to-stair-info" to="/stairEditor">
          回樓梯表單
        </Link>
        <button className="print-PDF" onclick="window.print()">
          生成PDF檔
        </button>
      </section>
      <section className="stair-preview print">
        <div className="tables-page">
          <table className="preview-table">
            <thead>
              <tr>
                <th colspan="11" scope="col">
                  垂直通路-一般樓梯紀錄表
                </th>
              </tr>
              <tr>
                <th colspan="4" scope="col">
                  <span>姓名：</span>
                  <span>王小美</span>
                </th>
                <th colspan="3" scope="col">
                  <span>體重：</span>
                  <span>50</span>
                  <span>公斤</span>
                </th>
                <th colspan="4" scope="col" className="form-version">
                  新北市輔具資源中心1111020版
                </th>
              </tr>
              <tr>
                <th colspan="3" scope="col">
                  <span>一般樓梯：共</span>
                  <span>3</span>
                  <span>層樓</span>
                </th>
                <th colspan="8" scope="col">
                  <span>地址：</span>
                  <span>新北市ＯＯ區ＯＯ路123巷45弄78號3樓之9</span>
                </th>
              </tr>
              <tr className="floor-name-tr">
                <th scope="col" className="border-double-r"></th>
                <th colspan="5" className="floor-name border-double-r">
                  1F ↹ 2F
                </th>
                {/* <!-- 第二個樓層 --> */}
                <th colspan="5" className="floor-name">
                  2F ↹ 3F
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
              <tr>
                <th scope="row">第1階</th>
                <td rowspan="15"></td>
                <td className="first-step">
                  <div className="first-step-border">16.0</div>
                </td>
                <td className="cross">
                  <div className="cross-line"></div>
                </td>
                <td className="cross">
                  <div className="cross-line"></div>
                </td>
                <td rowspan="15" className="border-double-r">
                  <div>是否皆</div>
                  <div>≧12公分</div>
                </td>
                {/* <!-- 第二個樓層 --> */}
                <td rowspan="15"></td>
                <td className="first-step">
                  <div className="first-step-border"></div>
                </td>
                <td className="cross">
                  <div className="cross-line"></div>
                </td>
                <td className="cross">
                  <div className="cross-line"></div>
                </td>
                <td rowspan="15" className="border-r">
                  <div>是否皆</div>
                  <div>≧12公分</div>
                </td>
              </tr>
              <tr>
                <th scope="row">第2階</th>
                <td></td>
                <td></td>
                <td></td>
                {/* <!-- 第二個樓層 --> */}
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">第3階</th>
                <td></td>
                <td></td>
                <td></td>
                {/* <!-- 第二個樓層 --> */}
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">第4階</th>
                <td></td>
                <td></td>
                <td></td>
                {/* <!-- 第二個樓層 --> */}
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">第5階</th>
                <td></td>
                <td></td>
                <td></td>
                {/* <!-- 第二個樓層 --> */}
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">第6階</th>
                <td></td>
                <td></td>
                <td></td>
                {/* <!-- 第二個樓層 --> */}
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">第7階</th>
                <td></td>
                <td></td>
                <td></td>
                {/* <!-- 第二個樓層 --> */}
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">第8階</th>
                <td></td>
                <td></td>
                <td></td>
                {/* <!-- 第二個樓層 --> */}
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">第9階</th>
                <td></td>
                <td></td>
                <td></td>
                {/* <!-- 第二個樓層 --> */}
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">第10階</th>
                <td></td>
                <td></td>
                <td></td>
                {/* <!-- 第二個樓層 --> */}
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">第11階</th>
                <td></td>
                <td></td>
                <td></td>
                {/* <!-- 第二個樓層 --> */}
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">第12階</th>
                <td></td>
                <td></td>
                <td></td>
                {/* <!-- 第二個樓層 --> */}
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">第13階</th>
                <td></td>
                <td></td>
                <td></td>
                {/* <!-- 第二個樓層 --> */}
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">第14階</th>
                <td></td>
                <td></td>
                <td></td>
                {/* <!-- 第二個樓層 --> */}
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">第15階</th>
                <td></td>
                <td></td>
                <td></td>
                {/* <!-- 第二個樓層 --> */}
                <td></td>
                <td></td>
                <td></td>
              </tr>
              {/* <!-- 中間迴轉平台 --> */}
              <tr className="turn-platform">
                <th rowspan="2">迴轉平台</th>
                <th scope="col">深(g1)</th>
                <th scope="col">深(g2)</th>
                <th scope="col">寬(g3+g4)</th>
                <th scope="col">寬(g3)</th>
                <th scope="col" className="border-double-r">
                  寬(g4)
                </th>
                {/* <!-- 第二個樓層 --> */}
                <th scope="col">深(g1)</th>
                <th scope="col">深(g2)</th>
                <th scope="col">寬(g3+g4)</th>
                <th scope="col">寬(g3)</th>
                <th scope="col" className="border-r">
                  寬(g4)
                </th>
              </tr>
              <tr className="turn-platform">
                <td>1</td>
                <td></td>
                <td></td>
                <td></td>
                <td className="border-double-r"></td>
                {/* <!-- 第二個樓層 --> */}
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="border-r"></td>
              </tr>
              {/* <!-- 轉彎後 --> */}
              <tr>
                <th scope="row">第1階</th>
                <td rowspan="15"></td>
                <td className="first-step">
                  <div className="first-step-border"></div>
                </td>
                <td className="cross">
                  <div className="cross-line"></div>
                </td>
                <td className="cross">
                  <div className="cross-line"></div>
                </td>
                <td rowspan="15" className="border-double-r">
                  <div>是否皆</div>
                  <div>≧12公分</div>
                </td>
                {/* <!-- 第二個樓層 --> */}
                <td rowspan="15"></td>
                <td className="first-step">
                  <div className="first-step-border"></div>
                </td>
                <td className="cross">
                  <div className="cross-line"></div>
                </td>
                <td className="cross">
                  <div className="cross-line"></div>
                </td>
                <td rowspan="15" className="border-r">
                  <div>是否皆</div>
                  <div>≧12公分</div>
                </td>
              </tr>
              <tr>
                <th scope="row">第2階</th>
                <td></td>
                <td></td>
                <td></td>
                {/* <!-- 第二個樓層 --> */}
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">第3階</th>
                <td></td>
                <td></td>
                <td></td>
                {/* <!-- 第二個樓層 --> */}
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">第4階</th>
                <td></td>
                <td></td>
                <td></td>
                {/* <!-- 第二個樓層 --> */}
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">第5階</th>
                <td></td>
                <td></td>
                <td></td>
                {/* <!-- 第二個樓層 --> */}
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">第6階</th>
                <td></td>
                <td></td>
                <td></td>
                {/* <!-- 第二個樓層 --> */}
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">第7階</th>
                <td></td>
                <td></td>
                <td></td>
                {/* <!-- 第二個樓層 --> */}
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">第8階</th>
                <td></td>
                <td></td>
                <td></td>
                {/* <!-- 第二個樓層 --> */}
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">第9階</th>
                <td></td>
                <td></td>
                <td></td>
                {/* <!-- 第二個樓層 --> */}
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">第10階</th>
                <td></td>
                <td></td>
                <td></td>
                {/* <!-- 第二個樓層 --> */}
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">第11階</th>
                <td></td>
                <td></td>
                <td></td>
                {/* <!-- 第二個樓層 --> */}
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">第12階</th>
                <td></td>
                <td></td>
                <td></td>
                {/* <!-- 第二個樓層 --> */}
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">第13階</th>
                <td></td>
                <td></td>
                <td></td>
                {/* <!-- 第二個樓層 --> */}
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">第14階</th>
                <td></td>
                <td></td>
                <td></td>
                {/* <!-- 第二個樓層 --> */}
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">第15階</th>
                <td></td>
                <td></td>
                <td></td>
                {/* <!-- 第二個樓層 --> */}
                <td></td>
                <td></td>
                <td></td>
              </tr>
              {/* <!-- 中間迴轉平台 --> */}
              <tr className="turn-platform">
                <th rowspan="2" className="border-b">
                  迴轉平台
                </th>
                <th scope="col">深(g1)</th>
                <th scope="col">深(g2)</th>
                <th scope="col">寬(g3+g4)</th>
                <th scope="col">寬(g3)</th>
                <th scope="col" className="border-double-r">
                  寬(g4)
                </th>
                {/* <!-- 第二個樓層 --> */}
                <th scope="col">深(g1)</th>
                <th scope="col">深(g2)</th>
                <th scope="col">寬(g3+g4)</th>
                <th scope="col">寬(g3)</th>
                <th scope="col" className="border-r">
                  寬(g4)
                </th>
              </tr>
              <tr className="turn-platform">
                <td>1</td>
                <td></td>
                <td></td>
                <td></td>
                <td className="border-double-r"></td>
                {/* <!-- 第二個樓層 --> */}
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="border-r"></td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="6">※梯階圓角≦9mm半徑圓弧(履帶式條件)(請附照片)</td>
                <td colspan="5" className="img-cover">
                  <img src={OtherQYes} alt="" />
                </td>
              </tr>
              <tr>
                <td colspan="6">※級深皆≧12公分 (撐桿式條件)</td>
                <td colspan="5" className="img-cover">
                  <img src={OtherQYes} alt="" />
                </td>
              </tr>
              <tr>
                <td colspan="6">※有三角型階梯、螺旋型階梯(履帶式條件)</td>
                <td colspan="5" className="img-cover">
                  <img src={OtherQNotHave} alt="" />
                </td>
              </tr>
              <tr>
                <td colspan="11">
                  ※樓梯傾角測量誤差範圍5度內，需原廠確認安全後可使用履帶式
                </td>
              </tr>
              <tr>
                <td colspan="11">備註：</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>
      <section className="stair-preview print">
        <div className="tables-page">
          <table className="preview-table">
            <thead>
              <tr className="border-b">
                <th colspan="11" scope="col">
                  垂直通路-一般樓梯紀錄表
                </th>
              </tr>
              <tr>
                <th scope="col" className="border-double-r"></th>
                <th colspan="5" className="floor-name border-double-r">
                  1F ↹ 2F
                </th>
                {/* <!-- 第二個樓層 --> */}
                <th colspan="5" className="floor-name">
                  2F ↹ 3F
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
              <tr>
                <th scope="row">第1階</th>
                <td rowspan="15"></td>
                <td className="first-step">
                  <div className="first-step-border"></div>
                </td>
                <td className="cross">
                  <div className="cross-line"></div>
                </td>
                <td className="cross">
                  <div className="cross-line"></div>
                </td>
                <td rowspan="15" className="border-double-r">
                  <div>是否皆</div>
                  <div>≧12公分</div>
                </td>
                {/* <!-- 第二個樓層 --> */}
                <td rowspan="15"></td>
                <td className="first-step">
                  <div className="first-step-border"></div>
                </td>
                <td className="cross">
                  <div className="cross-line"></div>
                </td>
                <td className="cross">
                  <div className="cross-line"></div>
                </td>
                <td rowspan="15" className="border-r">
                  <div>是否皆</div>
                  <div>≧12公分</div>
                </td>
              </tr>
              <tr>
                <th scope="row">第2階</th>
                <td></td>
                <td></td>
                <td></td>
                {/* <!-- 第二個樓層 --> */}
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">第3階</th>
                <td></td>
                <td></td>
                <td></td>
                {/* <!-- 第二個樓層 --> */}
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">第4階</th>
                <td></td>
                <td></td>
                <td></td>
                {/* <!-- 第二個樓層 --> */}
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">第5階</th>
                <td></td>
                <td></td>
                <td></td>
                {/* <!-- 第二個樓層 --> */}
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">第6階</th>
                <td></td>
                <td></td>
                <td></td>
                {/* <!-- 第二個樓層 --> */}
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">第7階</th>
                <td></td>
                <td></td>
                <td></td>
                {/* <!-- 第二個樓層 --> */}
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">第8階</th>
                <td></td>
                <td></td>
                <td></td>
                {/* <!-- 第二個樓層 --> */}
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">第9階</th>
                <td></td>
                <td></td>
                <td></td>
                {/* <!-- 第二個樓層 --> */}
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">第10階</th>
                <td></td>
                <td></td>
                <td></td>
                {/* <!-- 第二個樓層 --> */}
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">第11階</th>
                <td></td>
                <td></td>
                <td></td>
                {/* <!-- 第二個樓層 --> */}
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">第12階</th>
                <td></td>
                <td></td>
                <td></td>
                {/* <!-- 第二個樓層 --> */}
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">第13階</th>
                <td></td>
                <td></td>
                <td></td>
                {/* <!-- 第二個樓層 --> */}
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">第14階</th>
                <td></td>
                <td></td>
                <td></td>
                {/* <!-- 第二個樓層 --> */}
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">第15階</th>
                <td></td>
                <td></td>
                <td></td>
                {/* <!-- 第二個樓層 --> */}
                <td></td>
                <td></td>
                <td></td>
              </tr>
              {/* <!-- 中間迴轉平台 --> */}
              <tr className="turn-platform">
                <th rowspan="2">迴轉平台</th>
                <th scope="col">深(g1)</th>
                <th scope="col">深(g2)</th>
                <th scope="col">寬(g3+g4)</th>
                <th scope="col">寬(g3)</th>
                <th scope="col" className="border-double-r">
                  寬(g4)
                </th>
                {/* <!-- 第二個樓層 --> */}
                <th scope="col">深(g1)</th>
                <th scope="col">深(g2)</th>
                <th scope="col">寬(g3+g4)</th>
                <th scope="col">寬(g3)</th>
                <th scope="col" className="border-r">
                  寬(g4)
                </th>
              </tr>
              <tr className="turn-platform">
                <td>1</td>
                <td></td>
                <td></td>
                <td></td>
                <td className="border-double-r"></td>
                {/* <!-- 第二個樓層 --> */}
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="border-r"></td>
              </tr>
              {/* <!-- 轉彎後 --> */}
              <tr>
                <th scope="row">第1階</th>
                <td rowspan="15" className="border-b"></td>
                <td className="first-step">
                  <div className="first-step-border"></div>
                </td>
                <td className="cross">
                  <div className="cross-line"></div>
                </td>
                <td className="cross">
                  <div className="cross-line"></div>
                </td>
                <td rowspan="15" className="border-double-r border-b">
                  <div>是否皆</div>
                  <div>≧12公分</div>
                </td>
                {/* <!-- 第二個樓層 --> */}
                <td rowspan="15" className="border-b"></td>
                <td className="first-step">
                  <div className="first-step-border"></div>
                </td>
                <td className="cross">
                  <div className="cross-line"></div>
                </td>
                <td className="cross">
                  <div className="cross-line"></div>
                </td>
                <td rowspan="15" className="border-r border-b">
                  <div>是否皆</div>
                  <div>≧12公分</div>
                </td>
              </tr>
              <tr>
                <th scope="row">第2階</th>
                <td></td>
                <td></td>
                <td></td>
                {/* <!-- 第二個樓層 --> */}
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">第3階</th>
                <td></td>
                <td></td>
                <td></td>
                {/* <!-- 第二個樓層 --> */}
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">第4階</th>
                <td></td>
                <td></td>
                <td></td>
                {/* <!-- 第二個樓層 --> */}
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">第5階</th>
                <td></td>
                <td></td>
                <td></td>
                {/* <!-- 第二個樓層 --> */}
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">第6階</th>
                <td></td>
                <td></td>
                <td></td>
                {/* <!-- 第二個樓層 --> */}
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">第7階</th>
                <td></td>
                <td></td>
                <td></td>
                {/* <!-- 第二個樓層 --> */}
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">第8階</th>
                <td></td>
                <td></td>
                <td></td>
                {/* <!-- 第二個樓層 --> */}
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">第9階</th>
                <td></td>
                <td></td>
                <td></td>
                {/* <!-- 第二個樓層 --> */}
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">第10階</th>
                <td></td>
                <td></td>
                <td></td>
                {/* <!-- 第二個樓層 --> */}
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">第11階</th>
                <td></td>
                <td></td>
                <td></td>
                {/* <!-- 第二個樓層 --> */}
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">第12階</th>
                <td></td>
                <td></td>
                <td></td>
                {/* <!-- 第二個樓層 --> */}
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">第13階</th>
                <td></td>
                <td></td>
                <td></td>
                {/* <!-- 第二個樓層 --> */}
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">第14階</th>
                <td></td>
                <td></td>
                <td></td>
                {/* <!-- 第二個樓層 --> */}
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">第15階</th>
                <td></td>
                <td></td>
                <td></td>
                {/* <!-- 第二個樓層 --> */}
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="suitable-climber print">
        <div className="title">新北市輔具資源中心</div>
        <div className="say-hello">
          <span className="case-name">王小美</span>先生/小姐您好：
        </div>
        <div className="suitable-txt">
          經輔具中心評估結果，您的居家環境符合使用以下機型：
        </div>
        <table className="suitable-table">
          <thead>
            <tr>
              <th scope="col" className="table-climbers">
                爬梯機機型
              </th>
              <th scope="col" className="table-ATcenter">
                輔具中心
              </th>
              <th scope="col" className="table-climber-business-single">
                特約廠商(單趟)
              </th>
              <th scope="col" className="table-climber-business-month">
                特約廠商(月租)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>翔鎰/天創行電動爬梯椅(座椅式)</td>
              <td>無</td>
              <td>
                益百利、北台灣、優遊小客車、芯願、振生、福倫交通、生通、樂活協會、好爸爸、大立亨、安欣、第一、小驢駒、大心、康健、平安好行
              </td>
              <td>
                益百利、北台灣、優遊小客車、芯願、振生、福倫交通、樂活協會、安欣、第一
              </td>
            </tr>
            <tr>
              <td>弘采SC-5(座椅式)</td>
              <td>可月租</td>
              <td>益百利、車福、多扶接送、喜多移動</td>
              <td>益百利、車福、弘采介護</td>
            </tr>
            <tr>
              <td>元倫ASC-120B(座椅式)</td>
              <td>可月租</td>
              <td>高森能源</td>
              <td>高森能源</td>
            </tr>
            <tr>
              <td>弘采SA-S(輪椅式)</td>
              <td>可月租</td>
              <td>無</td>
              <td>弘采介護</td>
            </tr>
            <tr>
              <td>元倫ASC-130B(輪椅式)</td>
              <td>無</td>
              <td>高森能源</td>
              <td>高森能源</td>
            </tr>
            <tr>
              <td>天群S-max sella(撐桿式)</td>
              <td>無</td>
              <td>益百利、北台灣、振生、福倫交通、安欣、平安好行</td>
              <td>振生、福倫交通</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <div className="result-txt">
          <p className="measurement-error">
            ※樓梯狀況可能有量測誤差或老舊破損等其他因素，操作安全性以實際使用現場為主
          </p>
          <div className="stair-todo">
            <div className="todo-title">接下來我該怎麼做？</div>
            <div className="todo todo-ATcenter">
              <div className="todo-list">
                <div className="todo-ATcenter">
                  1. 我要預約【輔具中心】爬梯機月租服務
                </div>
                <div className="what-todo">
                  請來電新北市輔具資源中心，預約專線：(02)8286-7045#9(總機)
                </div>
                <div className="what-todo">
                  租金200元/日、1,000元/週、3,000元/月
                  (列冊低收入戶、中低收入戶免費)
                </div>
                <div className="what-todo">
                  (詳細介紹請參考以下網址:https://atrc.aihsin.ntpc.net.tw/news.php?id=39)
                </div>
              </div>
              <div className="QRcode todo-ATcenter-QRcode">
                <img src={QRcodeAsistCenter} className="todo-ATcenter-img" />
              </div>
            </div>
            <div className="todo todo-business">
              <div className="todo-list">
                <div className="todo-business">
                  2. 我要申請【特約廠商】爬梯機月租/單趟服務
                </div>
                <div className="what-todo">請洽詢特約租賃廠商辦理</div>
                <div className="what-todo">
                  (特約租賃廠商請參考以下網址：https://goo.gl/iunGTD)
                </div>
              </div>
              <div className="QRcode todo-business-QRcode">
                <img src={QRcodeAppointed} className="todo-business-img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
export default StairPreview;
