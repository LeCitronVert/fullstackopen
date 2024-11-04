const Total = (props) => {
    return (
        <p><b>Number of exercises {props.exercises.reduce((accumulated, current) => accumulated + current)}</b></p>
    )
}

export default Total