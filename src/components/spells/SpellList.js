import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchSpells } from '../../actions';

const SpellList = () => {
    const spellList = useSelector((state) => state.spells)
    const isFetching = useSelector((state) => state.isFetching)
    const dispatch = useDispatch()

    useEffect(() => {
        fetchSpells()
    }, [])

    return (
        <div>
            {isFetching && <p>Loading Spells</p>}
            {spellList}
        </div>
    )
}

export default SpellList