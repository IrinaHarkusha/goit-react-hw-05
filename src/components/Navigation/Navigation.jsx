import s from "./Navigation.module.css"
import clsx from "clsx"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  const activeLink = ({ isActive }) => {
    return clsx('link', isActive && "active")
  }

  return (
      <header className={s.navbar}>
        <ul className={s.list}>
          <li className={s.item}>
            <NavLink className={activeLink} to='/' >Home</NavLink>
          </li>
          <li className={s.item}>
            <NavLink className={activeLink} to='/movies'>Movies</NavLink>
          </li>

        </ul>
      </header>
  )
}

export default Navbar
