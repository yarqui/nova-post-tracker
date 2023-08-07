import { useDispatch, useSelector } from "react-redux";
import { selectHistoryItems } from "../../redux/history/selectors";
import { nanoid } from "nanoid";
import { useMemo } from "react";
import { fetchParcelInfo } from "../../redux/parcel/operations";
import { changeTab } from "../../redux/tabs/tabsSlice";
import TABS from "../../utils/tabs";

const History = () => {
  const historyItems = useSelector(selectHistoryItems);
  const memoizedHistoryItems = useMemo(() => historyItems, [historyItems]);

  const dispatch = useDispatch();

  const onHistoryItemClick = async (trackingNumber) => {
    dispatch(changeTab(TABS.tracking));
    dispatch(fetchParcelInfo(trackingNumber));
  };

  return (
    <div>
      <p>Історія</p>

      {memoizedHistoryItems.length === 0 && <p>Поки тут нічого немає</p>}

      {memoizedHistoryItems.length > 0 && (
        <ul>
          {memoizedHistoryItems.map((el) => {
            return (
              <li
                key={nanoid()}
                onClick={() => {
                  onHistoryItemClick(el);
                }}
              >
                {el}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default History;
