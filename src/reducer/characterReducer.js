import {
    FETCH_CHARACTERS_START,
    FETCH_CHARACTERS_SUCCESS,
    FETCH_CHARACTERS_FAILURE,
    CREATE_CHARACTER_START,
    CREATE_CHARACTER_SUCCESS,
    CREATE_CHARACTER_FAILURE
} from '../actions/characterActions';

const initialState = {
    characters: [],
    isFetching: false,
    errorMessage: ""
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_CHARACTERS_START:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_CHARACTERS_SUCCESS:
            return {
                ...state,
                characters: action.payload,
                isFetching: false
            }
        case FETCH_CHARACTERS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        case CREATE_CHARACTER_START:
            return {
                ...state,
                isFetching: true
            }
        case CREATE_CHARACTER_SUCCESS:
            return {
                ...state,
                characters: [ ...state.characters, action.payload ],
                isFetching: false
            }
        case CREATE_CHARACTER_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default: return state
    }
}

export default reducer