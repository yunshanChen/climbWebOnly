import { useNavigate, Outlet } from "react-router-dom";
import Footer from "./component/footer";
import Header from "./component/header";

import AuthContext from "./component/contexts";
import { useEffect, useState } from "react";
import { getAuthToken } from "./component/utils";
import { getMe } from "./component/webAPI";

function Layout() {
  const navigate = useNavigate();
  //紀錄登入狀態， user有值代表有登入
  const [user, setUser] = useState(null);

  useEffect(() => {
    //如果有token的話，判斷使用者
    if (getAuthToken()) {
      getMe().then((response) => {
        if (response.message === "取得成功") {
          setUser(response.name);
          // 跳轉stairList畫面
          navigate("/stairList");
        }
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Header />
      <Outlet />
      <Footer />
    </AuthContext.Provider>
  );
}
export default Layout;
