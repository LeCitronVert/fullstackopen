const StatsLine = ({ label, value }) => {
    return (
        <tr>
            <td>{label}</td>
            <td>{value}</td>
        </tr>
    )
}

export default StatsLine