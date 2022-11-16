import React from "react";
import QRcodeAppointed from "../../img/QRcode_appointed.png";
import QRcodeAsistCenter from "../../img/QRcode_asistcenter.png";

function SuitableClimber() {
  return (
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
              <img
                src={QRcodeAsistCenter}
                className="todo-ATcenter-img"
                alt="輔具中心QRcode"
              />
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
              <img
                src={QRcodeAppointed}
                className="todo-business-img"
                alt="特約廠商QRcode"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SuitableClimber;
