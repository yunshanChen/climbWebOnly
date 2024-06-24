import { BrowserRouter, Routes, Route } from "react-router-dom";
//import component
import Layout from "./layout";
import Login from "./pages/login";
import StairEditor from "./pages/stairEditor";
import StairPreview from "./pages/stairPreview";
import Clock from "./component/clock/clock";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Login />} />
          <Route path="/stairEditor" element={<StairEditor />} />
          <Route path="/stairPreview" element={<StairPreview />} />
        </Route>
        <Route path="/clock" element={<Clock />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
