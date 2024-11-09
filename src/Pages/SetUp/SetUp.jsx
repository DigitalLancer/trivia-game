import React from 'react'
import Categories from './Categories/Categories'
import { useState } from 'react'
import GameMode from './GameMode/GameMode'
import './setUp.css'
function SetUp() {
  const [category, setCategory] = useState(null)
  const [stepOne, setStepOne] = useState(true);

  const [difficulty, setDifficulty] = useState(null)
  const [pace, setPace] = useState(null)

  const categoryPage = document.getElementById("category-tab");
  const modePage = document.getElementById("mode-tab")

  const handleCategory = (type) => {
    setCategory(type);
  }
  const handleMode=(difficulty,pace)=>{
    setDifficulty(difficulty);
    setPace(pace);
    displayParameters();
  }
  /*const handleDifficulty = (type) => {
    setDifficulty(type);
  }
  const handlePace = (type) => {
    setPace(type);
  }*/

  const displayParameters = () => {
    console.log("Category id:", category);
    console.log("Difficulty:", difficulty);
    console.log("Speed:", pace);
  }

  const changeToStepOne = () => {
    setStepOne(true);
    categoryPage.classList.add("active-tab")
    modePage.classList.remove("active-tab");
  }
  const changeToStepTwo = () => {
    setStepOne(false);
    categoryPage.classList.remove("active-tab")
    modePage.classList.add("active-tab");
  }

  return (
    <div className="setup">
      <div id='category-tab' className='setup-tab active-tab'>
        <Categories handleClick={handleCategory} setStepOne={changeToStepTwo} />
      </div>
      <div id="mode-tab" className='setup-tab'>
        <GameMode setStepOne={changeToStepOne} handleMode={handleMode} category={category}/>
      </div>
    </div>

  )
}

export default SetUp
