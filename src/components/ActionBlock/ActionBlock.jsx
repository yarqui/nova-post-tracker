import { useEffect } from "react";
import Button from "../Button/Button";
import ResultBlock from "../ResultBlock/ResultBlock";
import TrackingBar from "../TrackingBar/TrackingBar";
import { useDispatch } from "react-redux";
import { fetchDepartments } from "../../redux/departments/operations";

const ActionBlock = () => {
  const dispatch = useDispatch();

  // TODO: make state of input request with CityName to pass it to request in Button
  const fetchDepartmentsByCity = async () => {
    dispatch(fetchDepartments("Жмеринка"));
  };
  return (
    <div>
      <div>
        <Button text="Перевірити ТТН" />
        <Button text="Список відділень" handleClick={fetchDepartmentsByCity} />
      </div>
      <TrackingBar />
      <ResultBlock />
    </div>
  );
};

export default ActionBlock;
