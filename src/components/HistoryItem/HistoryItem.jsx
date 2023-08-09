import PropTypes from "prop-types";
import { HistoryItemStyled } from "./HistoryItem.styled";

const HistoryItem = ({ el, onItemCLick }) => {
  return (
    <HistoryItemStyled
      onClick={() => {
        onItemCLick(el);
      }}
    >
      {el}
    </HistoryItemStyled>
  );
};

HistoryItem.propTypes = {
  el: PropTypes.number.isRequired,
  onItemCLick: PropTypes.func.isRequired,
};

export default HistoryItem;
