import React from 'react';

import SpellCard from './SpellCard';

const SpellGrid = props => {

    return (
        <div>
            {Array.from(props.spells).map((spell, index) => (
                <SpellCard 
                    key={index}
                    name={spell.name}
                    url={spell.url}
                    characterClass={props.characterClass}
                />
            ))}
        </div>
    )
}

export default SpellGrid