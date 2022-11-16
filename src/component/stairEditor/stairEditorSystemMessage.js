import React from "react";
import { Link } from "react-router-dom";

function StairEditorSystemMessage(props) {
  let systemMessageClass = "system-message none";
  if (props.submitMessage.isSubmit) {
    systemMessageClass = "system-message";
  }
  //生成messageList的每筆資料
  let messageList = [];
  for (let i = 0; i < props.submitMessage.message.length; i++) {
    messageList.push(
      <MessageListItem
        message={i + 1 + ". " + props.submitMessage.message[i]}
        key={"StairEditorErrorMessage" + i}
      />
    );
  }
  return (
    <section className={systemMessageClass}>
      <div className="card message">
        <div className="card-top">
          <h2 className="card-title">系統訊息</h2>
          <button className="close">X</button>
        </div>
        <div className="card-txt">
          <div className="message-txt">
            <div className="message-txt-title">
              {props.submitMessage.isSubmitSuccess
                ? "儲存成功！"
                : "儲存失敗！"}
            </div>
            <ul className="message-list">{messageList}</ul>
          </div>
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
export default StairEditorSystemMessage;

function MessageListItem(props) {
  return <li className="user-account">{props.message}</li>;
}
