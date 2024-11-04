import {useEffect, useState} from 'react'
import Person from "../components/Person.jsx";
import Search from "../components/Search.jsx";
import Persons from "../components/Persons.jsx";
import PersonForm from "../components/PersonForm.jsx";
import axios from "axios";
import PersonService from "../services/PersonService.jsx";

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()

        if (persons.some((person) => person.name === newName)) {
            if (!window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
                return;
            }

            const person = persons.find((person) => person.name === newName)
            const changedPerson = {...person, number: newPhone}

            PersonService
                .update(person.id, changedPerson)
                .then((response) => {
                    const updatedPersonFromServer = response.data

                    setPersons(persons.map((currentPerson) => currentPerson.id !== person.id ? currentPerson : updatedPersonFromServer))
                })
                .catch(() => {
                    alert('An error occured updating person')
                })

            return;
        }


        const personObject = {
            name: newName,
            number: newPhone
        }

        PersonService
            .create(personObject)
            .then((response) => {
                setPersons(persons.concat(response.data))
            })
            .catch(() => {
                alert('An error occured creating new person')
            })
    }


    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }
    const handlePhoneChange = (event) => {
        setNewPhone(event.target.value)
    }

    const handleDelete = (id) => {
        const person = persons.find((person) => person.id === id)

        if (!window.confirm(`Delete ${person.name} ?`)) {
            return;
        }

        if (confirm) {
            PersonService
                .remove(id)
                .then(() => {
                    setPersons(persons.filter((person) => person.id !== id))
                })
                .catch(() => {
                    alert('An error occured deleting person')
                })
        }
    }


    const [searchTerm, setSearchTerm] = useState('')


    const displayedPersons = !searchTerm
        ? persons
        : persons.filter((person) => person.name.toLowerCase().includes(searchTerm.toLowerCase()))
    ;


    const fetchEffect = () => {
        PersonService
            .getAll()
            .then((response) => {
                setPersons(response.data)
            })
            .catch((error) => {
                alert('An error occured fetching all persons')
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

            <Persons persons={displayedPersons} handleDelete={handleDelete} />
        </div>
    )
}

export default App