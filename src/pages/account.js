import React, { useEffect, useState } from "react";
import AccountInfo from "../component/account/accountInfo";
import PwdModify from "../component/account/pwdModify";
import AccountSystemMessage from "../component/account/accountSystemMessage";
import "../css/account.css";
import { changePassword, getMe } from "../component/webAPI";
// import { useNavigate } from "react-router-dom";

function Account() {
  // const navigate = useNavigate();
  //取得目前使用者狀態
  const [userName, setUserName] = useState("");
  const [account, setAccount] = useState("");
  const [pwdInput, setPwdInput] = useState({
    oldPassword: "",
    newPassword: "",
    newPasswordConfirm: "",
  });
  let accountInfo = [
    { title: "帳號", value: account },
    { title: "名稱", value: userName },
    { title: "帳號狀態", value: "一般帳號" },
  ];

  useEffect(() => {
    getMe().then((response) => {
      // console.log(response);
      setAccount(response.email);
      setUserName(response.name);
    });
  }, []);

  const [changePwdMessage, setchangePwdMessage] = useState({
    isMessageCardShow: false,
    isChangePwdSuccess: false,
    message: "",
    backendMessage: "",
  });
  function clickChangePwd() {
    let newChangePwdMessage = structuredClone(changePwdMessage);
    newChangePwdMessage.isMessageCardShow = true;
    //將資料送給後端
    const changePwd = JSON.stringify(pwdInput);
    changePassword(changePwd)
      .then((response) => {
        console.log(response);
        if (response.message === "修改成功") {
          newChangePwdMessage.isChangePwdSuccess = true;
        } else {
          //修改失敗
          newChangePwdMessage.backendMessage = response.message;
        }
        setchangePwdMessage(newChangePwdMessage);
      })
      .catch((error) => {
        // 打API失敗
        setchangePwdMessage({
          isMessageCardShow: true,
          isChangePwdSuccess: false,
          message: "",
          backendMessage: "可能的原因：網路連線問題或伺服器錯誤。",
        });
        console.log(error);
      });
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
  function handlePwdChange(e, changeTitle) {
    let value = e.target.value;
    let newPwdInput = structuredClone(pwdInput);
    newPwdInput[changeTitle] = value;
    setPwdInput(newPwdInput);
  }
  return (
    <>
      <main>
        <section className="account-cards">
          <AccountInfo accountInfo={accountInfo} />
          <PwdModify
            changePwdMessage={changePwdMessage}
            pwdInput={pwdInput}
            handlePwdChange={handlePwdChange}
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
