import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import SpellCard from './SpellCard';

const SavedList = () => {
    const savedSpells = useSelector((state) => state.spellReducer.savedSpells)
    const dispatch = useDispatch()

    return (
        <div>
            {savedSpells.map((spell, index) => {
                return (
                    <SpellCard spell={spell} key={index} />
                )
            })}
        </div>
    )
}

export default SavedList