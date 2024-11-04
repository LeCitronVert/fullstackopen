const Content = (props) => {
    return (
        <>
            {props.parts.map((part) => (
                <p>{part.part} {part.exercises}</p>
            ))}
        </>
    );
}

export default Content;