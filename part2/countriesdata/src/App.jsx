import {useEffect, useState} from 'react'
import SearchForm from "../components/SearchForm.jsx";
import CountryApiService from "../services/CountryApiService.jsx";
import SearchResults from "../components/SearchResults.jsx";

function App() {
    const [allCountries, setAllCountries] = useState([])
    const [searchResults, setSearchResults] = useState(null)

    const handleSearch = (event) => {
        const searchValue = event.target.value
        const searchResults = allCountries.filter((country) => {
            const lowercaseSearchValue = searchValue.toLowerCase()

            return (
                country.name.common.toLowerCase().includes(lowercaseSearchValue)
                || country.name.official.toLowerCase().includes(lowercaseSearchValue)
            );
        })

        if (0 === searchResults.length) {
            setSearchResults(null)

            return
        }

        if (1 === searchResults.length) {
            CountryApiService
                .fetch(searchResults[0].name.common)
                .then((response) => {
                    setSearchResults(response.data)
                })
                .catch((error) => {
                    alert("Error fetching data")
                })

            return
        }

        setSearchResults(searchResults)
    }

    useEffect(() => {
        CountryApiService.fetchAll()
            .then((response) => {
                setAllCountries(response.data)
            })
            .catch((error) => {
                alert("Error fetching data")
            })
    }, [])

    return (
        <div>
            <SearchForm handleSearch={handleSearch} />

            <SearchResults searchResults={searchResults} />
        </div>
    )
}

export default App
