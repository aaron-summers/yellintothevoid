import React, { useState } from 'react';

const UserForm = ({ submit, header }) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div id="forms" className="card">
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
            <input className="btn btn-primary submit-btn" type="submit"/>
        </form>
        </div>
    )
}

export default UserForm