import "./products.css";
import { products } from "../../data/products";
import CardProduct from "../../components/card_product/CardProduct";

const Products = () => {
  return (
    <div className="featured_container" id="featured">
      <div className="cards-container">
        {products.map((product) => {
          return <CardProduct key={product.id} productInfo={product} />;
        })}
      </div>
    </div>
  );
};

export default Products;
