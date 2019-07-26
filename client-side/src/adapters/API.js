const endpoint = 'http://localhost:3000'
const signUpURL = `${endpoint}/users`
const loginURL = `${endpoint}/login`
const postsUrl = `${endpoint}/posts`
const validateUrl = `${endpoint}/validate`

const jsonify = response => {
    if (response.ok)
        return response.json()
    else
        throw new Error(response.json())
}

const handleServerError = response => console.error(response)

const constructHeaders = (moreHeaders = {}) => (
    {
        'Authorization': localStorage.getItem('token'),
        ...moreHeaders
    }
)

const signUp = (user) => fetch(signUpURL, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user })
}).then(jsonify)
    .then(data => {
        localStorage.setItem('token', data.token)
        return data.user
    })
    .catch(handleServerError)

const logIn = (user) => fetch(loginURL, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user })
}).then(jsonify)

const validateUser = () => {
    if(!localStorage.getItem('token')) return Promise.resolve({ error: 'no token' })

    return fetch(validateUrl, {
        headers: constructHeaders()
    }).then(jsonify)
        .then(data => {
            localStorage.setItem('token', data.token)
            return data.user
        })
        .catch(handleServerError)
}

const clearToken = () => localStorage.removeItem('token')

export default {
    signUp,
    logIn,
    validateUser,
    clearToken
}