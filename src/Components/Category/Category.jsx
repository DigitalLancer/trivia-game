import React from 'react'
import './category.css'

//import historyIcon from `../../images/${history_icon.png}`
function Category(props) {
  return (
    <div className='category-btn'>
      <div className="btn-container">
        <img src={`images/${props.imgFile}`} alt="" className='btn-icon' />
        <p className='category-title'>{props.type}</p>
      </div>
    </div>
  )
}

export default Category
