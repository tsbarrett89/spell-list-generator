import {
    USER_REGISTRATION_START,
    USER_REGISTRATION_SUCCESS,
    USER_REGISTRATION_FAILURE,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_START,
    USER_LOGIN_FAILURE
} from '../actions/authActions'

const initialState = {
    user: {},
    errorMessage: ""
}

const reducer = (state = initialState, action) => {
    return state
}

export default reducer