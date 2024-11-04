import { useState } from 'react'
import Person from "../components/Person.jsx";

const App = () => {
    const [persons, setPersons] = useState([
        {
            name: 'Arto Hellas',
            phone: '040-123456'
        }
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

    return (
        <div>
            <h2>Phonebook</h2>
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
            {persons.map((person) => <Person key={person.name} person={person} />)}
        </div>
    )
}

export default App