import { useDispatch, useSelector } from "react-redux";
import { selectHistoryItems } from "../../redux/history/selectors";
import { nanoid } from "nanoid";
import { useMemo } from "react";
import { fetchParcelInfo } from "../../redux/parcel/operations";
import { changeTab } from "../../redux/tabs/tabsSlice";
import TABS from "../../utils/tabs";
import { PiEraserFill } from "react-icons/pi";
import HistoryItem from "../HistoryItem/HistoryItem";
import { clearHistory } from "../../redux/history/historySlice";

const History = () => {
  const historyItems = useSelector(selectHistoryItems);
  const dispatch = useDispatch();

  const onHistoryItemClick = async (trackingNumber) => {
    dispatch(changeTab(TABS.tracking));
    dispatch(fetchParcelInfo(trackingNumber));
  };

  return (
    <div>
      <div>
        <p>Історія</p>
        <PiEraserFill
          title="Очистити історію"
          onClick={() => {
            dispatch(clearHistory());
          }}
        />
      </div>

      {historyItems.length === 0 && <p>Поки тут нічого немає</p>}

      {historyItems.length > 0 && (
        <ul>
          {historyItems.map((el) => (
            <HistoryItem
              key={nanoid()}
              el={el}
              onItemCLick={onHistoryItemClick}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default History;
