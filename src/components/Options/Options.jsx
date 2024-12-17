import PropTypes from 'prop-types';
import css from './Options.module.css'

const Options = ({
  onClickFeedback,
  onResetFeedback,
  allFeedback,
  options,
}) => {
  return (
    <ul className={css.list}>
      {options.map(option => (
        <li key={option} >
          <button
            onClick={() => onClickFeedback(option)}
            className={css.btn}
            type="button"
          >
            {option[0].toUpperCase() + option.slice(1)}
          </button>
        </li>
      ))}
      {allFeedback && (
        <li>
          <button
            onClick={onResetFeedback}
            className={css.btn}
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