import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const SpellList = () => {
    const spellList = useSelector((state) => state.spells)
    const isFetching = useSelector((state) => state.isFetching)
    const dispatch = useDispatch()

    useEffect(() => {
        
    }, [])

    return (
        <div>
            {isFetching && <p>Loading Spells</p>}
            {spellList}
        </div>
    )
}

export default SpellList