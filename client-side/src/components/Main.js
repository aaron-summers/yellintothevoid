import React, { useState } from 'react';
import LogIn from './LogIn';
import SignUp from './SignUp'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from './Container';
import { Divider, Segment } from 'semantic-ui-react';

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
                user ? <div><button onClick={logOut}>Log out</button> <Container/></div> :
                /* <Segment basic raised> */
            <div className="ui stickable vertically divided grid form-div">
                {/* <div className="one column row brand-container">
                    <div className="ui stretched middle aligned three column grid">
                        <div className="column brand-text">
                            <h1 className="display-1">screamer</h1>
                        </div>
                    </div>
                </div> */}


                <div className="two column row form-container">
                    <div className="column">
                    <a href="#" className="signup-btn" variant="primary" onClick={handleSignUpShow}>Sign Up</a>
                    <Modal dialogClassName="signup-modal" show={showSignUp} onHide={handleSignUpClose} footer={null} centered>
                        <Modal.Header closeButton>
                            <Modal.Title>Sign Up</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <SignUp submit={signUp} header={'Sign up: '} />
                        </Modal.Body>
                    </Modal>
                    </div>

                    <div className="column">
                    <a href="#" className="login-btn" variant="success" onClick={handleLogInShow}>Log In</a>
                    <Modal dialogClassName="login-modal" show={showLogIn} onHide={handleLogInClose} footer={null} centered>
                        <Modal.Header closeButton>
                            <Modal.Title centered>Log In</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>                    
                            <LogIn submit={logIn} header={"Log in: "} />
                        </Modal.Body>
                    </Modal>
                    </div>
                </div>
            </div>
            /*</Segment>*/
            }
        </div>
    )
}

export default Main