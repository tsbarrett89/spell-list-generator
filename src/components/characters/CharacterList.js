import React from 'react';
import { useSelector } from 'react-redux';

import CharacterCard from './CharacterCard';

const CharacterList = () => {
    const characters = useSelector((state) => state.characterReducer.characters)

    return (
        <div>
            {characters.map((character, index) => {
                <CharacterCard character={character} key={index} />
            })}
        </div>
    )
}

export default CharacterList