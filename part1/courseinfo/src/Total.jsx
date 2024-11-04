const Total = (props) => {
    return (
        <p>Number of exercises {props.exercises.reduce((accumulated, current) => accumulated + current)}</p>
    )
}

export default Total