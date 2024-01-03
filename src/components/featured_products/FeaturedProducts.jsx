import "./featuredProducts.css";
import CardProduct from "../card_product/CardProduct";
import { products } from "../../data/products";

const FeaturedProducts = () => {
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

export default FeaturedProducts;
