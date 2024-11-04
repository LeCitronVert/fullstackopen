const Person = ({ person }) => {
    return (
        <div>
            <p>{person.name} : {person.phone}</p>
        </div>
    )
}

export default Person;