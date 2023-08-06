import { useSelector } from "react-redux";
import { selectHistoryItems } from "../../redux/history/selectors";

const History = () => {
  const historyItems = useSelector(selectHistoryItems);

  return (
    <div>
      <h3>Історія</h3>

      {historyItems.length === 0 && <p>Поки тут нічого немає</p>}

      {historyItems.length > 0 && (
        <ul>
          {historyItems.map((el) => (
            <li key={el + Date.now()}>{el}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default History;
