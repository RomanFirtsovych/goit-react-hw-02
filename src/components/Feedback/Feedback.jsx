import PropTypes from "prop-types";
const Feedback = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <div>
            <ul>
                <li>Good: {good}</li>
                <li>Neature: {neutral}</li>
                <li>Bad: {bad}</li>
                <li>Total: {total}</li>
                <li>Positive: {positivePercentage}%</li>
            </ul>
        </div>
    );
};

Feedback.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Feedback;