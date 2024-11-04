const SearchResult = ({ searchResult }) => {
    return (
        <li>
            {searchResult.name.common}
        </li>
    );
}

export default SearchResult;