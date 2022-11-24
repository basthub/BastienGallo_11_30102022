import { useState } from 'react'
import styles from './dropdown.module.scss'

const Dropdown = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => setIsOpen(!isOpen)
  const handleKeyboard = (event) => event.key === '' && handleToggle()

  return (
    <section className={styles.dropdown} tabIndex={0} onKeyUp={handleKeyboard}>
      <header onClick={handleToggle}>
        <h2>{title}</h2>
        <div>
          {isOpen ? (
            <img src="/arrowTop.svg" alt="fermer le menu déroulant" />
          ) : (
            <img src="/arrowDown.svg" alt="ouvrir le menu déroulant" />
          )}
        </div>
      </header>
      {isOpen && <div className={styles.describe}>{content}</div>}
    </section>
  )
}

export default Dropdown
