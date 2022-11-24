import { useState } from 'react'
import styles from './carousel.module.scss'

const Carousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleBtnNextPictures = () => {
    currentIndex < pictures.length - 1
      ? setCurrentIndex(currentIndex + 1)
      : setCurrentIndex(0)
  }
  const handleBtnPreviousPictures = () => {
    currentIndex === 0
      ? setCurrentIndex(pictures.length - 1)
      : setCurrentIndex(currentIndex - 1)
  }
  const handleKeyboard = (event) => {
    event.key === 'ArrowLeft' && handleBtnPreviousPictures()
    event.key === 'ArrowRight' && handleBtnNextPictures()
  }

  return (
    <div
      className={styles.carousel}
      role="listbox"
      aria-label="galerie d'images"
    >
      <div
        tabIndex={0}
        onKeyUp={handleKeyboard}
        role="option"
        aria-selected="true"
        style={{ backgroundImage: `url(${pictures[currentIndex]})` }}
      >
        {pictures.length > 1 && (
          <>
            <div className={styles.arrows}>
              <img
                src="/arrowLeft.svg"
                alt="précédent"
                onClick={handleBtnPreviousPictures}
              />
              <img
                src="/arrowRight.svg"
                alt="suivant"
                onClick={handleBtnNextPictures}
              />
            </div>
            <p>{`${currentIndex + 1}/${pictures.length}`}</p>
          </>
        )}
      </div>
    </div>
  )
}

export default Carousel
