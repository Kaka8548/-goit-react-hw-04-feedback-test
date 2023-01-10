import { useState } from 'react';
import Section from './section/Section';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';
import Statistics from './statistics/Statistics';
import { countPositiveFeedbackPercentage, countTotalFeedback } from 'utils';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onBtnClick = option => {
    if (option === 'good') {
      setGood(prevState => prevState + 1);
    }
    if (option === 'bad') {
      setBad(prevState => prevState + 1);
    }
    if (option === 'neutral') {
      setNeutral(prevState => prevState + 1);
    }
  };

  const total = countTotalFeedback(good, neutral, bad);
  const positivePercentage = countPositiveFeedbackPercentage(total, good);

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          handleClick={onBtnClick}
        />
      </Section>
      <Section title="">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      </Section>
    </>
  );
}
