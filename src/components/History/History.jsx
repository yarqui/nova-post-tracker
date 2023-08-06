import { useSelector } from "react-redux";
import { selectHistoryItems } from "../../redux/history/selectors";
import { nanoid } from "nanoid";
import { useMemo } from "react";

const History = () => {
  const historyItems = useSelector(selectHistoryItems);
  const memoizedHistoryItems = useMemo(() => historyItems, [historyItems]);

  return (
    <div>
      <h3>Історія</h3>

      {memoizedHistoryItems.length === 0 && <p>Поки тут нічого немає</p>}

      {memoizedHistoryItems.length > 0 && (
        <ul>
          {memoizedHistoryItems.map((el) => {
            return <li key={nanoid()}>{el}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default History;
