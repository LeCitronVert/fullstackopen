import Part from "./Part.jsx";

const Content = (props) => {
    return (
        <>
            {props.parts.map((part) => (
                <Part name={part.name} exercises={part.exercises}></Part>
            ))}
        </>
    );
}

export default Content;