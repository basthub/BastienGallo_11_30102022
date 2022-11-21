import { useState, useEffect } from 'react'
import Hero from '../../components/Hero/Hero'
import Cards from '../../components/Cards/Cards'
import styles from './home.module.scss'
const Home = () => {
  const [accomodations, setAccomodations] = useState([])
  const [isLoading, setIsLoading] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    setIsLoading(true)
    fetch('/logements.json')
      .then((res) => res.json())
      .then((accomodationsData) => {
        setAccomodations(accomodationsData)
        setError('')
        setIsLoading(false)
      })
      .catch((err) => setError(`Erreur lors de la récupération des données`))
  }, [])

  return (
    <main className={styles.home}>
      <Hero text="Chez vous, partout et ailleurs" img="/landscape.png" />
      <section className={styles['accomodations-container']}>
        {!error.length ? (
          <ul className={styles['accomodations-list']}>
            {isLoading ? (
              <p>Chargement...</p>
            ) : (
              accomodations.map((accomodation) => (
                <Cards
                  title={accomodation.title}
                  id={accomodation.id}
                  cover={accomodation.cover}
                  key={accomodation.id}
                />
              ))
            )}
          </ul>
        ) : (
          <p>{error}</p>
        )}
      </section>
    </main>
  )
}

export default Home
