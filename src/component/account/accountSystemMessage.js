import React from "react";

function AccountSystemMessage(props) {
  return (
    <section
      className={
        props.changePwdMessage.isMessageCardShow
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
            {(props.changePwdMessage.isChangePwdSuccess
              ? "修改密碼成功！"
              : "修改密碼失敗！") +
              (props.changePwdMessage.backendMessage || "")}
          </div>
          <div className="message-buttons">
            <button
              type="button"
              className="ok"
              onClick={() => props.closeMessageCard()}
            >
              確定
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AccountSystemMessage;
