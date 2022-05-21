import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchSpells } from '../../actions';

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
            {spellList.map((spell) => {
                return (
                    <p>{spell.name}</p>
                )
            })}
        </div>
    )
}

export default SpellList