import React from 'react';
import SearchBar from './searchbar.js';
import countriesData from './data.json';  // Import the JSON data

const App = () => {
    return (
        <div className="App">
            <h1>Country Search</h1>
            <SearchBar countries={countriesData} />
        </div>
    );
};

export default App;
