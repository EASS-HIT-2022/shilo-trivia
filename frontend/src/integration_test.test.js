import { render, screen } from '@testing-library/react';
import Login from './components/loginComponent';
import Sginup from './components/sginupComponent';
import MainHomeComponent from './components/mainHomeComponent';
import Game from './components/gameComponent';


function capFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomInt(min, max) {
  	return Math.floor(Math.random() * (max - min)) + min;
}

function generateName(){
	var first_name = ["asgfhyj","thbgb","bffgbg","lkjvbd", "ngf", "nmsnms"];
	var last_name = ["adsyjkkfa","fgbgb","gfbgbf",";lknfd","fnsb", "sfssa", "sdbasa"];
	var name = capFirst(first_name[getRandomInt(0, first_name.length + 1)]) + ' ' + capFirst(last_name[getRandomInt(0, last_name.length + 1)]);
    return name;
}

test('ETE testing signup', () => {
    render(<Login />);
    try {
        const sginupButton_Login_page = document.getElementById('login-signup');
        sginupButton_Login_page.click();
    } catch(error) {
        console.log("Can't Click on Signup Button \n >>>error: ", error);
    }

    render(<Sginup />);
    const UnameFiled = document.getElementById('uname');
    const PassFiled = document.getElementById('upassword');
    const EmailFiled = document.getElementById('uemail');
    const FNameFiled = document.getElementById('ufirstname');
    const LNameFiled = document.getElementById('ulastname');
    const signupButton = document.getElementById('signup');
    const name = generateName().split(' ');
    try {
        UnameFiled.innerText = name[0];
        PassFiled.innerText = '1234';
        EmailFiled.innerText = `${name[0]}.${name[1]}@gmail.com`;
        FNameFiled.innerText = name[0];
        LNameFiled.innerText = name[1];
        signupButton.click;
    } catch(error) {
        console.log("Can't Set Value For One Of The Filed \n >>>error: ", error);
    }
    try {
        signupButton.click;
    } catch(error) {
        console.log("Can't Click on Signup Button \n >>>error: ", error);
    }

    render(<Login />);
    const UnameFiled_signin = document.getElementById('login-uname');
    const PassFiled_signin = document.getElementById('login-upassword');
    try {
        UnameFiled_signin.innerText = name[0];
        PassFiled_signin.innerText = '1234';
    } catch(error) {
        console.log("Can't Set Value For One Of The Filed \n >>>error: ", error);
    }
    try {
        const sgininButton_Login_page = document.getElementById('login-signin');
        sgininButton_Login_page.click();
    } catch(error) {
        console.log("Can't Click on Signup Button \n >>>error: ", error);
    }

    render(<MainHomeComponent />);
    const selectListTitel = screen.getByText('Select your category here');
    expect(selectListTitel).toBeInTheDocument();
  });