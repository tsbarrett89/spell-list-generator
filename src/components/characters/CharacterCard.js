import React from 'react';

const CharacterCard = (props) => {
    return (
        <div>
            <p>{props.character.name}</p>
        </div>
    )
}

export default CharacterCard