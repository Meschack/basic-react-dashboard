import React from 'react'
import '../../styles/Poll.css'
import '../../styles/Dashboard.css'

export const Poll = ({ elements }) => {
  let index = 0
  return (
    <div className="poll">
      <h2>Poll</h2>
      <ul className="content">
        {elements.map((element) => {
          const { title, progressLevel, color } = element
          return (
            <li key={index++}>
              <h3>{title}</h3>
              <div className="progress-wrapper">
                <div className="progress-bar">
                  <span
                    className="progress"
                    style={{
                      backgroundColor: color,
                      width: progressLevel + '%',
                    }}
                  ></span>
                </div>
                <span style={{ color: color }}>{progressLevel}</span>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
