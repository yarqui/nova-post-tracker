import PropTypes from "prop-types";
import BUTTON_TYPE from "../../utils/buttonTypes";

const Button = ({ text, handleClick, buttonType = BUTTON_TYPE.submit }) => {
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
