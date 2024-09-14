import React, { useState, useEffect } from 'react';
import './index.css';

const SearchBar = ({ countries }) => {
    const [query, setQuery] = useState('');
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);

    useEffect(() => {
        if (query.length > 0) {
            const filteredData = countries.filter(
                country =>
                    (country.name && country.name.toLowerCase().includes(query.toLowerCase())) ||
                    (country.capital && country.capital.toLowerCase().includes(query.toLowerCase()))
            );
            setFilteredSuggestions(filteredData);
        } else {
            setFilteredSuggestions([]);
        }
    }, [query, countries]);

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search by country or capital..."
                value={query}
                onChange={handleChange}
                className="search-input"
            />
            {filteredSuggestions.length > 0 && (
                <ul className="suggestions-list">
                    {filteredSuggestions.map((suggestion, index) => (
                        <li key={index} className="suggestion-item">
                            {suggestion.name} - {suggestion.capital}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBar;
