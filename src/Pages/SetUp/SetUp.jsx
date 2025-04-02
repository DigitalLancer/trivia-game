import React from 'react'
import { useState } from 'react'
import ModeCard from '../../Components/ModeCard/ModeCard'
import Category from '../../Components/Category/Category'
import DifficultyCard from '../../Components/DifficultyCard/DifficultyCard'
import { useNavigate } from 'react-router-dom';

import './setUp.css'
function SetUp() {
  const navigate = useNavigate();
  const [url,setUrl]=useState(null);

  const changeToStepOne = () => {
    const categoryPage = document.getElementById("category");
    const modePage = document.getElementById("mode")
    categoryPage.classList.add("active-tab")
    modePage.classList.remove("active-tab");
  }
  const changeToStepTwo = () => {
    const categoryPage = document.getElementById("category");
    const modePage = document.getElementById("mode")
    categoryPage.classList.remove("active-tab")
    modePage.classList.add("active-tab");
  }


  const [difficulty, setDifficulty] = useState(null);
  const [pace, setPace] = useState(null)
  const [category, setCategory] = useState(null);

  const selectDifficulty = (id) => {
    setDifficulty(id);
    const buttons = document.getElementsByClassName("difficulty-btn");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('active');
    }
    const activeButton = document.getElementById(id);
    if (activeButton) {
      activeButton.classList.add('active');
    }
  }

  const selectPace = (id) => {
    setPace(id);
    const buttons = document.getElementsByClassName("speed-btn");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('active');
    }
    const activeButton = document.getElementById(id);
    if (activeButton) {
      activeButton.classList.add('active');
    }
  }


  const selectCategory = (id) => {
    setCategory(id);
    const buttons = document.getElementsByClassName("setup-btn");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('active');
    }
    const activeButton = document.getElementById(id);
    if (activeButton) {
      activeButton.classList.add('active');
    }
  }

  const handleSubmit=()=>{
    if(pace && category && difficulty){
      navigate(`/questions?amount=${pace}&category=${category}&difficulty=${difficulty}`);
    }
    else {
      alert("Please select all the options");
    }

  }

  const constructURL = () => {
    if(difficulty && category && pace){

    }
    console.log("Difficulty:", difficulty)
    console.log("Category:", category)
    console.log("Pace:", pace)
  }

  return (
    <div className="setup">
      <div className="setup-container">

        <div className="setup-tab active-tab" id="category">
          <h1 className='categories setup-title'>Select a Category</h1>
          <div className='categories-grid'>
            <button className='setup-btn' id='9' onClick={() => selectCategory('9')}>
              <Category type="Mixed" imgFile='general.png' />
            </button>
            <button className='setup-btn' id='23' onClick={() => selectCategory('23')}>
              <Category type="History" imgFile='history_icon.png' />
            </button>
            <button className="setup-btn" id='21' onClick={() => selectCategory('21')}>
              <Category type="Sports" imgFile='sports.png' />
            </button>
            <button className="setup-btn" id='27' onClick={() => selectCategory('27')}>
              <Category type="Animals" imgFile='animals.png' />
            </button>
            <button className="setup-btn" id='17' onClick={() => selectCategory('17')}>
              <Category type="Science" imgFile='science.png' />
            </button>
            <button className="setup-btn" id='11' onClick={() => selectCategory('11')}>
              <Category type="Movies" imgFile='movies.png' />
            </button>
            <button className="setup-btn" id='10' onClick={() => selectCategory('10')}>
              <Category type="Books" imgFile='books.png' />
            </button>
            <button className="setup-btn" id='12' onClick={() => selectCategory('12')}>
              <Category type="Music" imgFile='music.png' />
            </button>
          </div>
          <div className='btn-left-container'>
            <button className='submit-btn' onClick={() => changeToStepTwo()}>Next</button>
          </div>
        </div>


        <div className='setup-tab' id="mode">
          <div className="mode">
            <button type='submit' className='submit-btn' onClick={() => changeToStepOne()}>Back</button>
            <div id="difficulty">
              <h1 className='setup-title'>Select difficulty</h1>
              <div className="difficulty-grid">
                <button className='difficulty-btn' id='easy' onClick={() => selectDifficulty('easy')}><DifficultyCard difficulty='Easy' /></button>
                <button className='difficulty-btn' id='medium' onClick={() => selectDifficulty('medium')}><DifficultyCard difficulty='Medium' /></button>
                <button className='difficulty-btn' id='hard' onClick={() => selectDifficulty('hard')}><DifficultyCard difficulty='Hard' /></button>
              </div>
            </div>
            <div id="speed">
              <h1 className="setup-title">Game Pace </h1>
              <div className='difficulty-grid'>
                <button className='speed-btn' id='5' onClick={() => selectPace('5')}><ModeCard pace="Quick" /></button>
                <button className='speed-btn' id='8' onClick={() => selectPace('8')}><ModeCard pace="Standard" /></button>
                <button className='speed-btn' id='15' onClick={() => selectPace('15')}><ModeCard pace="Long" /></button>
              </div>
            </div>
            <div className="btn-left-container">
              <button type='submit' className='submit-btn' onClick={() => handleSubmit()}>Confirm</button>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default SetUp
