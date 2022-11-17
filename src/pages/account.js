import React, { useState } from "react";
import AccountInfo from "../component/account/accountInfo";
import PwdModify from "../component/account/pwdModify";
import AccountSystemMessage from "../component/account/accountSystemMessage";
import "../css/account.css";

function Account() {
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
          <AccountInfo />
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
