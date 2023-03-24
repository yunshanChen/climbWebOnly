import { useNavigate, Outlet } from "react-router-dom";
import Footer from "./component/footer";
import Header from "./component/header";

import { AuthContext, StairDataContext } from "./component/contexts";
import { useEffect, useState } from "react";
import { getAuthToken } from "./component/utils";

function Layout() {
  const navigate = useNavigate();
  //紀錄登入狀態， user有值代表有登入
  const [user, setUser] = useState(null);
  //樓梯資料紀錄
  const [stairData, setStairData] = useState("");

  useEffect(() => {
    //如果有token的話，判斷使用者
    if (getAuthToken()) {
      navigate("/stairEditor");
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Header />
      <StairDataContext.Provider value={{ stairData, setStairData }}>
        <Outlet stairData={stairData} setStairData={setStairData} />
      </StairDataContext.Provider>
      <Footer />
    </AuthContext.Provider>
  );
}
export default Layout;
