import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SpellCard = (props) => {
    const [ fetching, setFetching ] = useState(false)
    const [ showSpell, setShowSpell ] = useState(false)
    const [ spellInfo, setSpellInfo ] = useState({})
    const [ error, setError ] = useState({})

    const handleClick = () => {
        setShowSpell(true)
        setFetching(true)

        axios
            .get(`https://www.dnd5eapi.co${props.spell.url}`)
            .then(spell => {
                setSpellInfo(spell.data)
                setFetching(false)
            })
            .catch(err => setError(err))
    }
    
    return (
        <div onClick={handleClick} >
            <p>{props.spell.name}</p>
            {fetching && <p>fetching spell</p>}
        </div>
    )
}

export default SpellCard