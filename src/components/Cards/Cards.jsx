import "./custom.css";
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
function Card({ objectID, title, author, url }) {

  return (
    <Link to={`/post/${objectID}`} className="custom-card">
      <div className="card-content">
        <h3 style={{color:"black"}}>{!title ? "No Title Provided" : title}</h3>
        <p style={{color:"black"}}>
          Author:{" "}
          <span style={{ fontFamily: "cursive"}}>
            {!author ? "Unknown" : author}
          </span>
        </p>
        <a href={url} style={{ color: "purple", textDecoration: "underline" }}>
          Read more
        </a>
      </div>
    </Link>
  );
}

export default Card;
