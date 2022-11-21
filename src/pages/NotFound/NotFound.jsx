import { Link } from 'react-router-dom'
import styles from './notFound.module.scss'

const NotFound = () => {
  return (
    <main className={styles.notFound}>
      <p className="title">404</p>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d’accueil</Link>
    </main>
  )
}

export default NotFound
