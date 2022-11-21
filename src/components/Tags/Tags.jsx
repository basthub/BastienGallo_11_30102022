import styles from '../Tags/tags.module.scss'

const Tags = (props) => {
  return <li className={styles.tag}>{props.content}</li>
}

export default Tags
