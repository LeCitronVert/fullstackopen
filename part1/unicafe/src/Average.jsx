const Average = ({ good, neutral, bad }) => {
    const totalVotes = good + neutral + bad

    if (totalVotes === 0) {
        return (
            <p>Average: 0</p>
        )
    }

    const goodScore = 1 * good
    const badScore = -1 * bad

    const totalScore = (goodScore + badScore) / totalVotes

    return (
        <p>Average: {totalScore}</p>
    )
}

export default Average