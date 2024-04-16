import s from "./HomePage.module.css"
import { useEffect, useState } from "react";
import { fetchMovies } from "../../services/api"
import MovieList from "../../components/MovieList/MovieList";


export const HomePage = () => {
    const [popularFilms, setPopularFilms] = useState([])

    useEffect(() => {
        async function getMovies() {
        const {results} = await fetchMovies()
          setPopularFilms(results)
        }
          getMovies()
        }, [])
    
  return (
    <div>
			<h1 className={s.wrapper}>Popular films</h1>
			<MovieList movies={popularFilms} />
		</div>
  )
}

export default HomePage

