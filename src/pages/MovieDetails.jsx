import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import backup from "../assets/demo_image.png";
import { convertMinutes } from "../utils/utils";

export const MovieDetails = () => {
  const key = import.meta.env.VITE_API_KEY;
  const params = useParams();
  const [movie, setMovie] = useState([]);
  const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${key}`;

  useEffect(() => {
    async function fetchMovies() {
      fetch(url)
        .then((res) => res.json())
        .then((jsonData) => setMovie(jsonData));
    }
    fetchMovies();
  });

  useEffect(() => {
    document.title = `${movie.title}`;
  });


  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
    : backup;

  return (
    <main className="container">
      <h5 className="text-primary py-2 mb-3">{movie.title}</h5>
      <div className="row">
        <div className="col-md-4">
          <img src={image} alt="" className="img-fluid img-thumbnail" />
        </div>
        <div className="col-md-8">
          <h4>{movie.title}</h4>
          <p className="mt-3">{movie.overview}</p>
          {movie.genres?<p className="d-flex gap-3">
            {movie.genres.map((genre)=>(
              <ul key={genre.id} className="badge bg-primary">{genre.name}</ul>
            ))}
          </p>:""}

          <small className="">
              <i className="bi bi-star-fill text-warning"></i>
              <span>
                {" "}
                {movie.vote_average} | {movie.vote_count} reviews
              </span>
          </small>
          <h6 className="pt-2">Run Time : {convertMinutes(movie.runtime)}</h6>
          
          <a href={`https://www.imdb.com/title/${movie.imdb_id}/`} className="btn btn-outline-danger" > View More</a>
        </div>
      </div>
    </main>
  );
};
