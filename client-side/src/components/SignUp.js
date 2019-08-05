import React, { useState } from 'react';

const SignUp = ({ submit, header }) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div id="signup-form" className="card">
                <form onSubmit={event => {
                    event.preventDefault();
                    submit({ username, password })
                    setUsername('')
                    setPassword('')
                }}>
                <div className="form-group">
                    {/* <span className="card-title">{header}</span> */}
                    <input className="form-control" 
                        placeholder="Username" 
                        type="username" 
                        value={username} 
                        onChange={event => setUsername(event.target.value)} />

                    <input type="passowrd"
                        className="form-control"
                        placeholder="Password"
                        value={password}
                        onChange={event => setPassword(event.target.value)} />
                    <input className="btn btn-primary submit-btn" type="submit" value="Sign Up"/>
                </div>
            </form>
        </div> 
    )
}

export default SignUp