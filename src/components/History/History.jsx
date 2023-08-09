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
import {
  HistoryHeadWrap,
  HistoryLabel,
  HistoryList,
  HistoryStyledWrap,
} from "./History.styled";
import { IconContext } from "react-icons";

const History = () => {
  const historyItems = useSelector(selectHistoryItems);
  const dispatch = useDispatch();

  const onHistoryItemClick = async (trackingNumber) => {
    dispatch(changeTab(TABS.tracking));
    dispatch(fetchParcelInfo(trackingNumber));
  };

  return (
    <HistoryStyledWrap>
      <HistoryHeadWrap>
        <HistoryLabel>Історія</HistoryLabel>
        <IconContext.Provider
          value={{
            className: "icon-erase",
          }}
        >
          <PiEraserFill
            title="Очистити історію"
            onClick={() => {
              dispatch(clearHistory());
            }}
          />
        </IconContext.Provider>
      </HistoryHeadWrap>

      {historyItems.length === 0 && <p>Поки тут нічого немає</p>}

      {historyItems.length > 0 && (
        <HistoryList>
          {historyItems.map((el) => (
            <HistoryItem
              key={nanoid()}
              el={el}
              onItemCLick={onHistoryItemClick}
            />
          ))}
        </HistoryList>
      )}
    </HistoryStyledWrap>
  );
};

export default History;
