import React, { useEffect, useState } from "react";
import AccountInfo from "../component/account/accountInfo";
import PwdModify from "../component/account/pwdModify";
import AccountSystemMessage from "../component/account/accountSystemMessage";
import "../css/account.css";
import { getMe } from "../component/webAPI";
// import { useNavigate } from "react-router-dom";

function Account() {
  // const navigate = useNavigate();
  //取得目前使用者狀態
  const [userName, setUserName] = useState("");
  const [account, setAccount] = useState("");
  let accountInfo = [
    { title: "帳號", value: account },
    { title: "名稱", value: userName },
    { title: "帳號狀態", value: "一般帳號" },
  ];

  useEffect(() => {
    getMe().then((response) => {
      console.log(response);
      setAccount(response.email);
      setUserName(response.name);
    });
  }, []);

  const [changePwdMessage, setchangePwdMessage] = useState({
    isMessageCardShow: false,
    isChangePwdSuccess: false,
    message: "",
  });
  function clickChangePwd() {
    let newChangePwdMessage = structuredClone(changePwdMessage);
    newChangePwdMessage.isMessageCardShow = true;
    setchangePwdMessage(newChangePwdMessage);
  }
  function closeMessageCard() {
    //關閉時重設
    let newChangePwdMessage = structuredClone(changePwdMessage);
    newChangePwdMessage = {
      isMessageCardShow: false,
      isChangePwdSuccess: false,
      message: "",
    };
    setchangePwdMessage(newChangePwdMessage);
  }
  return (
    <>
      <main>
        <section className="account-cards">
          <AccountInfo accountInfo={accountInfo} />
          <PwdModify
            changePwdMessage={changePwdMessage}
            clickChangePwd={clickChangePwd}
          />
        </section>
      </main>
      <AccountSystemMessage
        changePwdMessage={changePwdMessage}
        closeMessageCard={closeMessageCard}
      />
    </>
  );
}
export default Account;
