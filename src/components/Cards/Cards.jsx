import styles from './cards.module.scss'
import { Link } from 'react-router-dom'

const Cards = (props) => {
  return (
    <li key={props.id}>
      <figure className={styles.card}>
        <Link to={`/accomodation/${props.id}`}>
          <img src={props.cover} alt={props.title} />
          <figcaption className={styles['card_title']}>
            <h2>{props.title}</h2>
          </figcaption>
        </Link>
      </figure>
    </li>
  )
}

export default Cards
