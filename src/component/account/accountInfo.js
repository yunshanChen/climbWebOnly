import React from "react";
import AccountInfoItem from "./accountInfoItem";

function AccountInfo() {
  let accountInfo = [
    { title: "帳號", value: "superman" },
    { title: "名稱", value: "每天量樓梯好辛苦" },
    { title: "帳號狀態", value: "一般帳號" },
  ];
  //生成accountInfo的每筆資料
  let accountInfoItems = [];
  for (let i = 0; i < accountInfo.length; i++) {
    accountInfoItems.push(
      <AccountInfoItem
        title={accountInfo[i].title}
        value={accountInfo[i].value}
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
