import "./featuredProducts.css";
import CardProduct from "../card_product/CardProduct";
import { featureProducts } from "../../data/products";

const FeaturedProducts = () => {
  return (
    <div className="featured_container" id="featured">
      <div className="cards-container">
        {featureProducts.map((product) => {
          return <CardProduct key={product.id} productInfo={product} />;
        })}
      </div>
    </div>
  );
};

export default FeaturedProducts;
