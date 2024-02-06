import "./App.css";
import "./components/css/Home.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import ForgotPwdPage from "./components/pages/ForgotPwdPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/forgotpwd" element={<ForgotPwdPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
