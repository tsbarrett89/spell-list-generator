import {
    FETCH_SPELLS_START,
    FETCH_SPELLS_SUCCESS,
    FETCH_SPELLS_FAILURE,
    SAVE_SPELL
} from '../actions'

const initialState = {
    spells: [],
    savedSpells: [],
    isFetching: false,
    errorMessage: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        default: return state
    }
}

export default reducer