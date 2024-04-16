import { Link, useLocation } from 'react-router-dom'
import s from './MovieList.module.css'

const MovieList = ({ movies }) => {
    const location = useLocation()

  return (
      <div>
          <ol className={s.wrap}>
              {movies?.map(film => (
                  <li className={s.list} key={film.id} >
                      <Link className={s.active_link} to={`/movies/${film.id.toString()}`} state={{ from: location }}>
							{film.original_title}
                      </Link>
                  </li>
              ))}
          </ol>
      
    </div>
  )
}
export default MovieList
