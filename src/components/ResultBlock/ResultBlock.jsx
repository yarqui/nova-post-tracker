import PropTypes from "prop-types";
import { useSelector } from "react-redux";
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
import { selectParcel } from "../../redux/parcel/selectors";
import BUTTON_TYPE from "../../utils/buttonTypes";
import CityItem from "../CityItem/CityItem";
import Loader from "../Loader/Loader";
import { ResultList, StatusLabel, StatusText } from "./ResultBlock.styled";

const ResultBlock = ({ tab }) => {
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

  const { Status, WarehouseSender, WarehouseRecipient, DocumentCost } =
    parcelInfo;

  return (
    <div>
      {tab === TABS.tracking && (
        <>
          {showLoading && <Loader />}

          {showParcelInfo && (
            <div>
              <StatusLabel>
                Статус доставки:{" "}
                <StatusText>{Status || "немає даних"}</StatusText>
              </StatusLabel>
              {/* <hr /> */}
              <StatusLabel>
                Відправлено:{" "}
                <StatusText>{WarehouseSender || "немає даних"}</StatusText>
              </StatusLabel>
              {/* <hr /> */}
              <StatusLabel>
                Отримано:{" "}
                <StatusText>{WarehouseRecipient || "немає даних"}</StatusText>
              </StatusLabel>
              {/* <hr /> */}
              <StatusLabel>
                Вартість:{" "}
                <StatusText>
                  {DocumentCost || "немає даних"}
                  {DocumentCost && " грн"}
                </StatusText>
              </StatusLabel>
              {/* <hr /> */}
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
            buttonType={BUTTON_TYPE.button}
          />
          <div style={{ maxHeight: "300px", overflowY: "auto" }}>
            {showError && (
              <>
                <p>{error}</p>
                <p>{error.message}</p>
              </>
            )}

            {showLoading && <Loader />}

            {showCities && cities && (
              <ResultList>
                {cities.map((city) => (
                  <CityItem key={city.Ref} city={city} />
                ))}
              </ResultList>
            )}

            {showDepartments && (
              <ResultList>
                {departments.map((dep) => (
                  <DepartmentItem key={dep.Ref} dep={dep} />
                ))}
              </ResultList>
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
