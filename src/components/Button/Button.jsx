import PropTypes from 'prop-types';
export const Button = ({ handleClick, text }) => {
  return (
    <button type="button" className="Button" onClick={handleClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
