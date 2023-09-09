import { useSelector } from "react-redux";
import ProductList from "../components/ProductList/ProductList";
import "./PageStyles.scss";

export default function Basket({
  makeFavourite,
  makeNonFavourite,
  removeProduct,
}) {
  const favourites = useSelector(
    (state) => state.favouritedProducts.favourites
  );
  const basket = useSelector((state) => state.basketProducts.basket);
  return (
    <div>
      <h2 className="pages-hero">Curated Delights Await in Your Basket</h2>
      <ProductList
        favourites={favourites}
        products={basket}
        makeFavourite={makeFavourite}
        makeNonFavourite={makeNonFavourite}
        isBasketPage={true}
        removeProduct={removeProduct}
      />
    </div>
  );
}
