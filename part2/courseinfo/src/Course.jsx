import Total from "./Total.jsx";
import Content from "./Content.jsx";
import Header from "./Header.jsx";

const Course = ({course}) => {
    return (
        <div key={course.id}>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total exercises={course.parts.map((part) => part.exercises)} />
        </div>
    )
}

export default Course;