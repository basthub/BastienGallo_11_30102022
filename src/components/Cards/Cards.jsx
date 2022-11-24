import styles from './cards.module.scss'
import { Link } from 'react-router-dom'

const Cards = ({ id, title, cover }) => {
  return (
    <li key={id}>
      <figure className={styles.card}>
        <Link to={`/accomodation/${id}`}>
          <img src={cover} alt={title} />
          <figcaption className={styles['card_title']}>
            <h2>{title}</h2>
          </figcaption>
        </Link>
      </figure>
    </li>
  )
}

export default Cards
