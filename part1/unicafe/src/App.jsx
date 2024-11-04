import { useState } from 'react'
import Percent from "./Percent.jsx";
import Average from "./Average.jsx";

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)



    return (
        <div>
            <h1>Feedback</h1>

            <button onClick={() => setGood(good + 1)}>Good</button>
            <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
            <button onClick={() => setBad(bad + 1)}>Bad</button>

            <h1>Stats</h1>

            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>

            <Average good={good} neutral={neutral} bad={bad} />
            <Percent label={'Positive'} value={good} total={good + neutral + bad} />
        </div>
    )
}

export default App