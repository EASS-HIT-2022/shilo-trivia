import { render, screen } from '@testing-library/react';
import Login from './components/loginComponent';
import Sginup from './components/sginupComponent';
import MainHomeComponent from './components/mainHomeComponent';
import Game from './components/gameComponent';

test('renders Signin fildes', () => {
    render(<Login />);

    const UnameLabel = screen.getByText('User Name:');
    const UnameFiled = document.getElementById('login-uname');
    const PassLabel = screen.getByText('Password:');
    const PassFiled = document.getElementById('login-upassword');
    expect(UnameLabel).toBeInTheDocument();
    expect(PassLabel).toBeInTheDocument();
    expect(UnameFiled).toBeInTheDocument();
    expect(PassFiled).toBeInTheDocument();

    const signupButton = document.getElementById('login-signup');
    expect(signupButton).toBeEnabled();

    const signinButton = document.getElementById('login-signin');
    expect(signinButton).toBeEnabled();
  });


test('renders Signup fildes', () => {
    render(<Sginup />);

    const UnameLabel = screen.getByText('User Name:');
    const UnameFiled = document.getElementById('uname');
    const PassLabel = screen.getByText('Password:');
    const PassFiled = document.getElementById('upassword');
    const EmailLabel = screen.getByText('Email:');
    const EmailFiled = document.getElementById('uemail');
    const FNameLabel = screen.getByText('First Name:');
    const FNameFiled = document.getElementById('ufirstname');
    const MNameLabel = screen.getByText('Middel Name:');
    const MNameFiled = document.getElementById('umiddelname');
    const LNameLabel = screen.getByText('Last Name:');
    const LNameFiled = document.getElementById('ulastname');


    expect(UnameLabel).toBeInTheDocument();
    expect(PassLabel).toBeInTheDocument();
    expect(UnameFiled).toBeInTheDocument();
    expect(PassFiled).toBeInTheDocument();
    expect(EmailLabel).toBeInTheDocument();
    expect(EmailFiled).toBeInTheDocument();
    expect(FNameLabel).toBeInTheDocument();
    expect(FNameFiled).toBeInTheDocument();
    expect(MNameLabel).toBeInTheDocument();
    expect(MNameFiled).toBeInTheDocument();
    expect(LNameLabel).toBeInTheDocument();
    expect(LNameFiled).toBeInTheDocument();

    const signupButton = document.getElementById('signup');
    expect(signupButton).toBeEnabled();
  });


  test('renders home Page Select list', () => {
    render(<MainHomeComponent />);

    const selectListTitel = screen.getByText('Select your category here');
    expect(selectListTitel).toBeInTheDocument();
    const selectList = document.getElementById('categories');
    expect(selectList).toBeInTheDocument();
    expect(selectList).toBeEnabled();
    const startPlayButton = document.getElementById('start-play');
    expect(startPlayButton).toBeInTheDocument();
    expect(startPlayButton).toBeEnabled();
  });


  test('renders Game Page ', () => {
    render(<Game />);

    const submitButton = document.getElementById('submit');
    expect(submitButton).toBeTruthy();
  });