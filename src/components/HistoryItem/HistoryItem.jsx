// import { nanoid } from "nanoid";
import PropTypes from "prop-types";

const HistoryItem = ({ el, onItemCLick }) => {
  return (
    <li
      onClick={() => {
        onItemCLick(el);
      }}
    >
      {el}
    </li>
  );
};

HistoryItem.propTypes = {
  el: PropTypes.number.isRequired,
  onItemCLick: PropTypes.func.isRequired,
};

export default HistoryItem;
