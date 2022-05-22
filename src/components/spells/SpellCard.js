import React, { useState, useEffect } from 'react';

const SpellCard = (props) => {
    const [ fetching, setFetching ] = useState(false)
    const [ showSpell, setShowSpell ] = useState(false)

    handleClick = () => {
        setFetching(true)
        useEffect(() => {
            
        }, [])
    }
    
    return (
        <div>
            <p>{props.spell.name}</p>
        </div>
    )
}

export default SpellCard