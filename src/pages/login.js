import React, { useState } from "react";
import LoginSystemMessage from "../component/loginSystemMessage";
import "../css/login.css";

function Login() {
  const [loginMessage, setLoginMessage] = useState({
    isMessageCardShow: false,
    isLoginSuccess: false,
    message: "",
  });
  function clickLogin() {
    let newLoginMessage = structuredClone(loginMessage);
    newLoginMessage.isMessageCardShow = true;
    setLoginMessage(newLoginMessage);
  }
  function closeMessageCard() {
    //關閉時重設
    let newLoginMessage = structuredClone(loginMessage);
    newLoginMessage = {
      isMessageCardShow: false,
      isLoginSuccess: false,
      message: "",
    };
    setLoginMessage(newLoginMessage);
  }
  function submitHandler(e) {
    //防止按下Enter自動submit
    e.preventDefault();
  }
  return (
    <>
      <main>
        <section className="login-card">
          <div className="card">
            <div className="card-top">
              <h2 className="card-title">登入</h2>
            </div>
            <form onSubmit={(e) => submitHandler(e)}>
              <div className="input-group">
                <label htmlFor="user-name"> 帳號 </label>
                <input type="text" id="user-name" placeholder="請輸入帳號" />
              </div>
              <div className="input-group">
                <label htmlFor="password"> 密碼 </label>
                <input type="password" id="password" placeholder="請輸入密碼" />
              </div>
              <button
                type="button"
                className="submit"
                onClick={() => clickLogin()}
              >
                登入
              </button>
            </form>
          </div>
        </section>
      </main>
      <LoginSystemMessage
        loginMessage={loginMessage}
        closeMessageCard={closeMessageCard}
      />
    </>
  );
}

export default Login;
