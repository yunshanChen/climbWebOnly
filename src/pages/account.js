import React from "react";
import AccountInfo from "../component/account/accountInfo";
import PwdModify from "../component/account/pwdModify";
import SystemMessage from "../component/systemMessage";
import "../css/account.css";

function Account() {
  return (
    <>
      <main>
        <section className="account-cards">
          <AccountInfo />
          <PwdModify />
        </section>
      </main>
      <SystemMessage />
    </>
  );
}
export default Account;
