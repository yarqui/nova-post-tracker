import { useEffect, useMemo, useState } from "react";
import BUTTON_TYPE from "../../utils/buttonTypes";
import Button from "../Button/Button";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { debounce } from "lodash";
import { fetchCities } from "../../redux/departments/operations";
import INPUT_NAME from "../../utils/inputNames";
import { clearCities } from "../../redux/departments/departmentsSlice";
import { addToHistory } from "../../redux/history/historySlice";

const initialInputValue = "";

const SearchBar = ({
  inputType,
  buttonText,
  inputTitle,
  minLength,
  maxLength,
  placeholder,
  inputName,
}) => {
  const [inputValue, setInputValue] = useState(initialInputValue);
  const dispatch = useDispatch();

  const debounceFetchCities = useMemo(
    () =>
      debounce((value) => {
        dispatch(fetchCities(value));
      }, 500),
    [dispatch]
  );

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (inputName === INPUT_NAME.city) {
      debounceFetchCities(value);
    }
  };

  const handleClick = () => {
    if (inputName === INPUT_NAME.city) {
      setInputValue(initialInputValue);
      dispatch(clearCities());
    }

    if (inputName === INPUT_NAME.ttn) {
      dispatch(addToHistory(inputValue));
    }
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
        handleClick={handleClick}
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
};

export default SearchBar;
