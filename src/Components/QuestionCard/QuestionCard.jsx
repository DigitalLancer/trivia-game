import React, { useState, useEffect } from 'react'
import './questionCard.css'
import { useNavigate } from 'react-router-dom';

function QuestionCard(props) {
    
    const data = props.data;

    const navigate = useNavigate();

    const [index, setIndex] = useState(0);
    const [isAnswered, setIsAnswered] = useState(false);
    const [shuffledAnswers, setShuffledAnswers] = useState([]);
    const [activeAnswerId, setActiveAnswerId] = useState(null);
    const [score,setScore]=useState(0);

    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {

            // Generate random index 
            const j = Math.floor(Math.random() * (i + 1));

            // Swap elements at indices i and j
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    };
    const checkAnwer = (e, answer, id) => {
        if (!isAnswered) {
            setActiveAnswerId(id);
            const element = document.getElementById(id);
            if (answer === data[index].correct_answer) {
                console.log("Correct!")
                element.classList.add("correct");
                setScore(score+1);
            }
            else {
                console.log("Wrong answer");
                element.classList.add("incorrect");
            }
            setIsAnswered(true);
        }
        else {
            console.log("You already answered");
        }
    }


    useEffect(() => {
        setIsAnswered(false);
        setShuffledAnswers(shuffle([props.data[index].correct_answer, ...props.data[index].incorrect_answers]));
        setActiveAnswerId(null);
        console.log("correct answer:", data[index].correct_answer);// Reset correct answer when moving to the next question
    }, [index]);


    const handleNext = () => {
        if (index+1 < props.amount) {
            const element = document.getElementById(activeAnswerId);
            element.classList.remove("correct");
            element.classList.remove("incorrect");
            setIndex(index + 1);
            
        }
        else{
            navigate(`/exit?score=${score}&amount=${props.amount}`) 
            //?amount=10&score=25
            //console.log(`You answered ${score} out of ${props.amount} correctly`);
        }
        console.log("index",index);
    }

    return (
        <>
            <div className="header">
                <p>Question {index + 1}/{props.amount}</p>
                <p className='timer'>25</p>
            </div>
            <div className="questions">
                <div className='question-card'>
                    <div className="question-text">
                        <p>{data[index].question.replaceAll(/&quot;/g, '"').replaceAll(/&#039;/g, "'")}</p>
                    </div>
                    <div className="answers">
                        <button className={`answer-button`} id="1" onClick={(e) => checkAnwer(e, shuffledAnswers[0], "1")}>{shuffledAnswers[0]}</button>
                        <button className='answer-button' id="2" onClick={(e) => checkAnwer(e, shuffledAnswers[1], "2")}>{shuffledAnswers[1]}</button>
                        <button className='answer-button' id="3" onClick={(e) => checkAnwer(e, shuffledAnswers[2], "3")}>{shuffledAnswers[2]}</button>
                        <button className='answer-button' id="4" onClick={(e) => checkAnwer(e, shuffledAnswers[3], "4")}>{shuffledAnswers[3]}</button>
                    </div>
                    <div className="btn-left-container">
                        <button className='next-btn' onClick={() => handleNext()}>Next</button>
                    </div>
                </div>
            </div>

        </>

    )
}

export default QuestionCard
