
import { useState, useEffect } from 'react';
import css from './App.module.css';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';


const App = () => {
  const [feedback, setFeedback] = useState(
    () =>
      JSON.parse(localStorage.getItem('feedback')) ?? {
        good: 0,
        neutral: 0,
        bad: 0,
      }
  );

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = feedbackType => {
    setFeedback(prev => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const { good, neutral, bad } = feedback;
  const options = Object.keys(feedback);
  const totalFeedback = good + neutral + bad;
  const positiveFeedback = totalFeedback
    ? Math.round(((good + neutral) / totalFeedback) * 100)
    : 0;

  return (
    <section className={css.appContainer}>
      <Description />
      <Options
        onClickFeedback={updateFeedback}
        onResetFeedback={resetFeedback}
        allFeedback={totalFeedback > 0}
        options={options}
      />
      {totalFeedback > 0 ? (
        <Feedback
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
          feedback={feedback}
        />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </section>
  );
};

export default App;