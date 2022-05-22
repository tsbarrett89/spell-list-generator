import axios from 'axios'

export const FETCH_CHARACTERS_START = "FETCH_CHARACTERS_START"
export const FETCH_CHARACTERS_SUCCESS = "FETCH_CHARACTERS_SUCCESS"
export const FETCH_CHARACTERS_FAILURE = "FETCH_CHARACTERS_FAILURE"
export const CREATE_CHARACTER_START = "CREATE_CHARACTER_START"
export const CREATE_CHARACTER_SUCCESS = "CREATE_CHARACTER_SUCCESS"
export const CREATE_CHARACTER_FAILURE = "CREATE_CHARACTER_FAILURE"

export const getCharacters = user => dispatch => {
    dispatch({ type: FETCH_CHARACTERS_START })
    axios
        .get(`http://localhost:5000/character/${user}`)
        .then(res => {
            dispatch({ type: FETCH_CHARACTERS_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: FETCH_CHARACTERS_FAILURE, payload: `Failed with ${err.status} status code.` })
        })
}