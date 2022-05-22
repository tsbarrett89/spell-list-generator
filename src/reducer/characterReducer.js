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
    errorMessage: ""
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        default: return state
    }
}

export default reducer