import React from "react";
import "../css/login.css";

function Login() {
  return (
    <main>
      <section className="login-card">
        <div className="card">
          <div className="card-top">
            <h2 className="card-title">登入</h2>
          </div>
          <form action="#">
            <div className="input-group">
              <label for="user-name"> 帳號 </label>
              <input type="text" id="user-name" placeholder="請輸入帳號" />
            </div>
            <div className="input-group">
              <label for="password"> 密碼 </label>
              <input type="password" id="password" placeholder="請輸入密碼" />
            </div>
            <button className="submit">登入</button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Login;
