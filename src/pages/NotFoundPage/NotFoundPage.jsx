import s from './NotFoundPage.module.css'
import { Link } from "react-router-dom"


const NotFoundPage = () => {
  return (
    <div className={s.not_found}>
      <Link className={s.link} to='/'>Go to home</Link>
      <h1 className={s.title} >Oops...page not found, try again</h1>
      </div>
    
  )
}

export default NotFoundPage
