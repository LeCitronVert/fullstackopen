const SearchForm = ({ handleSearch }) => {
    return (
        <form>
        <input
            type="text"
            onChange={handleSearch}
        />
        </form>
    );
}

export default SearchForm;