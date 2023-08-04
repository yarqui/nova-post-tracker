import Button from "../Button/Button";
import ResultBlock from "../ResultBlock/ResultBlock";
import TrackingBar from "../TrackingBar/TrackingBar";

const ActionBlock = () => {
  return (
    <div>
      <div>
        <Button text="Перевірити ТТН" />
        <Button text="Список відділень" />
      </div>
      <TrackingBar />
      <ResultBlock />
    </div>
  );
};

export default ActionBlock;
