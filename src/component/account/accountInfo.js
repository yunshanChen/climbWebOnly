import React from "react";
import AccountInfoItem from "./accountInfoItem";

function AccountInfo(props) {
  //生成accountInfo的每筆資料
  let accountInfoItems = [];
  for (let i = 0; i < props.accountInfo.length; i++) {
    accountInfoItems.push(
      <AccountInfoItem
        title={props.accountInfo[i].title}
        value={props.accountInfo[i].value}
        key={i}
      />
    );
  }

  return (
    <div className="card account-info">
      <div className="card-top">
        <h2 className="card-title">帳戶資訊</h2>
      </div>
      <ul className="card-txt">{accountInfoItems}</ul>
    </div>
  );
}
export default AccountInfo;
