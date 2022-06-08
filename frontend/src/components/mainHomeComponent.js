import React, { useState } from "react";
import HomePage from "./homePageComponent";
import Game from "./gameComponent";
import { SERVER_BASE_URL } from "../Configuration/serverConfig";

export var curCategory = null;

async function getAllquestions(questionsID) {
    const response = await fetch(`${SERVER_BASE_URL}questions?theme=${curCategory}`);
    const resJson = await response.json();
    const totalRespons = [];
    for(let element of resJson['result']) {
        if(questionsID.includes(element['question_info']['question_ID'].toString())){
            for(let answer of element['all_answers']){
                if(answer['isCorrect'] === true){
                    totalRespons.push({ 
                        questionsID: element['question_info']['question_ID'], 
                        answer: answer['answer'] 
                    });
                }
            }
        }
    }
    return totalRespons;
}

function MainHomeComponent(){

    const [clickedStartPlay, setClickedStartPlay] = useState(false);


    const startPlayHandler = () => {
        curCategory = document.querySelector('#categories').value;
        if(curCategory === null || curCategory === "") {
            alert("Select A Category");
        } else {
            setClickedStartPlay(true);
        }
    }

    const submitHandler = async () => {
        let correctAnswerCount = 0;
        const questionsID = [];
        const allQuestionPanel = document.getElementsByClassName('question-panel');
        for(let i=0; i < allQuestionPanel.length; i++) { questionsID.push(allQuestionPanel[i].id); }
        const allquestion = await getAllquestions(questionsID);
        //console.log(allquestion);
        for(let element of allquestion) {
            const curAnswer = document.getElementsByName(element.questionsID);
            for(let answer of curAnswer) {
                if((answer.checked) && (element.answer === answer.value)) { correctAnswerCount++; }
            }
        }
        alert(`You Answered ${correctAnswerCount} out of 4 Correctly`);
        setClickedStartPlay(false);
    }

    return (
        <div>
            {!clickedStartPlay && (<HomePage onClickForstartPlay={startPlayHandler}/>)}
            {clickedStartPlay && (<Game onClickForsubmit={submitHandler}/>)}
        </div>
    );
}


export default MainHomeComponent;