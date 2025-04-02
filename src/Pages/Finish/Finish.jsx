import React from 'react'
import './finish.css'
import Stars from '../../../public/images/Stars.png'
import OneStar from '../../../public/images/1Star.png'
import TwoStar from '../../../public/images/2Stars.png'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate, useSearchParams, useParams } from 'react-router-dom'; 

function Finish() {
    const  params  = useParams();
    //const value=params.score;
    const [searchParams, setSearchParams] = useSearchParams();

    const value = searchParams.get('score');
    const amount = searchParams.get('amount');
    const scoreRatio=value/amount;
    const navigate = useNavigate();
    return (
        <div className='container'>
            <div className="finish">
                {<h1>{scoreRatio==1 && 'Perfect!'}</h1>}
                {<h1>{scoreRatio>0.5&&scoreRatio<1 && 'God Job!'}</h1>}
                {<h1>{scoreRatio<0.5 && "Better Luck Next Time..."}</h1>}

                {scoreRatio==1 && <img src={Stars} className='stars-img' alt="" />}
                {scoreRatio>0.5 && scoreRatio<1 && <img src={TwoStar} className='stars-img' alt="" />}
                {scoreRatio<=0.5 && <img src={OneStar} className='stars-img' alt="" />}
                <div className="score-container">
                    <p>Your score</p>
                    <div className='progress-bar-container'>
                        <CircularProgressbar
                            value={value}
                            maxValue={amount}
                            text={`${value}/${amount}`}
                            styles={buildStyles({
                                textColor: "#252525",
                                pathColor: "green",
                                trailColor: "#dedede"
                            })}
                        />
                    </div>

                </div>
                <button className='replay-btn' onClick={()=>navigate('/')}>Play Again</button>
            </div>
        </div>
    )
}

export default Finish
