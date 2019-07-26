import React, { useState } from 'react';

const SignUpForm = ({ submit, header }) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <form onSubmit={event => {
            event.preventDefault();
            submit({ username, password })
            setUsername('')
            setPassword('')
        }}>
            <span>{header}</span>
            <input placeholder="Username" 
                type="username" 
                value={username} 
                onChange={event => setUsername(event.target.value)} />
            <input placeholder="Password"
                type="passowrd"
                value={password}
                onChange={event => setPassword(event.target.value)} />
            <input type="submit"/>
        </form>
    )
}

export default SignUpForm