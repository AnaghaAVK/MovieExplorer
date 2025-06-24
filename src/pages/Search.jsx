import { useSearchParams } from "react-router-dom";
import { Card } from "../components/Card";
import { usefetch } from "../hooks/usefetch";

export const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const {data : movies} = usefetch(apiPath,queryTerm);
  return (
    <main className="container">
      <h3 className="text-dark py-2 fw-bold border text-center">
        {movies.length==0?`NO RESULT FOUND FOR ${queryTerm}`:`RESULT FOR ${queryTerm}`}
      </h3>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 py-2">
        {movies.map((movie)=>{
          return <Card key={movie.id} movie={movie} />;
        })}
        </div>
    </main>
  )
};

