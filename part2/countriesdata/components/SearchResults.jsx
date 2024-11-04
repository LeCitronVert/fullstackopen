import SearchResult from "./SearchResult.jsx";
import Country from "./Country.jsx";

const SearchResults = ({ searchResults }) => {
    if (null === searchResults) {
        return <p>No results</p>
    }

    if (Array.isArray(searchResults)) {
        if (10 < searchResults.length) {
            return <p>Too many matches, specify another filter</p>
        }

        return (
            <ul>
                {searchResults.map((country) => {
                    return <SearchResult key={country.name.common} searchResult={country} />
                })}
            </ul>
        )
    }

    return <Country country={searchResults} />
};

export default SearchResults;