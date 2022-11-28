import { useState } from 'react';
import FeedbackOptions from '../FeedbackOptions';
import Statistics from '../Statistics';
import Section from '../Section';
import Notification from '../Notification';
import { Wrap, Body } from './App.styled';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setDad] = useState(0);

  const onLeaveFeedback = e => {
    switch (e.target.name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setDad(prevState => prevState + 1);
        break;
      default:
        new Error('The name was not found');
    }
  };

  const total = good + neutral + bad;
  const key = Object.keys({ good, neutral, bad });
  const percentage = Math.round((good * 100) / total);

  return (
    <Body>
      <Wrap>
        <Section title="Please leave feedback">
          <FeedbackOptions options={key} onLeaveFeedback={onLeaveFeedback} />
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={percentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Wrap>
    </Body>
  );
};

export default App;
