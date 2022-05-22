import {
    FETCH_SPELLS_START,
    FETCH_SPELLS_SUCCESS,
    FETCH_SPELLS_FAILURE,
    SAVE_SPELL
} from '../actions/spellActions'

const initialState = {
    spells: [],
    savedSpells: [],
    isFetching: false,
    errorMessage: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_SPELLS_START:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_SPELLS_SUCCESS:
            return {
                ...state,
                spells: action.payload,
                isFetching: false
            }
        case FETCH_SPELLS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        case SAVE_SPELL:
            return {
                ...state,
                savedSpells: [
                    ...state.savedSpells,
                    action.payload
                ]
            }
        default: return state
    }
}

export default reducer