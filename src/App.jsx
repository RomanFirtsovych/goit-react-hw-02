import { useState, useEffect } from 'react'
import Description from './components/Description/Description'
import Feedback from './components/Feedback/Feedback'
import Notification from './components/Notification/Notification'
import Options from './components/Options/Options'

import './App.css'

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem("feedback");
    return savedFeedback
      ? JSON.parse(savedFeedback)
      : { good: 0, neutral: 0, bad: 0 };
  });

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
const totalGoodBad = feedback.good + feedback.bad;
const positiveFeedbackPercentage = totalGoodBad
    ? Math.round((feedback.good / totalGoodBad) * 100)
  : 0;
  
useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);


  return (
    <>
      <Description />
      <Options
        onLeaveFeedback={updateFeedback}
        onReset={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={totalFeedback}
          positivePercentage={positiveFeedbackPercentage}
        />
      ) : (
        <Notification message="No feedback given yet" />
      )}
    </>
  )
}

export default App
