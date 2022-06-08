
import React, {useState, useEffect} from "react";
import './gameComponent.css';
import axios from "axios";
import { curCategory } from "./mainHomeComponent";
import { SERVER_BASE_URL } from "../Configuration/serverConfig";

var answerIndex1 = 0;
var answerIndex2 = 0;

function generateRandom(min = 0, max = 100) {
    return Math.floor(
        Math.random() * (max - min) + min
    );
}

const Game = (props) => {

    const [listQuestions, setlistOfQuestions] = useState([]);

    useEffect(() => {
        axios.get(`${SERVER_BASE_URL}questions?theme=${curCategory}`).then(
            (response)=>{
                let numOfQ = 4;
                const selectedIDs = [];
                const theSelectedQuestions = []
                while(numOfQ > 0) {
                    let random = generateRandom(0,response.data['result'].length);
                    if(!selectedIDs.includes(response.data['result'][random]['question_info']['question_ID'])){
                        theSelectedQuestions.push(response.data['result'][random]);
                        selectedIDs.push(response.data['result'][random]['question_info']['question_ID']);
                        numOfQ--;
                    }
                }
                setlistOfQuestions(theSelectedQuestions);
        }).then(
                (err)=>console.log(err));
    }, []);

    return (
            <div id='game-page-container' class='game-page-container'>
                {
                    listQuestions.map((question)=>(
                        <fieldset id={question['question_info']['question_ID']} class='question-panel'>
                            <legend class='text'>{question['question_info']['question']}</legend>
                            <div class='answers-container'>
                            {
                                question['all_answers'].map((answer)=>(
                                    <div>
                                        <input type='radio' id={++answerIndex1} name={answer['question_ID']} value={answer['answer']} class='radio-button'></input>
                                        <label for={++answerIndex2} class='question'>{answer['answer']}</label>
                                    </div>
                                ))
                            }
                            </div>
                        </fieldset>
                    ))
                }
                <button id='submit' class="button-19" onClick={props.onClickForsubmit}>Submit</button>
            </div>
    );
}

export default Game;