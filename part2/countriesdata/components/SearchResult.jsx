const SearchResult = ({ searchResult, setFocusCountry }) => {
    const handleFocusCountry = (countryName) => {
        setFocusCountry(countryName);
    }

    return (
        <li>
            {searchResult.name.common}
            <button onClick={() => handleFocusCountry(searchResult.name.common)}>View</button>
        </li>
    );
}

export default SearchResult;