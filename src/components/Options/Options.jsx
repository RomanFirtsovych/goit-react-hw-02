import PropTypes from "prop-types";
import styles from './Options.module.css'

const Options = ({ onLeaveFeedback, onReset, totalFeedback }) => {
    return (
        <div className={styles.btn}>
            <button onClick={() => onLeaveFeedback('good')} className={styles.btnOption}>Good</button>
            <button onClick={() => onLeaveFeedback('neutral')} className={styles.btnOption}>Neutral</button>
            <button onClick={() => onLeaveFeedback('bad')} className={styles.btnOption}>Bad</button>
            {totalFeedback > 0 && (
            <button onClick={onReset} className={styles.btnOption}>Reset</button>
          )}
        </div>
    );
};

Options.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  totalFeedback: PropTypes.number.isRequired,
};

export default Options;