// import Feedback from './components/Feedback/Feedback'
import Options from './components/Options/Options'
import Description from './components/Description/Description'

// import  { useState } from 'react';

const App = () => {
  // const [feedback, setFeedback] = useState({
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  //}//);

  // const handleLeaveFeedback = (type) => {
  //   setFeedback((prevFeedback) => ({
  //     ...prevFeedback,
  //     [type]: prevFeedback[type] + 1,
  //   }));
  // };

  return (
    <div>
      <Description />
      <Options />
      {/* <Options /> onLeaveFeedback={handleLeaveFeedback} /> */}
      {/* <Feedback good={feedback.good} neutral={feedback.neutral} bad={feedback.bad} /> */}
    </div>
  );
};

export default App;
