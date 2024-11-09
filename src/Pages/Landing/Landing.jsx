import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './landing.css'
function Landing() {
  return (
    <div className='container'>
      <div className="landing">
        <h1 className='title'>TRIVIA NIGHT</h1>
        <Link to="/setup"><button className='start-btn'>START</button></Link>
      </div>
    </div>
  )
}

export default Landing
