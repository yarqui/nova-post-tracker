import PropTypes from "prop-types";
import { PiBuildingsFill, PiMapPinFill, PiScalesFill } from "react-icons/pi";

import { DepartmentItemStyled } from "./DepartmentItem.styled";
import { IconContext } from "react-icons";

const DepartmentItem = ({ dep }) => {
  return (
    <DepartmentItemStyled key={dep.Ref}>
      <p>
        <IconContext.Provider value={{ className: "icon-department" }}>
          <PiBuildingsFill />
        </IconContext.Provider>
        {` ${dep.CityDescription}`}
      </p>
      <p>
        <IconContext.Provider value={{ className: "icon-department" }}>
          <PiMapPinFill />
        </IconContext.Provider>
        {` ${dep.Description}`}
      </p>
      <p>
        <IconContext.Provider value={{ className: "icon-department" }}>
          <PiScalesFill />
        </IconContext.Provider>
        {` до ${
          dep.PlaceMaxWeightAllowed === "0"
            ? dep.TotalMaxWeightAllowed
            : dep.PlaceMaxWeightAllowed
        } кг`}
      </p>
    </DepartmentItemStyled>
  );
};

DepartmentItem.propTypes = {
  dep: PropTypes.object.isRequired,
};

export default DepartmentItem;
