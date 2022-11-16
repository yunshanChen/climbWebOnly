import React from "react";
import { Link } from "react-router-dom";
import "../css/systemMessage.css";

function SystemMessage() {
  return (
    <section className="system-message none">
      <div className="card message">
        <div className="card-top">
          <h2 className="card-title">系統訊息</h2>
          <button className="close">X</button>
        </div>
        <div className="card-txt">
          <div className="message-txt">儲存成功!</div>
          <div className="message-buttons">
            {/* 預覽列印和回樓梯表單只有在StairEditor才出現 */}
            <button className="show-print-preview">
              <Link to="/stairPreview">預覽列印</Link>
            </button>
            <button className="back-to-stair-editor">回樓梯表單</button>
            {/* 確定按鈕只在修改密碼及樓梯列表出現 */}
            {/* <button className="ok">確定</button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
export default SystemMessage;
