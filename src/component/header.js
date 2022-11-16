import React from "react";
import { Link } from "react-router-dom";
import "../css/header.css";

function Header() {
  return (
    <header>
      <nav className="navbar">
        <h1>
          <Link to="/" className="title">
            爬梯機系統
          </Link>
        </h1>
        <ul className="navbar-list">
          <li className="nav-item">
            <Link to="/stairList"> 樓梯列表</Link>
          </li>
          <li className="nav-item">
            <Link to="/account">帳戶資訊</Link>
          </li>
        </ul>
        <button className="btn-logout">登出</button>
      </nav>
    </header>
  );
}
export default Header;
