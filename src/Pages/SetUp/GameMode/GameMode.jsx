import React, { useState } from 'react'
import './gameMode.css'
import ModeCard from '../../../Components/ModeCard/ModeCard'
import DifficultyCard from '../../../Components/DifficultyCard/DifficultyCard'
function GameMode(props) {
    const [difficulty, setDifficulty] = useState(null);
    const [pace, setPace]=useState(null)
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


    return (
        <div className='container-setup'>
            <div className="setup-wrapper">
                <button type='submit' className='submit-btn' onClick={props.setStepOne}>Back</button>
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
                    <button type='submit' className='submit-btn' onClick={()=>props.handleMode(difficulty,pace)}>Confirm</button>
                </div>

            </div>
        </div>
    )
}

export default GameMode
