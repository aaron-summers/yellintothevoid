const endpoint = 'http://localhost:3000/api/v1'
const signupUrl = `${endpoint}/users`
const loginUrl = `${endpoint}/login`
const postsUrl = `${endpoint}/posts`
const commentsUrl = `${endpoint}/comments`
const validateUrl = `${endpoint}/validate`

const jsonify = res => {
    if (res.ok)  {
        return res.json()
     } else {
        return Promise.reject(alert('Invalid Login Attempt'))
     }
}
const handleServerError = (err) => {
    // console.error(res)
    alert(err)
}

const constructHeaders = (moreHeaders = {}) => (
    {
        'Authorization': localStorage.getItem('token'),
        ...moreHeaders
    }
)

const signUp = (user) => fetch(signupUrl, {
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


const logIn = (user) => fetch(loginUrl, {
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

const validateUser = () => {
    if (!localStorage.getItem('token')) return Promise.resolve({ error: 'no token' })

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

const getPosts = () => fetch(postsUrl).then(response => response.json())

const postPost = post => fetch(postsUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
}).then(res => res.json())

const getComments = () => {
    return fetch(commentsUrl)
        .then(res => res.json())
}

export default {
    signUp,
    logIn,
    validateUser,
    clearToken, 
    getPosts,
    postPost,
    getComments
}