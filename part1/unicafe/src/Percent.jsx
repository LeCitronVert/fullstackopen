const Percent = ({ label, value, total }) => {
    return (
        <tr>
            <td>{label}</td>
            <td>{(value / total * 100) || 0}%</td>
        </tr>
    )
}

export default Percent