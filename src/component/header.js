import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/header.css";
import { AuthContext } from "./contexts";
import { setAuthToken } from "../component/utils";

function Header() {
  // 取得目前使用者狀態
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleLogout() {
    setAuthToken("");
    setUser(null);
    navigate("/");
    alert("登出成功！");
  }
  //導覽列的列表顯示
  let navbarList;
  // 如果有登入
  if (user) {
    navbarList = (
      <>
        <button
          type="button"
          className="btn-logout"
          onClick={() => handleLogout()}
        >
          登出
        </button>
      </>
    );
  }

  return (
    <header className="no-print">
      <nav className="navbar">
        <h1>
          <Link to="/" className="title">
            爬梯機系統
          </Link>
        </h1>
        {navbarList}
        <Link to="/clock" className="nav-item">
          時鐘
        </Link>
        <div className="version">v2.2</div>
      </nav>
    </header>
  );
}
export default Header;
