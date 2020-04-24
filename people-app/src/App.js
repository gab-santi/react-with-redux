import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux'
import './App.css';
import people from './people.js'
import ErrorBoundary from './components/ErrorBoundary.component';
import CardList from './components/CardList.component';
import SearchBox from './components/SearchBox.component';

import { setSearchField } from './actions';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchField
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  }
}

function App(props) {
  const [peopleData, setPeopleData] = useState(people);

  useEffect(() => requestData(), []);

  const requestData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => { console.log(users); setPeopleData(users) })
  }
  
  const { searchField } = props;
  var filteredPeople = peopleData.filter(p => {
    return p.name.toLowerCase().includes(searchField.toLowerCase());
  })

  return (
    <div className="App">
      <header className="App-header">
        <h2>People</h2>
      </header>
      <div className="Content">
        <SearchBox searchChange={props.onSearchChange} />
        <CardList people={filteredPeople} />
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
