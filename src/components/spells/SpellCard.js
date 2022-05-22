import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SpellCard = (props) => {
    const [ fetching, setFetching ] = useState(false)
    const [ showSpell, setShowSpell ] = useState(false)
    const [ spellInfo, setSpellInfo ] = useState({})
    const [ error, setError ] = useState({})

    handleClick = () => {
        setFetching(true)
        useEffect(() => {
            axios
                .get(spell => {
                    setShowSpell(true)
                    setSpellInfo(spell)
                })
                .catch(err => setError(err))
        }, [])
    }
    
    return (
        <div>
            <p>{props.spell.name}</p>
        </div>
    )
}

export default SpellCard