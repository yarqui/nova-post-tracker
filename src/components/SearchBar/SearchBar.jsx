import { useEffect, useMemo, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { debounce } from "lodash";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { fetchCities } from "../../redux/departments/operations";
import INPUT_NAME from "../../utils/inputNames";
import Button from "../Button/Button";
import { clearCities } from "../../redux/departments/departmentsSlice";
import { addToHistory } from "../../redux/history/historySlice";
import { fetchParcelInfo } from "../../redux/parcel/operations";
import { selectParcel } from "../../redux/parcel/selectors";
import { FormStyled, InputStyled } from "./SearchBar.styled";

const initialInputValue = "";

const SearchBar = ({
  inputType,
  buttonText,
  buttonType,
  inputTitle,
  minLength,
  maxLength,
  placeholder,
  inputName,
}) => {
  const [inputValue, setInputValue] = useState(initialInputValue);
  const dispatch = useDispatch();
  const { Number } = useSelector(selectParcel);

  const inputRef = useRef(null);

  useEffect(() => {
    setInputValue(Number || "");
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

  const handleClick = (e) => {
    e.preventDefault();

    if (inputName === INPUT_NAME.city) {
      setInputValue(initialInputValue);
      dispatch(clearCities());
    }

    if (inputName === INPUT_NAME.ttn) {
      if (inputValue.length < 14) {
        Notify.warning("Номер має містити 14 цифр", {
          timeout: 1500,
          fontSize: "14px",
        });
        return;
      }
      dispatch(fetchParcelInfo(inputValue));
      dispatch(addToHistory(inputValue));
    }

    inputRef.current.blur();
  };

  return (
    <FormStyled
      onSubmit={(e) => {
        e.preventDefault();
        if (inputName === INPUT_NAME.city) {
          return;
        }
      }}
    >
      <InputStyled
        ref={inputRef}
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
        buttonType={buttonType}
        text={buttonText}
        handleClick={handleClick}
      />
    </FormStyled>
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
  buttonType: PropTypes.string.isRequired,
};

export default SearchBar;
