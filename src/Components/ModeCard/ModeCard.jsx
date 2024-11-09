import React from 'react'
import './modeCard.css'
function ModeCard(props) {
  return (
    <div className='mode-card'>
      <h1>{props.pace}</h1>
    </div>
  )
}

export default ModeCard
