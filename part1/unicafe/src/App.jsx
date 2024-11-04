import { useState } from 'react'
import Percent from "./Percent.jsx";
import Average from "./Average.jsx";
import StatsLine from "./StatsLine.jsx";
import Button from "./Button.jsx";

const Stats = ({ good, neutral, bad }) => {
    const totalVotes = good + neutral + bad

    if (totalVotes === 0) {
        return (
            <p>No feedback given</p>
        )
    }

    return (
        <div>
            <h1>Stats</h1>

            <table>
                <tbody>
                    <StatsLine label={'Good'} value={good}/>
                    <StatsLine label={'Neutral'} value={neutral}/>
                    <StatsLine label={'Bad'} value={bad}/>

                    <Average good={good} neutral={neutral} bad={bad}/>
                    <Percent label={'Positive'} value={good} total={good + neutral + bad}/>
                </tbody>
            </table>
        </div>
    )
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <h1>Feedback</h1>

            <Button label={'Good'} onClick={() => setGood(good + 1)}/>
            <Button label={'Neutral'} onClick={() => setNeutral(neutral + 1)}/>
            <Button label={'Bad'} onClick={() => setBad(bad + 1)}/>

            <Stats good={good} neutral={neutral} bad={bad}/>
        </div>
    )
}

export default App