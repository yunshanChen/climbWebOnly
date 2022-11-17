import React from "react";

function PwdModify(props) {
  function submitHandler(e) {
    //防止按下Enter自動submit
    e.preventDefault();
  }
  return (
    <div className="card pwd-modify">
      <div className="card-top">
        <h2 className="card-title">修改密碼</h2>
      </div>
      <div className="card-txt">
        <form onSubmit={(e) => submitHandler(e)}>
          <div className="input-group">
            <label htmlFor="user-name"> 新密碼 </label>
            <input type="password" id="user-name" placeholder="請輸入新密碼" />
          </div>
          <div className="input-group">
            <label htmlFor="password"> 再次輸入密碼 </label>
            <input type="password" id="password" placeholder="請再次輸入密碼" />
          </div>
          <button
            type="button"
            className="submit"
            onClick={() => props.clickChangePwd()}
          >
            送出
          </button>
        </form>
      </div>
    </div>
  );
}
export default PwdModify;
