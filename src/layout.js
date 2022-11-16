import { Outlet } from "react-router-dom";
import Header from "./component/header";
// import SystemMessage from "./component/systemMessage";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      {/* <SystemMessage /> */}
    </>
  );
}
export default Layout;
