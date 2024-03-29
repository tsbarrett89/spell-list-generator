import axios from 'axios';

export const FETCH_SPELLS_START = "FETCH_SPELLS_START"
export const FETCH_SPELLS_SUCCESS = "FETCH_SPELLS_SUCCESS"
export const FETCH_SPELLS_FAILURE = "FETCH_SPELLS_FAILURE"
export const SAVE_SPELL = "SAVE_SPELL"

export const fetchSpells = spells => dispatch => {
    dispatch({ type: FETCH_SPELLS_START, payload: spells })
    axios
        .get('https://www.dnd5eapi.co/api/spells')
        .then(res => {
            console.log(res.data)
            dispatch({ type: FETCH_SPELLS_SUCCESS, payload: res.data.results })
        })
        .catch( err => {
            dispatch({ type: FETCH_SPELLS_FAILURE, payload: `Failed with ${err.status} status code.`})
        })
}

export const saveSpell = spell => {
    return {
        type: SAVE_SPELL,
        payload: spell
    }
}