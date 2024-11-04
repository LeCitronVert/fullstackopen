const Percent = ({ label, value, total }) => {
    return (
        <p>{label}: {(value / total * 100) || 0}%</p>
    )
}

export default Percent