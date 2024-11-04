import Part from "./Part.jsx";

const Content = (props) => {
    return (
        <>
            {props.parts.map((part) => (
                <Part part={part.part} exercises={part.exercises}></Part>
            ))}
        </>
    );
}

export default Content;