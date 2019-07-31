import React, { useState } from 'react';
import LogIn from './LogIn';
import SignUp from './SignUp'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from './Container';
import NavBar from './NavBar';

const Main = ({ user, signUp, logOut, logIn}) => {
    const [showSignUp, setShowSignUp] = useState(false);
    const [showLogIn, setShowLogIn] = useState(false);

    const handleSignUpClose = () => setShowSignUp(false);
    const handleSignUpShow = () => setShowSignUp(true);
    const handleLogInClose = () => setShowLogIn(false);
    const handleLogInShow = () => setShowLogIn(true);
    

    return (
        <div>
            {
                user ? <div><NavBar clickHandler={logOut} user={user.user}/> <Container user={user.user} /></div> :
            <div className="ui vertically divided grid">
                <div className="one column row brand-container">
                    <div className="column brand-text">
                        <h1 className="display-1">screamer</h1>
                    </div>
                </div>

                <div className="two column row form-container">
                    <div className="column">
                    <Button className="signup-btn" variant="primary" onClick={handleSignUpShow}>Sign Up</Button>
                    <Modal show={showSignUp} onHide={handleSignUpClose} footer={null} centered>
                        <Modal.Header closeButton>
                            <Modal.Title>Sign Up</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <SignUp submit={signUp} header={'Sign up: '} />
                        </Modal.Body>
                    </Modal>
                    </div>


                    <div className="column">
                    <Button className="login-btn" variant="success" onClick={handleLogInShow}>Log In</Button>
                    <Modal show={showLogIn} onHide={handleLogInClose} footer={null} centered>
                        <Modal.Header closeButton>
                            <Modal.Title>Log In</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>                    
                            <LogIn submit={logIn} header={"Log in: "} />
                        </Modal.Body>
                    </Modal>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}

export default Main