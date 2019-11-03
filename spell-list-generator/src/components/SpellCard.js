import React, {useState, useEffect} from 'react';
import axios from 'axios';

import SpellCardClasses from './SpellCardClasses';

const SpellCard = props => {
    const [spellInfo, setSpellInfo] = useState({})
    const [spellClasses, setSpellClasses] = useState([])


    useEffect(() => {
        axios
            .get(props.url)
            .then(response => {
                //console.log(response.data)
                setSpellInfo(response.data)
                setSpellClasses(Array.from(response.data.classes))
              })
    }, [props.url])

    return(
        <div className="SpellCard">
            <h3>{spellInfo.name}</h3>
            <p>{spellInfo.casting_time}</p>
            <ul>Classes
                {spellClasses.map((classes, index) => (
                    <SpellCardClasses
                        key={index}
                        classes={classes.name}
                    />
                ))}
            </ul>
        </div>
    )
}

export default SpellCard