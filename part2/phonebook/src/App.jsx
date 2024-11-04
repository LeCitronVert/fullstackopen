import { useState } from 'react'
import Person from "../components/Person.jsx";
import Search from "../components/Search.jsx";

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    ])
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
            phone: newPhone
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
    

    return (
        <div>
            <h2>Phonebook</h2>

            <Search setSearchTerm={setSearchTerm} />

            <h2>add new</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    name: <input required='required' onChange={handleNameChange} />
                </div>
                <div>
                    phone : <input required='required' onChange={handlePhoneChange} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>


            <h2>Numbers</h2>
            {displayedPersons.map((person) => <Person key={person.name} person={person} />)}
        </div>
    )
}

export default App