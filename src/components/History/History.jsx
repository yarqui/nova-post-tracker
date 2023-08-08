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
  // TODO: do we need memoizedHistoryItems?
  const memoizedHistoryItems = useMemo(() => historyItems, [historyItems]);

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

      {memoizedHistoryItems.length === 0 && <p>Поки тут нічого немає</p>}

      {memoizedHistoryItems.length > 0 && (
        <ul>
          {memoizedHistoryItems.map((el) => (
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
