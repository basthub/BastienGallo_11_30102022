import logoWhite from '../../assets/logo_white.png'
import classes from './footer.module.scss'

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <img src={logoWhite} alt="logo kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
