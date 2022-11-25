import { useEffect, useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import Carousel from '../../components/Carousel/Carousel'
import Dropdown from '../../components/DropDown/Dropdown'
import Tags from '../../components/Tags/Tags'
import styles from './accomodation.module.scss'

const Accomodation = () => {
  const { accomodationId } = useParams()
  const [accomodation, setAccomodation] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    setIsLoading(true)
    fetch('/logements.json')
      .then((res) => res.json())
      .then((accomodationData) => {
        const matchingAccomodationId = accomodationData.find(
          (accomodation) => accomodation.id === accomodationId
        )
        matchingAccomodationId
          ? setAccomodation(matchingAccomodationId)
          : setError(<Navigate to="/404/" />)
      })

      .catch((err) => setError(true))
      .finally(() => setIsLoading(false))
  }, [accomodationId])

  return (
    <main className={styles.accomodation}>
      {isLoading ? (
        <p>Chargement...</p>
      ) : accomodation ? (
        <section>
          <Carousel pictures={accomodation.pictures} />
          <div className={styles.mainDetails}>
            <div>
              <div className={styles['mainDetails_title']}>
                <h1>{accomodation.title}</h1>
                <h2>{accomodation.location}</h2>
              </div>
              <ul className={styles['mainDetails_tags']}>
                {accomodation.tags &&
                  accomodation.tags.map((tag) => (
                    <Tags content={tag} key={tag} />
                  ))}
              </ul>
            </div>
            <div className={styles['mainDetails_social']}>
              <div className={styles['mainDetails_host']}>
                <p>{accomodation.host.name}</p>
                <img
                  src={accomodation.host.picture}
                  alt={accomodation.host.name}
                />
              </div>

              <div className={styles['mainDetails_rating']}>
                {[...Array(5)].map((star, index) =>
                  parseInt(accomodation.rating) >= index + 1 ? (
                    <img src="/starFull.svg" alt="star" key={index} />
                  ) : (
                    <img src="/starEmpty.svg" alt="empty star" key={index} />
                  )
                )}
              </div>
            </div>
          </div>
          <div className={styles.subDetails}>
            <Dropdown
              title="Description"
              content={<p>{accomodation.description}</p>}
            />
            <Dropdown
              title="Equipements"
              content={
                <ul>
                  {accomodation.equipments.map((equipment) => (
                    <li key={equipment}>{equipment}</li>
                  ))}
                </ul>
              }
            />
          </div>
        </section>
      ) : (
        <div>{error}</div>
      )}
    </main>
  )
}

export default Accomodation
