import React, {useState, useEffect} from "react";
import './homePageComponent.css';
import axios from "axios";
import { SERVER_BASE_URL } from "../Configuration/serverConfig";

export async function onclickStartGame(){
    return null
}

const HomePage = (props) => {

    const [categoriesForPlay, setcategoriesForPlay] = useState([]);
    const [curCategoriesForPlay, setcurCategoriesForPlay] = useState();

    const selectedCategory = (e) => setcurCategoriesForPlay(e.target.value);

    useEffect(() => {
        axios.get(`${SERVER_BASE_URL}get-caterories`).then(
            (response)=>
            setcategoriesForPlay(response.data['result'].map((theme)=>theme['theme']))).then(
                (err)=>console.log(err));
    }, []);

    return (
        <div class='home-page-container'>
            <div>
                <h1 class='home-page-h'>Hello 👋</h1>
                <h2 id='Rtp'>Ready to play?</h2>
            </div>
            <div id='home-page-container' class='home-page-container'>
                <h1 class='home-page-h' id='Such'>Select your category here</h1>
                <div class='category-box'>
                    <label id='emojiHends1' for="categories">👉</label>
                    <select name="categories" id="categories" value={curCategoriesForPlay} onChange={selectedCategory}>
                        <option value="">--Select Your Category--</option>
                        {
                            categoriesForPlay.map((category) =>(
                                <option value={category}>{category}</option>
                                ))
                        }
                    </select>
                    <label id='emojiHends2' for="categories">👈</label>
                </div>
                <div id='start-play-panel'>
                    <button class='button-19' id='start-play' onClick={props.onClickForstartPlay}>Start Play</button>
                </div>
            </div>
        </div>
    );
}

export default HomePage;