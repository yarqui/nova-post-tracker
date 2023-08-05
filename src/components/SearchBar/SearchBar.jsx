import { useState } from "react";
import BUTTON_TYPE from "../../utils/buttonTypes";
import Button from "../Button/Button";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { fetchDepartments } from "../../redux/departments/operations";

const initialInputValue = "";

const SearchBar = ({
  inputType,
  buttonText,
  inputTitle,
  minLength,
  maxLength,
  placeholder,
  // handleClick,
  inputName,
}) => {
  const [inputValue, setInputValue] = useState(initialInputValue);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleSubmit = () => {
    // handleClick(inputValue);
    dispatch(fetchDepartments(inputValue));
    setInputValue(initialInputValue);
  };

  return (
    <div>
      <input
        type={inputType}
        name={inputName}
        title={inputTitle}
        value={inputValue}
        minLength={minLength}
        maxLength={maxLength}
        placeholder={placeholder}
        onChange={handleInputChange}
      />
      <Button
        buttonType={BUTTON_TYPE.submit}
        text={buttonText}
        handleClick={handleSubmit}
      ></Button>
    </div>
  );
};

SearchBar.propTypes = {
  inputType: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  inputTitle: PropTypes.string.isRequired,
  minLength: PropTypes.number.isRequired,
  maxLength: PropTypes.number,
  placeholder: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
  // handleClick: PropTypes.func.isRequired,
};

export default SearchBar;
