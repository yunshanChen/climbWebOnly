import React from "react";

function AccountInfoItem(props) {
  return (
    <li className="user-account">
      <div className="title">{props.title}</div>
      <div className="value">{props.value}</div>
    </li>
  );
}
export default AccountInfoItem;
