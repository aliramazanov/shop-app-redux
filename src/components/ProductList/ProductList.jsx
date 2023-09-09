import { useSelector } from "react-redux";
import Product from "../Products/Product";
import "./productList.scss";

export default function ProductList({
  handleOpenModalButton,
  removeProduct,
  products,
  isBasketPage,
  makeFavourite,
  makeNonFavourite,
}) {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <Product
          key={`${product.id}-${index}`}
          product={product}
          isBasketPage={isBasketPage}
          handleOpenModalButton={handleOpenModalButton}
          removeProduct={removeProduct}
          makeFavourite={makeFavourite}
          makeNonFavourite={makeNonFavourite}
        />
      ))}
    </div>
  );
}
