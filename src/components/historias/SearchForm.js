// SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [searchType, setSearchType] = useState('documento');
    const [query, setQuery] = useState('');

    const handleSearchTypeChange = (e) => {
        setSearchType(e.target.value);
    };

    const handleQueryChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearch = () => {
        onSearch(searchType, query);
    };

    return (
        <div className="search-bar">
            <select value={searchType} onChange={handleSearchTypeChange}>
                <option value="documento">Documento</option>
                <option value="nombre">Nombre</option>
            </select>
            <input
                type="text"
                placeholder={`Buscar por ${searchType}`}
                value={query}
                onChange={handleQueryChange}
            />
            <button onClick={handleSearch}>Buscar</button>
        </div>
    );
};

export default SearchBar;
