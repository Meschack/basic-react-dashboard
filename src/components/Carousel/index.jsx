import React from 'react'
import { useEffect, useState } from 'react'
import '../../styles/Carousel.css'

const sliders = [
  {
    content: (
      <React.Fragment>
        <h2>Slide 1</h2>
        <p>
          Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
          inventore.
        </p>
      </React.Fragment>
    ),
  },

  {
    content: (
      <React.Fragment>
        <h2>Slide 2</h2>
        <p>
          Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
          inventore.
        </p>
      </React.Fragment>
    ),
  },

  {
    content: (
      <React.Fragment>
        <h2>Slide 3</h2>
        <p>
          Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
          inventore.
        </p>
      </React.Fragment>
    ),
  },
]
export const Carousel = () => {
  const [sliderActive, setSliderActive] = useState(0)

  let interval

  useEffect(() => {
    interval = setInterval(() => {
      setSliderActive((prevSliderActive) =>
        prevSliderActive === sliders.length - 1 ? 0 : prevSliderActive + 1
      )
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleClick = (index) => {
    clearInterval(interval)
    setSliderActive(() => {
      return index
    })
  }

  return (
    <div className="carousel-container">
      <div className="sliders">
        {sliders.map(({ content }, index) => {
          return (
            index === sliderActive && (
              <div className="slide" key={index.toString}>
                {content}
              </div>
            )
          )
        })}
      </div>

      <div className="actions">
        {['1', '2', '3'].map((number, index) => (
          <div
            key={number}
            className={`dot${index === sliderActive ? ' active' : ''}`}
            onClick={() => handleClick(index)}
          ></div>
        ))}
      </div>
    </div>
  )
}
