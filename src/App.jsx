import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { initializeProducts } from "./store/actions/initializeProducts";

import Favourites from "./pages/Favourites";
import Basket from "./pages/Basket";
import About from "./pages/About";
import Header from "./components/Header/Header";
import Home from "./pages/Home";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeProducts());
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <header>
          <div className="header-wrapper">
            <Header />
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
