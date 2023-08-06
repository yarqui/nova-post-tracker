import { useState } from "react";
import Button from "../Button/Button";
import ResultBlock from "../ResultBlock/ResultBlock";
import TABS from "../../utils/tabs";
import BUTTON_TYPE from "../../utils/buttonTypes";
import INPUT_TYPE from "../../utils/inputTypes";
import SearchBar from "../SearchBar/SearchBar";
import INPUT_NAME from "../../utils/inputNames";

const ActionBlock = () => {
  const [currentTab, setCurrentTab] = useState(TABS.tracking);

  const handleTabClick = async (tab) => {
    if (tab === TABS.departments) {
      setCurrentTab(TABS.departments);

      return;
    }
    setCurrentTab(TABS.tracking);
  };

  return (
    <div>
      <div>
        <Button
          buttonType={BUTTON_TYPE.button}
          text="Перевірити ТТН"
          handleClick={() => handleTabClick(TABS.tracking)}
        />
        <Button
          buttonType={BUTTON_TYPE.button}
          text="Список відділень"
          handleClick={() => handleTabClick(TABS.departments)}
        />
      </div>

      {currentTab === TABS.tracking && (
        <SearchBar
          inputType={INPUT_TYPE.number}
          inputName={INPUT_NAME.ttn}
          inputTitle="Має містити 14 цифр"
          minLength={14}
          maxLength={14}
          placeholder="Введіть номер ТТН"
          buttonText="Перевірити статус ТТН"
        />
      )}

      <ResultBlock tab={currentTab} />
    </div>
  );
};

export default ActionBlock;
