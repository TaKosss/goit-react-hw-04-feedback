import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <p className="statistic_text">Good: {good}</p>
      <p className="statistic_text">Neutral: {neutral}</p>
      <p className="statistic_text">Bad: {bad}</p>
      <p className="statistic_text">Total: {total}</p>
      <p className="statistic_text">Positive feedback: {positivePercentage}%</p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
