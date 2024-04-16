import s from "./MovieDetailsPage.module.css";
import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import { fetchMoviesCast } from "../../services/api";
import { Suspense, useEffect, useRef, useState } from "react";

export const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const location = useLocation();
  const goBackRef = useRef(location.state?.from);

  useEffect(() => {
    async function getMoviesSearch() {
      const results = await fetchMoviesCast(movieId);
      setMovie(results);
    }
    getMoviesSearch();
  }, [movieId]);

  if (!movie) {
    return <h2>Loading...</h2>;
  }

  return (
    <section className={s.section}>
      <Link className={s.link} to={goBackRef.current}>
        Go back
      </Link>
      <div className={s.wrapper_div}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          alt=""
        />

        <div className={s.div}>
          <h2>
            {movie?.title} ({movie.release_date})
          </h2>
          <p>User score: {movie.vote_average}</p>
          <h3>Overview:</h3>
          <p>{movie?.overview}</p>
          <h3>Genres:</h3>
          <ul className={s.genres}>
            {movie.genres
              ? movie?.genres.map((genre) => {
                  return <li key={genre.id}>{genre.name}</li>;
                })
              : ""}
          </ul>
        </div>
      </div>
      <h3 className={s.title_h}>Addictional information:</h3>
      <div className={s.wrap_div}>
        <Link className={s.link_a} to="cast">Cast</Link>
        <Link className={s.link_a} to="reviews">Reviews</Link>
      </div>
      <div>
        <Suspense fallback={<h2>Loading...</h2>}>
          <Outlet />
        </Suspense>
      </div>
    </section>
  );
};

export default MovieDetailsPage;
