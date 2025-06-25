import "./custom.css";
// eslint-disable-next-line react/prop-types
function Card({ image, title }) {
  return (
    <div className="custom-card">
      <img src={image} alt={title} className="card-image" />
      <span className="card-title">{title}</span>
    </div>
  );
}

export default Card;
