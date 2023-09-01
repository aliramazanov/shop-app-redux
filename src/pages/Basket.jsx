import ProductList from "../components/ProductList/ProductList";
import "./PageStyles.scss";

export default function Basket({
  products,
  makeFavourite,
  makeNonFavourite,
  favourites,
  removeProduct,
}) {
  return (
    <div>
      <h2 className="pages-hero">Curated Delights Await in Your Basket</h2>
      <ProductList
        favourites={favourites}
        products={products}
        makeFavourite={makeFavourite}
        makeNonFavourite={makeNonFavourite}
        isBasketPage={true}
        removeProduct={removeProduct}
      />
    </div>
  );
}
