import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import MenuPage from "./components/pages/MenuPage";
import ProductPage from "./components/pages/ProductPage";
import SingleProduct from "./components/SingleProduct";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product/:id" element={<SingleProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
