const Search = ({setSearchTerm}) => {
    const onSearchChange = (event) => {
        setSearchTerm(event.target.value)
    }

    return (
        <div>
            <input type="text" placeholder="Search..." onChange={onSearchChange} />
        </div>
    );
}

export default Search;