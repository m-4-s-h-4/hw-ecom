import { useContext } from "react";
import useSWR from "swr";
import "./catalog.css";
import CartContext from "../cart/CartContext";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Catalog() {
  const { data: products, error } = useSWR(
    "https://fakestoreapi.com/products",
    fetcher
  );
  const { dispatch } = useContext(CartContext);

  if (error) return <div>Couldn't load the items</div>;
  if (!products) return <div>Just a moment...</div>;

  return (
    <div className="catalog-container">
      <h1>Shop</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <button
              className="add-btn"
              onClick={() => dispatch({ type: "ADD_ITEM", item: product })}
            >
              Add to cart +
            </button>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} />
            <h3>{product.price}£</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
