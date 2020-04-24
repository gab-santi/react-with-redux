import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary.component';
import CardList from './components/CardList.component';
import SearchBox from './components/SearchBox.component';

import { setSearchField, requestPeople } from './actions';

// for mapping reducer output state to component props
// attribute: state.REDUCER.ATTRIBUTE
//
// usage in code:
// const {ATTRIBUTE_NAME_1, ATTRIBUTE_NAME_2, ..} = props;
const mapStateToProps = (state) => {
  return {
    searchField: state.searchPeople.searchField,
    people: state.requestPeople.people,
    isPending: state.requestPeople.isPending,
    error: state.requestPeople.error
  }
}

// for mapping dispacth actions to component props
// FORMAT: YOUR_FUNCTION: () => dispatch(REDUCER_NAME())
// can contain params
//
// usage in code:
// props.YOUR_FUNCTION();
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestPeople: () => dispatch(requestPeople())
  }
}

// React Hooks
// DO NOT FORGET props PARAMETER
function App(props) {
  useEffect(() => props.onRequestPeople(), []);
  
  const { searchField, onSearchChange, people, isPending } = props;

  var filteredPeople = people.filter(p => {
    return p.name.toLowerCase().includes(searchField.toLowerCase());
  })

  let content;
  if (!people.length) {
    content = <p>Loading profiles..</p>;
  } else {
    content = <><SearchBox searchChange={props.onSearchChange} /><CardList people={filteredPeople} /></>
  }

  return ( 
    <div className="App">
      <header className="App-header">
        <h2>People</h2>
      </header>
      <div className="Content">
        {content}
      </div>
    </div>
  );
}

// DO NOT FORGET export format
// export default connect(mapStateToProps, mapDispatchToProps)(COMPONENT_NAME);
export default connect(mapStateToProps, mapDispatchToProps)(App);
