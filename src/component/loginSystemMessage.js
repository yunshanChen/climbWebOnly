import React from "react";
import { Link } from "react-router-dom";
import "../css/systemMessage.css";

function LoginSystemMessage(props) {
  let loginMsgButton = props.loginMessage.isLoginSuccess ? (
    <button type="button" className="ok">
      <Link to="/stairList">確定</Link>
    </button>
  ) : (
    <button
      type="button"
      className="ok"
      onClick={() => props.closeMessageCard()}
    >
      確定
    </button>
  );
  return (
    <section
      className={
        props.loginMessage.isMessageCardShow
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
            {props.loginMessage.isLoginSuccess
              ? "登入成功！"
              : "登入失敗！" + props.loginMessage.backendMessage}
          </div>
          <div className="message-buttons">{loginMsgButton}</div>
        </div>
      </div>
    </section>
  );
}
export default LoginSystemMessage;
