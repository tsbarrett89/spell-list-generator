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
    isSending: false,
    errorMessage: ""
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case USER_REGISTRATION_START:
            return {
                ...state,
                isSending: true
            }
        case USER_REGISTRATION_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isSending: false
            }
        case USER_REGISTRATION_FAILURE:
            return {
                ...state,
                isSending: false,
                errorMessage: action.payload
            }
        case USER_LOGIN_START:
            return {
                ...state,
                isSending: true
            }
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isSending: false
            }
        case USER_LOGIN_FAILURE:
            return {
                ...state,
                isSending: false,
                errorMessage: action.payload
            }
        default: return state
    }
}

export default reducer