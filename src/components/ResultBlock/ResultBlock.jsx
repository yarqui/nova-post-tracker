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
import { selectParcel } from "../../redux/parcel/selectors";

const ResultBlock = ({ tab }) => {
  const dispatch = useDispatch();

  const departments = useSelector(selectDepartments);
  const cities = useSelector(selectCities);
  const parcelInfo = useSelector(selectParcel);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const showLoading = isLoading && !error;
  const showError = error && !isLoading;
  const showDepartments = !isLoading && !error && departments;
  const showCities = !isLoading && !error && cities;
  const showParcelInfo =
    !isLoading && !error && Object.keys(parcelInfo).length !== 0;

  return (
    <div>
      {tab === TABS.tracking && (
        <>
          {showLoading && <p>Завантаження...</p>}

          {showError && (
            <>
              <p>Виникла неочікувана помилка. Спробуйте ще раз.</p>
              <p>{error.message}</p>
            </>
          )}

          {showParcelInfo && (
            <div>
              <p>Статус доставки: {parcelInfo.Status}</p>
              <hr />
              <p>Відправлено: {parcelInfo.WarehouseSender}</p>
              <hr />
              <p>Отримано: {parcelInfo.WarehouseRecipient}</p>
              <hr />
              <p>Вартість: {parcelInfo.DocumentCost} грн.</p>
              <hr />
            </div>
          )}
        </>
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

            {showCities && cities && (
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

            {showDepartments && (
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
