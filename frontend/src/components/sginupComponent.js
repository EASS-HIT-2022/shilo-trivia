import React from "react";
import './sginupComponent.css';
import { SERVER_BASE_URL } from "../Configuration/serverConfig";

//triviasite 
 export async function onclickSginUp() {
    let user_name=document.querySelector('#uname').value;
    let user_email=document.querySelector('#uemail').value;
    let user_first_name=document.querySelector('#ufirstname').value;
    let user_middel_name=document.querySelector('#umiddelname').value;
    let user_last_name=document.querySelector('#ulastname').value;
    let user_password=document.querySelector('#upassword').value;

    const response = await fetch(`${SERVER_BASE_URL}sign-up`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
                "user_name": user_name,
                "email": user_email,
                "first_name": user_first_name,
                "middel_name": user_middel_name,
                "last_name": user_last_name,
                "password": user_password
        })
      });
    return response;
}

function Sginup(props){
    return (
        <div id='sginup-box-container'>
            <div id='sginup-box'>
                <div class='filed' id='username'>
                    <label class='text' id='uname-type' for='uname'>User Name: </label>
                    <input class='inputext' type='text' id='uname' name='uname'></input><br></br>
                </div>
                <div class='filed' id='user-email'>
                    <label class='text' id='uemail-type' for='uemail'>Email: </label>
                    <input class='inputext' type='email' id='uemail' name='uemail'></input><br></br>
                </div>
                <div class='filed' id='user-first-name'>
                    <label class='text' id='ufirstname-type' for='ufirstname'>First Name: </label>
                    <input class='inputext' type='text' id='ufirstname' name='ufirstname'></input><br></br>
                </div>
                <div class='filed' id='user-middel-name'>
                    <label class='text' id='umiddelname-type' for='umiddelname'>Middel Name: </label>
                    <input class='inputext' type='text' id='umiddelname' name='umiddelname'></input><br></br>
                </div>
                <div class='filed' id='user-last-name'>
                    <label class='text' id='ulastname-type' for='ulastname'>Last Name: </label>
                    <input class='inputext' type='text' id='ulastname' name='ulastname'></input><br></br>
                </div>
                <div class='filed' id='user-password'>
                    <label class='text' id='upassword-type' for='upassword'>Password: </label>
                    <input class='inputext' type='password' id='upassword' name='upassword'></input><br></br>
                </div>
                <button id='signup' class="button-19" onClick={props.onSubmitForSignup}>Sing Up</button>
            </div>
        </div>
    );
}


export default Sginup;