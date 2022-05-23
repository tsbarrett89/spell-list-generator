import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getCharacters } from '../../actions/characterActions'

import CharacterCard from './CharacterCard';

const CharacterList = () => {
    const user = useSelector((state) => state.authReducer.user)
    const dispatch = useDispatch()
    const characters = useSelector((state) => state.characterReducer.characters)

    useEffect(() => {
        dispatch(getCharacters(user.user_id))
    }, [dispatch])

    return (
        <div>
            {characters.map((character, index) => {
                <CharacterCard character={character} key={index} />
            })}
        </div>
    )
}

export default CharacterList