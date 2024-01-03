import "./cardProduct.css";

const CardProduct = ({ productInfo }) => {
  const { img, name, origin, price } = productInfo;
  return (
    <div className="card">
      <img src={img} alt={name} className="img-card" />
      <h2>{name}</h2>
      <p>{origin}</p>
      <h3>${price}</h3>
    </div>
  );
};

export default CardProduct;
