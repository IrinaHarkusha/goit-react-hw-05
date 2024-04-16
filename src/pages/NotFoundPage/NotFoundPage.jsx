import { Link } from "react-router-dom"
import s from './NotFoundPage.module.css'

const NotFoundPage = () => {
  return (
    <div className={s.not_found}>
      <h1>Oops...page not found, try again</h1>
      <Link to='/'>Go to home</Link>
      </div>
    
  )
}

export default NotFoundPage
