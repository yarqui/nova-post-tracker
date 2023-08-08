import PropTypes from "prop-types";

const Button = ({ text, handleClick, buttonType }) => {
  return (
    <button type={buttonType} onClick={handleClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  buttonType: PropTypes.string.isRequired,
};

export default Button;
