import React from "react";
import ProductList from "../components/ProductList/ProductList";
import Modal from "../components/Modal/Modal";
import "./PageStyles.scss";
import { useSelector } from "react-redux";

export default function Favourites({
  handleOpenModalButton,
  isModalOpen,
  currentModalData,
  closeModal,
  handleContinueButtonClick,
  makeNonFavourite,
  makeFavourite,
}) {
  const favourites = useSelector(
    (state) => state.favouritedProducts.favourites
  );

  return (
    <div className="favourites-page">
      <h2 className="pages-hero">Discover Your Exquisite Collection</h2>
      <ProductList
        products={favourites}
        isBasketPage={false}
        handleOpenModalButton={handleOpenModalButton}
        makeFavourite={makeFavourite}
        makeNonFavourite={makeNonFavourite}
      />
      {isModalOpen && (
        <Modal
          details={currentModalData}
          closeModal={closeModal}
          handleContinueButtonClick={handleContinueButtonClick}
        />
      )}
    </div>
  );
}
