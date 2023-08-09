import PropTypes from "prop-types";
import { ButtonStyled } from "./Button.styled";

const Button = ({ text, handleClick, buttonType }) => {
  return (
    <ButtonStyled type={buttonType} onClick={handleClick}>
      {text}
    </ButtonStyled>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  buttonType: PropTypes.string.isRequired,
};

export default Button;
