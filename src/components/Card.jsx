import backup from "../assets/demo_image.png";
import { Link } from "react-router-dom";
export const Card = ({ movie }) => {
  const {
    poster_path,
    id,
    title,
    popularity,
    overview,
    vote_average,
    vote_count,
  } = movie;
  const image = poster_path ? `https://image.tmdb.org/t/p/original${poster_path}` : backup;
  return (
    <div className="col">
      <div className="card shadow" title={title}>
        <img src={image} alt="" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title text-overflow-1">{title}</h5>
          <p className="card-text text-overflow-2">{overview}</p>
          <div className="d-flex justify-content-between align-items-center">
            <Link to={`/movie/${id}`} className="btn btn-sm btn-outline-dark stretched-link">
              Read More
            </Link>
            <small className="">
              <i className="bi bi-star-fill text-warning"></i>
              <span>
                {" "}
                {vote_average} | {vote_count} reviews
              </span>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};
