import classes from './hero.module.scss'

function Hero({ text, img }) {
  return (
    <div className={classes.hero} style={{ backgroundImage: `url(${img})` }}>
      {text.length > 0 && <h1>{text}</h1>}
    </div>
  )
}

export default Hero
