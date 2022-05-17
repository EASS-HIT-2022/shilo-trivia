import React from "react";
import './loginComponent.css';

function onclickSignIn(){
    let uValueInput=document.querySelector('#uname').value;
    let pValueInput=document.querySelector('#upassword').value;

    console.log(uValueInput);
    console.log(pValueInput);
}

function Login(props){
    return (
        <div id='login-box-container'>
            <div id='login-box'>
                <div id='username'>
                    <label class='text' id='uname-type' for='uname'>User Name: </label>
                    <input class='inputext' type='text' id='uname' name='uname'></input><br></br>
                </div>
                <div id='user-password'>
                    <label class='text' id='upassword-type' for='upassword'>Password: </label>
                    <input class='inputext' type='password' id='upassword' name='upassword'></input><br></br>
                </div>
                <button id='signin' class="button-19" onClick={onclickSignIn}>Sign In</button>
                <button id='signup' class="button-19" onClick={onclickSignIn}>Sing Up</button>
            </div>
        </div>
    );
}


export default Login;