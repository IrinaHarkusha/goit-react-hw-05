import s from './MovieCast.module.css'
import { useState, useEffect } from "react"
import { fetchMoviesCast } from '../../services/api'
import {useParams} from 'react-router-dom'



const MovieCast = () => {
  const { movieId } = useParams()
  const [listCast, setListCast] = useState([])

  useEffect(() => {
    async function getMoviesSearch() {
      const data = await fetchMoviesCast(movieId)
      setListCast(data.cast)
    }
    getMoviesSearch()
  }, [movieId]
  )


  return (
    <div>
      <ul className={s.list}>
        {listCast.map(e => {
          return (<li className={s.item} key={e.id}>
            <img className={s.img} src={`https://image.tmdb.org/t/p/w500${e.profile_path}`} alt="" />
                  <h3>{e.name}</h3>
                  <p>{e.character}</p>
          </li>)
        })}
      </ul>
      
    </div>
  )
}

export default MovieCast
