import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const Display = props => <div>{props.name} {props.value}</div>


const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)


    return (
        <div>
            <h1>Give feedback</h1>
            <Button handleClick={() => setGood(good + 1)} text="good" />
            <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
            <Button handleClick={() => setBad(bad + 1)} text="bad" />
            <h1>Statistics</h1>
            < Display name="Good" value={good}/>
            <Display name="Neutral" value={neutral} />
            <Display name="Bad" value={bad} />

        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


