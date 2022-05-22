import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchSpells } from '../../actions';

import SpellCard from './SpellCard';

const SpellList = () => {
    const spellList = useSelector((state) => state.spells)
    const isFetching = useSelector((state) => state.isFetching)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchSpells())
    }, [dispatch])

    return (
        <div>
            {isFetching && <p>Loading Spells</p>}
            {spellList.map((spell, index) => {
                return (
                    <SpellCard spell={spell} key={index} />
                )
            })}
        </div>
    )
}

export default SpellList