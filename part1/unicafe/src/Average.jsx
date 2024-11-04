const Average = ({ good, neutral, bad }) => {
    const totalVotes = good + neutral + bad

    const buildRender = (value) => {
        return (
            <tr>
                <td>Average</td>
                <td>{value}</td>
            </tr>
        );
    }

    if (totalVotes === 0) {
        return buildRender(0);
    }

    const goodScore = 1 * good
    const badScore = -1 * bad

    const totalScore = (goodScore + badScore) / totalVotes

    return buildRender(totalScore)
}

export default Average