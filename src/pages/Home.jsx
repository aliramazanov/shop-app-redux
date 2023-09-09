import ProductList from "../components/ProductList/ProductList";
import Welcome from "../components/Welcome/Welcome";
import Modal from "../components/Modal/Modal";
import { useSelector } from "react-redux";

export default function Home({
  handleOpenModalButton,
  isModalOpen,
  currentModalData,
  closeModal,
  handleContinueButtonClick,
  makeFavourite,
  makeNonFavourite,
}) {
  const products = useSelector((state) => state.fetchProducts.products);

  return (
    <div>
      <Welcome />
      <ProductList
        products={products}
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
