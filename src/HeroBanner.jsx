import { useState, useEffect } from 'react'
import './HeroBanner.css'

function HeroBanner({ movies }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      // first fade out
      setFade(false)

      // then after fade out completes, switch movie and fade back in
      setTimeout(() => {
        setCurrentIndex(prev => (prev + 1) % movies.length)
        setFade(true)
      }, 1000)

    }, 6000) // changes every 6 seconds

    return () => clearInterval(interval) // cleanup on unmount
  }, [movies])

  const movie = movies[currentIndex]

  return (
    <div
      className={`hero ${fade ? 'hero--visible' : 'hero--hidden'}`}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
      }}
    >
      <div className="hero__overlay" />
      <div className="hero__content">
        <h1 className="hero__title">{movie.title}</h1>
        <p className="hero__description">{movie.overview}</p>
        <div className="hero__buttons">
          <button className="hero__btn hero__btn--play">▶ Play</button>
          <button className="hero__btn hero__btn--info">ℹ More Info</button>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner