import React from "react";
import './loginComponent.css';
import { SERVER_BASE_URL } from "../Configuration/serverConfig";

export async function onclickSignIn(){
    let user_name=document.querySelector('#login-uname').value;
    let user_password=document.querySelector('#login-upassword').value;

    const response = await fetch(`${SERVER_BASE_URL}sign-in`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "user_name": user_name,
            "password": user_password,
        })
    });

    return response;
}


const Login = (props) => {
    return (
        <div id='login-box-container'>
            <div id='login-box'>
                <div id='login-username'>
                    <label class='login-text' id='login-uname-type' for='uname'>User Name: </label>
                    <input class='login-inputext' type='text' id='login-uname' name='uname'></input><br></br>
                </div>
                <div id='login-user-password'>
                    <label class='login-text' id='login-upassword-type' for='upassword'>Password: </label>
                    <input class='login-inputext' type='password' id='login-upassword' name='upassword'></input><br></br>
                </div>
                <button id='login-signin' class="button-19" onClick={props.onClickForSignin}>Sign In</button>
                <button id='login-signup' class="button-19" onClick={props.onClickForSignup}>Sign Up</button>
            </div>
            <div id='login-p-text'>
                <p class='p-text'>
                    Want to test your own trivia knowledge or host the next family game night? Of course you do, what else are you going to do in quarantine?
                </p>
            </div>
        </div>
    );
}


export default Login;