import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import people from './people.js'
import ErrorBoundary from './components/ErrorBoundary.component';
import CardList from './components/CardList.component';
import SearchBox from './components/SearchBox.component';

function App() {
  const [peopleData, setPeopleData] = useState(people);
  const [searchField, setSearchField] = useState('');

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  }

  var filteredPeople = peopleData.filter(p => {
    return p.name.toLowerCase().includes(searchField.toLowerCase());
  })

  return (
    <div className="App">
      <header className="App-header">
        <h2>People</h2>
      </header>
      <div className="Content">
        <SearchBox searchChange={onSearchChange} />
        <CardList people={filteredPeople} />
      </div>
    </div>
  );
}

export default App;
