import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const SpellList = () => {
    const spellList = useSelector((state) => state.spells)

    return (
        <div>{spellList}</div>
    )
}

export default SpellList