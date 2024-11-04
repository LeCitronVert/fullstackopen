const Person = ({ person }) => {
    return (
        <li>
            <p>{person.name} : {person.number}</p>
        </li>
    )
}

export default Person;