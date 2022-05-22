import axios from 'axios';

export const USER_REGISTRATION_START = "USER_REGISTRATION_START"
export const USER_REGISTRATION_SUCCESS = "USER_REGISTRATION_SUCCESS"
export const USER_REGISTRATION_FAILURE = "USER_REGISTRATION_FAILURE"
export const USER_LOGIN_START = "USER_LOGIN_START"
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS"
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE"

export const registerUser = creds => dispatch => {
    dispatch({ type: USER_REGISTRATION_START })
    axios
        .post('http://localhost:5000/user/register', creds)
        .then(res => {
            localStorage.setItem('token', res.data.token)
            dispatch({ type: USER_REGISTRATION_SUCCESS, payload: res.data })
        })
        .catch(err => dispatch({ type: USER_LOGIN_FAILURE, payload: err.response }))
}