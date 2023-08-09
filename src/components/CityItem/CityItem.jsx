import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { fetchDepartments } from "../../redux/departments/operations";

import { CityItemStyled } from "./CityItem.styled";

const CityItem = ({ city }) => {
  const dispatch = useDispatch();
  return (
    <CityItemStyled
      onClick={() => {
        dispatch(fetchDepartments(city.Ref));
      }}
    >
      {city.Present}
    </CityItemStyled>
  );
};

CityItem.propTypes = {
  city: PropTypes.object.isRequired,
};

export default CityItem;
