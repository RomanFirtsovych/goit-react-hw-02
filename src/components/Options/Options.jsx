import { useState } from 'react'
import styles from './Options.module.css'

export const Options = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const feetbackClickGood = () => {
        setGood(good + 1);
    }

    const feetbackClickNeutral = () => {
        setNeutral(neutral + 1);
    }

    const feetbackClickBad = () => {
        setBad(bad + 1);
    }

    const feetbackClickReset = () => {
        setBad(0);
        setNeutral(0);
        setGood(0);
    }

        const totalFeedback = good + neutral + bad;
        const positiveFeedback = Math.round((good / totalFeedback) * 100)
        return (
            <div>
                <h2 className={styles.Options}>Please leave feedback</h2>
                <button onClick={feetbackClickGood}>Good</button>
                <button onClick={feetbackClickNeutral}>Neutral</button>
                <button onClick={feetbackClickBad}>Bad</button>
                <button onClick={feetbackClickReset}>Reset</button>
                <div className={styles.wrapper}>
      <h2>Feedback Summary</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: { totalFeedback}</p>
      <p>PositiveFeedback: {positiveFeedback}%</p>
    </div>
            </div>
        )
    }


export default Options