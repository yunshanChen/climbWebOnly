import React, { useContext, useMemo, useState } from "react";
import LoginSystemMessage from "../component/loginSystemMessage";
import { fetchLogin, getMe } from "../component/webAPI";
import { setAuthToken } from "../component/utils";
import "../css/login.css";
import "../css/loadingCover.css";
import AuthContext from "../component/contexts";

import Capoo from "../component/capoos/capoo";
import BlackCapoo from "../component/capoos/blackCapoo";
import { Chicken, TrumpetChicken } from "../component/capoos/chicken";

function Login() {
  const { user, setUser } = useContext(AuthContext);
  const [loginMessage, setLoginMessage] = useState({
    isMessageCardShow: false,
    isLoginSuccess: false,
    message: "",
    backendMessage: "",
  });
  let [account, setAccount] = useState("");
  let [password, setPassword] = useState("");

  //loading畫面
  const capooList = useMemo(() => {
    return [<Capoo />, <BlackCapoo />, <Chicken />, <TrumpetChicken />];
  }, []);
  const [loadingCover, setLoadingCover] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //監聽input
  function accountPwdChange(e, accountOrPwd) {
    if (accountOrPwd === "account") {
      setAccount(e.target.value);
    } else if (accountOrPwd === "password") {
      setPassword(e.target.value);
    }
  }
  //送出登入
  function clickLogin() {
    setLoadingCover(capooList[(Math.random() * 4) | 0]);
    setIsLoading(true);
    fetchLogin(account, password)
      .then((result) => {
        console.log(result);
        let isLoginSuccess;
        if (result.message === "登入成功") {
          isLoginSuccess = true;
          // 將 token 存到 localStorage
          setAuthToken(result.token);
          //取得使用者資訊
          getMe().then((response) => {
            setUser(response.name);
          });
        } else {
          isLoginSuccess = false;
        }
        setIsLoading(false);
        setLoginMessage({
          isMessageCardShow: true,
          isLoginSuccess: isLoginSuccess,
          message: "",
          backendMessage: result.message + "！",
        });
      })
      .catch((error) => {
        setIsLoading(false);
        setLoginMessage({
          isMessageCardShow: true,
          isLoginSuccess: false,
          message: error,
          backendMessage: "可能的原因：網路連線問題或伺服器錯誤。",
        });
      });
  }
  function closeMessageCard() {
    //關閉時重設
    let newLoginMessage = structuredClone(loginMessage);
    newLoginMessage = {
      isMessageCardShow: false,
      isLoginSuccess: false,
      message: "",
      backendMessage: "",
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
                <input
                  type="text"
                  id="user-name"
                  placeholder="請輸入帳號"
                  value={account}
                  onChange={(e) => accountPwdChange(e, "account")}
                />
              </div>
              <div className="input-group">
                <label htmlFor="password"> 密碼 </label>
                <input
                  type="password"
                  id="password"
                  placeholder="請輸入密碼"
                  value={password}
                  onChange={(e) => accountPwdChange(e, "password")}
                />
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
      <div
        className={isLoading ? "loading-cover" : "loading-cover none"}
        id="loading-cover"
      >
        <div className="loading-txt">Loading...</div>
        {loadingCover}
      </div>
    </>
  );
}

export default Login;
