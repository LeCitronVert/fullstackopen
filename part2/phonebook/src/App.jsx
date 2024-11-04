import {useEffect, useState} from 'react'
import Person from "../components/Person.jsx";
import Search from "../components/Search.jsx";
import Persons from "../components/Persons.jsx";
import PersonForm from "../components/PersonForm.jsx";
import axios from "axios";

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()

        if (persons.some((person) => person.name === newName)) {
            alert(`${newName} is already added to phonebook`)

            return;
        }


        const personObject = {
            name: newName,
            number: newPhone
        }
        setPersons(persons.concat(personObject))
    }
    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }
    const handlePhoneChange = (event) => {
        setNewPhone(event.target.value)
    }


    const [searchTerm, setSearchTerm] = useState('')


    const displayedPersons = !searchTerm
        ? persons
        : persons.filter((person) => person.name.toLowerCase().includes(searchTerm.toLowerCase()))
    ;


    const fetchEffect = () => {
        axios
            .get('http://localhost:3001/persons')
            .then((response) => {
                setPersons(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(fetchEffect, [])


    return (
        <div>
            <h2>Phonebook</h2>

            <Search setSearchTerm={setSearchTerm} />

            <h2>add new</h2>

            <PersonForm
                handleSubmit={handleSubmit} handleNameChange={handleNameChange}
                handlePhoneChange={handlePhoneChange}
            />

            <h2>Numbers</h2>

            <Persons persons={displayedPersons} />
        </div>
    )
}

export default App