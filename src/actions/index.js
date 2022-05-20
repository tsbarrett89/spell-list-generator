import axios from 'axios';

export const FETCH_SPELLS_START = "FETCH_SPELLS_START"
export const FETCH_SPELLS_SUCCESS = "FETCH_SPELLS_SUCCESS"
export const FETCH_SPELLS_FAILURE = "FETCH_SPELLS_FAILURE"
export const SAVE_SPELL = "SAVE_SPELL"

export const fetchSpells = spells => dispatch => {
    dispatch({ type: SET_SPELLS_START, payload: spells })
    axios
        .get('https://www.dnd5eapi.co/api/spells')
        .then(res => {
            dispatch({ type: SET_SPELLS_SUCCESS, payload: res.data.results })
        })
        .catch( err => {
            dispatch({ type: SET_SPELLS_FAILURE, payload: `Failed with ${err.status} status code.`})
        })
}