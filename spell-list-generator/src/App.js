import React, { useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

import SpellGrid from './components/SpellGrid';

function App() {
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    let i = 0
    for (i=1; i<320; i++) {
      axios
        .get(`https://cors-anywhere.herokuapp.com/http://dnd5eapi.co/api/spells/${i}/`)
        .then(response => {
          setSpells(...spells, response.data)
        })
    }
  }, [])

  return (
    <div>
      <h1>Spells</h1>
      <SpellGrid spells={spells} />
    </div>
  );
}

export default App;
