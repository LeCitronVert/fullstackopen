import { useState } from 'react'

const Anecdotes = ({ anecdotes, selected, points, handleVote }) => {
    if (null === selected) {
        return (
            <div>Press the button to load an anecdote !</div>
        )
    }

    return (
        <div>
            <p>{anecdotes[selected]}</p>
            <p>has {points[selected]} vote(s)</p>
            <button onClick={handleVote}>Vote</button>
        </div>
    )
}

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ]


    const [selected, setSelected] = useState(null)
    const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))

    const handleVote = () => {
        const copy = [...points]
        copy[selected] += 1
        setPoints(copy)
    }


    return (
        <div>
            <button onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))}>Load random anecdote</button>
            <Anecdotes anecdotes={anecdotes} selected={selected} points={points} handleVote={() => handleVote()} />
        </div>
    )
}

export default App