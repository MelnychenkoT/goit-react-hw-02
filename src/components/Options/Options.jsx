import PropTypes from 'prop-types';
import css from './Options.module.css';

const Options = ({
  onClickFeedback,
  onResetFeedback,
  allFeedback,
  options,
}) => {
  return (
    <ul className={css.optionsList}>
      {options.map(option => (
        <li key={option} className={css.optionsItem}>
          <button
            onClick={() => onClickFeedback(option)}
            className={css.optionsBtn}
            type="button"
          >
            {option[0].toUpperCase() + option.slice(1)}
          </button>
        </li>
      ))}
      {allFeedback && (
        <li className={css.optionsItem}>
          <button
            onClick={onResetFeedback}
            className={css.optionsBtn}
            type="button"
          >
            Reset
          </button>
        </li>
      )}
    </ul>
  );
};

Options.propTypes = {
  onClickFeedback: PropTypes.func,
  onResetFeedback: PropTypes.func,
  totalFeedback: PropTypes.number,
  options: PropTypes.arrayOf(PropTypes.string),
};

export default Options;