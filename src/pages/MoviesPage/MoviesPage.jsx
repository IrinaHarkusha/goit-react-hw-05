import { useSearchParams } from "react-router-dom";
import Search from "../../components/Search/Search";
import { useEffect, useMemo, useState } from "react";
import { fetchMoviesByName } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";

export const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchedFilms, setSearchedFilms] = useState([]);

  const query = searchParams.get("query") || "";

  const args = useMemo(() => ({ q: query }), [query]);

  useEffect(() => {
    async function getSearchedMovies() {
      const { results } = await fetchMoviesByName(args.q);
      setSearchedFilms(results);
    }
    getSearchedMovies();
  }, [args.q]);

  return (
    <div>
      <Search setSearchParams={setSearchParams} />
      <MovieList movies={searchedFilms} />
    </div>
  );
};

export default MoviesPage;
