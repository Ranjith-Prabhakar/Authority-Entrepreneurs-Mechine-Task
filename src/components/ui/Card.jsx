import "./card.css";
export default function ({ image, title, description, price, rating }) {
  return (
    <div className="card-wrapper">
      <div>
        <img className="card-image" src={image} alt="" />
      </div>
      <div className="card-title">
        <h5>{title}</h5>
      </div>
      <div className="card-description">
        <p>{description}</p>
      </div>
      <div className="card-price">
        <h4>{price}</h4>
      </div>
    </div>
  );
}
