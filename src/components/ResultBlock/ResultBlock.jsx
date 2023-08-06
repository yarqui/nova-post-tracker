import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import TABS from "../../utils/tabs";
import SearchBar from "../SearchBar/SearchBar";
import INPUT_TYPE from "../../utils/inputTypes";
import INPUT_NAME from "../../utils/inputNames";
import DepartmentItem from "../DepartmentItem/DepartmentItem";
import {
  selectCities,
  selectDepartments,
  selectError,
  selectIsLoading,
} from "../../redux/departments/selectors";
import { fetchDepartments } from "../../redux/departments/operations";

const ResultBlock = ({ tab }) => {
  const departments = useSelector(selectDepartments);
  const cities = useSelector(selectCities);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  const showLoading = isLoading && !error;
  const showError = error && !isLoading;

  return (
    <div>
      {tab === TABS.tracking && (
        <div>
          <p>Статус доставки: {"статус"}</p>
          <p>Відправлено: {"відправлено"}</p>
          <p>Отримано: {"отримано"}</p>
        </div>
      )}

      {tab === TABS.departments && (
        <>
          <SearchBar
            inputType={INPUT_TYPE.text}
            inputName={INPUT_NAME.city}
            inputTitle="Мінімум 2 символи"
            minLength={2}
            placeholder="Назва населеного пункту"
            buttonText="Очистити"
          />
          <div style={{ maxHeight: "300px", overflowY: "auto" }}>
            {showError && (
              <>
                <p>Виникла неочікувана помилка. Спробуйте ще раз.</p>
                <p>{error.message}</p>
              </>
            )}

            {showLoading && <p>Завантаження...</p>}

            {!showLoading && !showError && cities && (
              <ul>
                {cities.map((city) => (
                  <li
                    key={city.Ref}
                    onClick={() => {
                      dispatch(fetchDepartments(city.Ref));
                    }}
                  >
                    {city.Present}
                  </li>
                ))}
              </ul>
            )}

            {!showLoading && !showError && departments && (
              <ul>
                {departments.map((dep) => (
                  <DepartmentItem key={dep.Ref} dep={dep} />
                ))}
              </ul>
            )}
          </div>
        </>
      )}
    </div>
  );
};

ResultBlock.propTypes = {
  tab: PropTypes.string.isRequired,
};

export default ResultBlock;
