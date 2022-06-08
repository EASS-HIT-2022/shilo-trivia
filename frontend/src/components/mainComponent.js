import React, { useState } from "react";
import Login from "./loginComponent";
import Sginup from "./sginupComponent";
import MainHomeComponent from "./mainHomeComponent";
import { onclickSginUp } from './sginupComponent'
import { onclickSignIn } from './loginComponent'



function MiddelWare(){

    const [clickedSignup, setClickedSignup] = useState(false);
    const [clickedSignin, setClickedSignin] = useState(false);

    const signupHandler = () => {
        setClickedSignup(true);
    }

    const signinHandler = async () => {
        const res = await onclickSignIn();
        if(!((res.status === 200) && (await res.json()).user_name)){
            alert("Invalid Username or Password");
            setClickedSignin(false);
        } else {
            setClickedSignin(true);
        }
    }

    const sendSignupHandler = async () => {
        const res = await onclickSginUp();
        if(res.status !== 201) {
            alert("Can't Create a New User");
            setClickedSignup(true);
        } else {
            setClickedSignup(false);
            alert("New User Created");
        }
    }

    return (
        <div>
            {(!clickedSignup && !clickedSignin) && (<Login onClickForSignup={signupHandler} onClickForSignin={signinHandler}/>)}
            {clickedSignup && (<Sginup onSubmitForSignup={sendSignupHandler}/>)}
            {clickedSignin && (<MainHomeComponent/>)}
        </div>
    );
}


export default MiddelWare;