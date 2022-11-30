import { BrowserRouter, Routes, Route } from "react-router-dom";
//import component
import Layout from "./layout";
import Login from "./pages/login";
import Account from "./pages/account";
import StairList from "./pages/stairList";
import StairEditor from "./pages/stairEditor";
import StairPreview from "./pages/stairPreview";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Login />} />
          <Route path="/account" element={<Account />} />
          <Route path="/stairList" element={<StairList />} />
          <Route path="/stairEditor" element={<StairEditor />} />
          <Route path="/stairPreview" element={<StairPreview />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
