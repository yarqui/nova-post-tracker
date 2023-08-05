import PropTypes from "prop-types";

const DepartmentItem = ({ dep }) => {
  return (
    <li key={dep.Ref}>
      <p>{`🏙 ${dep.CityDescription}`}</p>
      <p>{`📃 ${dep.Description}`}</p>
      <p>
        {`⚖ до ${
          dep.PlaceMaxWeightAllowed === "0"
            ? dep.TotalMaxWeightAllowed
            : dep.PlaceMaxWeightAllowed
        } кг`}
      </p>
      <hr />
    </li>
  );
};

DepartmentItem.propTypes = {
  dep: PropTypes.object.isRequired,
};

export default DepartmentItem;
