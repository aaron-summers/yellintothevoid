import React from 'react';
import UserForm from './UserForm';

const main = ({ user, signUp, logOut, logIn}) => {
    return (
        <div>
            {
                user ? <div><button onClick={logOut}>Log out</button> </div> :
                <div>
                    <h1>Screamr</h1>
                    <div className="form-group">
                        <UserForm submit={signUp} header={'Sign up: '} />
                        or
                        <UserForm submit={logIn} header={"Log in: "} />
                    </div>
                </div>
            }
        </div>
    )
}

export default main