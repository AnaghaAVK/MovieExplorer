import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../components/Card";
import { usefetch } from "../hooks/usefetch";
export const MovieList = ({ title, apiPath }) => {
  const {data : movies} = usefetch(apiPath);

  useEffect(() => {
    document.title = title;
  });

  // const navigator = useNavigate();
  return (
    <div>
      <main className="container">
        {/* {title == "All Movies" ? (
          <div className="bg-body-teritary p-5 border mb-5">
            <h5>Welcome To Movie Explorer</h5>
            <p className="lead">
              Hi people....! Welcome to movie explorer. You can browse the top
              rated, popular and upcoming movies here. Enjoy your time here.
              Watch more movies be happy :)
            </p>
            <button
              className="btn btn-dark"
              onClick={() => {
                navigator("/movies/upcomingmovies");
              }}
            >
              Exploer More
            </button>
          </div>
        ) : (
          ""
        )} */}
        <h3 className="text-white py-2 border bg-dark text-center border">{title}</h3>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 py-2">
        {movies.map((movie)=>{
          return <Card key={movie.id} movie={movie} />;
        })}
        </div>

      </main>
    </div>
  );
};
