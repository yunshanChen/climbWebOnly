import React from "react";

function StairListSystemMessage(props) {
  let deleteStairId = props.deleteItemMessage.deleteStairId;
  return (
    <section
      className={
        props.deleteItemMessage.isMessageCardShow
          ? "system-message"
          : "system-message none"
      }
    >
      <div className="card message">
        <div className="card-top">
          <h2 className="card-title">系統訊息</h2>
        </div>
        <div className="card-txt">
          <div className="message-txt">
            確定要刪除「{props.deleteItemMessage.message}」的資料？
          </div>
          <div className="message-buttons">
            <button
              type="button"
              className="ok"
              onClick={() => props.deleteItem(deleteStairId)}
            >
              確定
            </button>
            <button
              type="button"
              className="chancel"
              onClick={() => props.closeMessageCard()}
            >
              取消
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default StairListSystemMessage;
