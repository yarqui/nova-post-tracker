import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import TABS from "../../utils/tabs";
import SearchBar from "../SearchBar/SearchBar";
import INPUT_TYPE from "../../utils/inputTypes";
import INPUT_NAME from "../../utils/inputNames";
import DepartmentItem from "../DepartmentItem/DepartmentItem";
import {
  selectDepartments,
  selectError,
  selectIsLoading,
} from "../../redux/departments/selectors";

const ResultBlock = ({ tab }) => {
  const departments = useSelector(selectDepartments);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

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
            inputTitle='Назва населеного пункту, наприклад, "Київ"'
            minLength={3}
            placeholder="Назва населеного пункту"
            buttonText="Знайти населений пункт"
            // handleClick={fetchDepartmentsByCity}
          />
          <div style={{ maxHeight: "300px", overflowY: "auto" }}>
            {showError && (
              <>
                <p>Виникла неочікувана помилка. Спробуйте ще раз.</p>
                <p>{error.message}</p>
              </>
            )}

            {showLoading ? (
              <p>Завантаження...</p>
            ) : (
              <ul>
                {departments &&
                  departments.map((dep) => (
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
