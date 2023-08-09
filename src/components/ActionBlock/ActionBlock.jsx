import { useDispatch, useSelector } from "react-redux";

import Button from "../Button/Button";
import ResultBlock from "../ResultBlock/ResultBlock";
import SearchBar from "../SearchBar/SearchBar";

import TABS from "../../utils/tabs";
import BUTTON_TYPE from "../../utils/buttonTypes";
import INPUT_TYPE from "../../utils/inputTypes";
import INPUT_NAME from "../../utils/inputNames";

import { clearParcelInfo } from "../../redux/parcel/parcelSlice";
import { changeTab } from "../../redux/tabs/tabsSlice";
import { selectCurrentTab } from "../../redux/tabs/selectors";

import { ActionBlockWrap, TabWrap } from "./ActionBlock.styled";

const ActionBlock = () => {
  const currentTab = useSelector(selectCurrentTab);
  const dispatch = useDispatch();

  const handleTabClick = async (tab) => {
    if (tab === TABS.departments && currentTab === TABS.tracking) {
      dispatch(changeTab(TABS.departments));
      dispatch(clearParcelInfo());
    }

    if (tab === TABS.tracking && currentTab === TABS.departments)
      dispatch(changeTab(TABS.tracking));
  };

  return (
    <ActionBlockWrap>
      <TabWrap>
        <Button
          buttonType={BUTTON_TYPE.button}
          text="Перевірити ТТН"
          handleClick={() => handleTabClick(TABS.tracking)}
          currentTab={currentTab}
        />
        <Button
          buttonType={BUTTON_TYPE.button}
          text="Список відділень"
          handleClick={() => handleTabClick(TABS.departments)}
          currentTab={currentTab}
        />
      </TabWrap>

      {currentTab === TABS.tracking && (
        <SearchBar
          inputType={INPUT_TYPE.number}
          inputName={INPUT_NAME.ttn}
          inputTitle="Має містити 14 цифр"
          minLength={14}
          maxLength={14}
          placeholder="Введіть номер ТТН"
          buttonText="Перевірити статус ТТН"
          buttonType={BUTTON_TYPE.submit}
        />
      )}

      <ResultBlock tab={currentTab} />
    </ActionBlockWrap>
  );
};

export default ActionBlock;
