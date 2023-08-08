import { useEffect, useMemo, useState } from "react";
import BUTTON_TYPE from "../../utils/buttonTypes";
import Button from "../Button/Button";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { debounce } from "lodash";
import { fetchCities } from "../../redux/departments/operations";
import INPUT_NAME from "../../utils/inputNames";
import { clearCities } from "../../redux/departments/departmentsSlice";
import { addToHistory } from "../../redux/history/historySlice";
import { fetchParcelInfo } from "../../redux/parcel/operations";
import { selectParcel } from "../../redux/parcel/selectors";

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
  const { Number } = useSelector(selectParcel);

  useEffect(() => {
    setInputValue(Number);
  }, [Number]);

  const debounceFetchCities = useMemo(
    () =>
      debounce((value) => {
        dispatch(fetchCities(value));
      }, 500),
    [dispatch]
  );

  const handleInputChange = (e) => {
    const value = e.target.value;

    // limits the length of input by 14 digits
    if (inputName === INPUT_NAME.ttn && value.length > 14) {
      const trimmedValue = value.slice(0, e.target.maxLength);
      setInputValue(trimmedValue);
      return;
    }

    setInputValue(value);

    if (inputName === INPUT_NAME.city) {
      if (value.length >= 2) {
        debounceFetchCities(value);
      }

      dispatch(clearCities());
    }
  };

  const handleClick = () => {
    if (inputName === INPUT_NAME.city) {
      setInputValue(initialInputValue);
      dispatch(clearCities());
    }

    if (inputName === INPUT_NAME.ttn) {
      // TODO: if inputValue.length < 14 Notify user and don't fetch
      dispatch(fetchParcelInfo(inputValue));
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
