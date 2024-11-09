import React, { useState }  from 'react'
import './categories.css'
import Category from '../../../Components/Category/Category'
function Categories(props) {
  const [active,setActive]=useState(props.activeCategory);
  const toggleActive=(id)=>{
    setActive(id);

    const buttons=document.getElementsByClassName("setup-btn");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('active');
    }

    const activeButton = document.getElementById(id);
    if (activeButton) {
      activeButton.classList.add('active');
    }

    props.handleClick(id);
  }

  return (
    <div className="container-setup">
      <h1 className='setup-title'>Select a Category</h1>
      <div className='categories'>
        <button className='setup-btn' id='9' onClick={() => toggleActive('9')}>
          <Category type="Mixed" imgFile='general.png' />
        </button>
        <button className='setup-btn' id='23' onClick={() => toggleActive('23')}>
          <Category type="History" imgFile='history_icon.png' />
        </button>
        <button className="setup-btn" id='21' onClick={() => toggleActive('21')}>
          <Category type="Sports" imgFile='sports.png' />
        </button>
        <button className="setup-btn" id='27' onClick={() => toggleActive('27')}>
          <Category type="Animals" imgFile='animals.png' />
        </button>
        <button className="setup-btn" id='25' onClick={() => toggleActive('25')}>
          <Category type="Art" imgFile='art.png' />
        </button>
        <button className="setup-btn" id='11' onClick={() => toggleActive('11')}>
          <Category type="Movies" imgFile='movies.png' />
        </button>
        <button className="setup-btn" id='10' onClick={() => toggleActive('10')}>
          <Category type="Books" imgFile='books.png' />
        </button>
        <button className="setup-btn" id='12' onClick={() => toggleActive('12')}>
          <Category type="Music" imgFile='music.png' />
        </button>
      </div>
      <div className='btn-left-container'>
        <button className='submit-btn' onClick={props.setStepOne}>Next</button>
      </div>
    </div>

  )
}

export default Categories
