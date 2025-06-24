import { Routes, Route } from "react-router-dom";
import {MovieDetails, MovieList, Search} from "../pages"
const AllRoutes = () => {
  return (
  <>
    <Routes>
      <Route path="/" element={<MovieList title="ALL MOVIES" apiPath="movie/now_playing" />}/>
      <Route path="movies/popularmovies" element={<MovieList title="POPULAR MOVIES" apiPath="movie/popular"/>}/>
      <Route path="movies/topmovies" element={<MovieList title="TOP RATED MOVIES"apiPath="movie/top_rated" />}/>
      <Route path="movies/upcomingmovies" element={<MovieList title="UPCOMING MOVIES" apiPath="movie/upcoming"/>}/>
      <Route path="movie/:id" element={<MovieDetails/>}/>
      <Route path="search" element={<Search apiPath="search/movie"/>}/>
    </Routes>
  </>
  );
}

export default AllRoutes;