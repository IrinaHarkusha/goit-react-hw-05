import s from './MovieReviews.module.css'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {fetchMoviesReviews} from "../../services/api"

function MovieReviews () {
  const { movieId } = useParams()
  const [films, setFilms] = useState([])

  useEffect(() => {
        async function getMoviesSearch() {
        const reviews = await fetchMoviesReviews(movieId)
            setFilms(reviews.results)
        }

     getMoviesSearch()
        }, [movieId]
    )
    if (films.length === 0) {
        return (<h2 className={s.reviews}>Unfortunately, this movie does not have a review</h2>)
    }
  return (
    <div>
      <ul className={s.list} >
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
