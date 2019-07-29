import React, { useState } from 'react';

const LogIn = ({ submit, header }) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div id="forms" className="card">
            <div className="form-group">
                <form onSubmit={event => {
                    event.preventDefault();
                    submit({ username, password })
                    setUsername('')
                    setPassword('')
                }}>
                    <span className="card-title">{header}</span>
                    <input className="form-control" 
                        placeholder="Username" 
                        type="username" 
                        value={username} 
                        onChange={event => setUsername(event.target.value)} />

                    <input className="form-control"
                        placeholder="Password"
                        type="passowrd"
                        value={password}
                        onChange={event => setPassword(event.target.value)} />
                    <input className="btn btn-primary submit-btn" type="submit" value="Log In"/>
                </form>
            </div>
        </div>
    )
}

export default LogIn