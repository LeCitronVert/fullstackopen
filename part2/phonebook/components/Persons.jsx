import Person from "./Person.jsx";

const Persons = ({ persons }) => {
    return (
        <ul>
            {persons.map((person) => (
                <Person key={person.name} person={person} />
            ))}
        </ul>
    )
}

export default Persons;