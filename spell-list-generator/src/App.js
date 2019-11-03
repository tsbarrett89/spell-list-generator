import React, { useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

import SpellGrid from './components/SpellGrid';

function App() {
  const [spells, setSpells] = useState([])
  const [query, setQuery] = useState('')
  const [search, setSearch] = useState('')
  const [characterClass, setCharacterClass] = useState('')
  
  const handleClassChanges = event => {
    setCharacterClass(event.target.value)
  }

  const handleSearchChanges = event => {
    setQuery(event.target.value)
  }
  
  const handleSubmit = event => {
    event.preventDefault()
    setSearch(query)
  }

  useEffect(() => {
      axios
        .get('https://cors-anywhere.herokuapp.com/http://dnd5eapi.co/api/spells/')
        .then(response => {
          // console.log(response.data)
          const searchResults = response.data.results.filter(spell => 
            spell.name.toLowerCase().includes(search.toLowerCase()));
          setSpells(searchResults)
        })
  }, [search])

  return (
    <div>
      <h1>Spells</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="search by spell name"
          onChange={handleSearchChanges}
        />
        <button type="submit">Search</button>
      </form>
      <select onChange={handleClassChanges}>
        <option value=''>All</option>
        <option value="barbarian">Barbarian</option>
        <option value="bard">Bard</option>
        <option value="cleric">Cleric</option>
        <option value="druid">Druid</option>
        <option value="fighter">Fighter</option>
        <option value="monk">Monk</option>
        <option value="paladin">Paladin</option>
        <option value="ranger">Ranger</option>
        <option value="rogue">Rogue</option>
        <option value="sorcerer">Sorcerer</option>
        <option value="warlock">Warlock</option>
        <option value="wizard">Wizard</option>        
      </select>
      <SpellGrid spells={spells} characterClass={characterClass} />
    </div>
  );
}

export default App;
