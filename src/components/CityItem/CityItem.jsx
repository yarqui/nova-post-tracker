import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { fetchDepartments } from "../../redux/departments/operations";

const CityItem = ({ city }) => {
  const dispatch = useDispatch();
  return (
    <li
      onClick={() => {
        dispatch(fetchDepartments(city.Ref));
      }}
    >
      {city.Present}
    </li>
  );
};

CityItem.propTypes = {
  city: PropTypes.object.isRequired,
};

export default CityItem;
