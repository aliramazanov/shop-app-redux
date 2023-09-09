import ProductList from "../components/ProductList/ProductList";
import Welcome from "../components/Welcome/Welcome";
import Modal from "../components/Modal/Modal";
import { useSelector } from "react-redux";

export default function Home() {
  const products = useSelector((state) => state.fetchProducts.products);
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);
  return (
    <div>
      <Welcome />
      <ProductList products={products} isBasketPage={false} />
      {isModalOpen && <Modal />}
    </div>
  );
}
