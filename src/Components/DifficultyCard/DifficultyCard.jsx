import React from 'react'
import './difficulty.css'
function DifficultyCard(props) {
  return (
    <div className={`difficulty-card`}>
      <h1>{props.difficulty}</h1>
    </div>
  )
}

export default DifficultyCard
