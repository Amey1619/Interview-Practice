import "./custom.css";
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
function Card({ objectID, title, author, date }) {
  const updatedAtDate = new Date(date);
  const formattedDate = updatedAtDate
    .toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    }).replace(/,/g, "");
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
        <p style={{color:"purple"}}>{formattedDate}</p>
      </div>
    </Link>
  );
}

export default Card;
