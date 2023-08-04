import PropTypes from "prop-types";
const Button = ({ text }) => {
  return <button type="button">{text}</button>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
