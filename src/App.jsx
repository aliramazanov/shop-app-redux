import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { initializeProducts } from "./store/actions/initializeProducts";
import { addToBasket, removeFromBasket } from "./store/actions/basketActions";
import { closeModal, openModal } from "./store/actions/modalChanges";

import {
  clearSelectedProduct,
  setSelectedProduct,
} from "./store/actions/selectProduct";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import Basket from "./pages/Basket";
import About from "./pages/About";
import Header from "./components/Header/Header";
import modalData from "./modalData.jsx";

export default function App() {
  const dispatch = useDispatch();
  const currentModalData = useSelector((state) => state.modal.currentModalData);
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);
  const selectedProduct = useSelector((state) => state.selectedProduct);

  useEffect(() => {
    dispatch(initializeProducts());
  }, []);

  const handleContinueButtonClick = () => {
    if (selectedProduct) {
      dispatch(addToBasket(selectedProduct));
      dispatch(clearSelectedProduct());
      dispatch(closeModal());
    }
  };

  const removeProduct = (productId) => {
    dispatch(removeFromBasket(productId));
  };

  const findModalDataById = (modalId) =>
    modalData.find(({ id }) => id === modalId);

  const handleOpenModalButton = (modalId, products) => {
    const modalDataItem = findModalDataById(modalId);
    dispatch(setSelectedProduct(products));
    dispatch(openModal(modalDataItem, products));
  };

  const handleClosingOfModal = () => {
    dispatch(clearSelectedProduct());
    dispatch(closeModal());
  };

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
            <Route
              path="/"
              element={
                <Home
                  isModalOpen={isModalOpen}
                  handleOpenModalButton={handleOpenModalButton}
                  currentModalData={currentModalData}
                  closeModal={handleClosingOfModal}
                  handleContinueButtonClick={handleContinueButtonClick}
                />
              }
            />

            <Route
              path="/favourites"
              element={
                <Favourites
                  isModalOpen={isModalOpen}
                  currentModalData={currentModalData}
                  closeModal={handleClosingOfModal}
                  handleOpenModalButton={handleOpenModalButton}
                  handleContinueButtonClick={handleContinueButtonClick}
                />
              }
            />

            <Route
              path="/basket"
              element={<Basket removeProduct={removeProduct} />}
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
