import logo from '../../assets/logo.png'
import { NavLink, Link } from 'react-router-dom'
import classes from './header.module.scss'

const Header = () => {
  return (
    <header className={classes.header}>
      <Link to="/">
        <img src={logo} className="header-logo" alt="logo kasa" />
      </Link>
      <nav>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : '')}
              to="/"
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : '')}
              to="/about"
            >
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Header
