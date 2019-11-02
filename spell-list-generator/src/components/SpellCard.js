import React, {useState, useEffect} from 'react';
import axios from 'axios';

const SpellCard = props => {
    const [spellInfo, setSpellInfo] = useState({})

    useEffect(() => {
        axios
            .get(props.url)
            .then(response => {
                console.log(response)
                setSpellInfo(response.data)
            })
    }, [])
    
    return(
        <div>
            <h3>{props.name}</h3>
            <p>{spellInfo.casting_time}</p>
        </div>
    )
}

export default SpellCard