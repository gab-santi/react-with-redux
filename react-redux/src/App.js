import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import people from './people.js'
import ErrorBoundary from './components/ErrorBoundary.component';
import CardList from './components/CardList.component';

function App() {
  const [peopleData, setPeopleData] = useState(people)

  return (
    <div className="App">
      <header className="App-header">
        <h2>People</h2>
      </header>
      <CardList people={peopleData} />
    </div>
  );
}

export default App;
