import s from './MovieReviews.module.css'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {fetchMovieReviews} from "../../services/api"

const MovieReviews = () => {
  const { movieId } = useParams()
  const [films, setFilms] = useState([])

  useEffect(() => {
        async function getMoviesSearch() {
        const reviews = await fetchMovieReviews(movieId)
            setFilms(reviews.results)
        }

     getMoviesSearch()
        }, [movieId]
    )
    console.log(films);

    if (films.length === 0) {
        return (<h2 className={s.reviews}>Unfortunately, this movie does not have a review</h2>)
    }
  return (
    <div>
      <ul>
        {films.map(film => {
          return (<li key={film.id} >
            <h2>{film.author}</h2>
            <p>{film.content}</p>
          </li>)
        })}
      </ul>
    </div>
  )
}

export default MovieReviews
