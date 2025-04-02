import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './landing.css'
function Landing() {
  return (
    <div className='container'>
      <div className="landing">
        <h1 className='title'>QUIZ QUEST</h1>
        <Link to="/setup"><button className='start-btn'>Play</button></Link>
      </div>
    </div>
  )
}

export default Landing
