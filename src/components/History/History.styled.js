import styled from "styled-components";

export const HistoryStyledWrap = styled.section`
  padding: 12px;
  border-radius: 5px;
  background-color: var(--main-bg-color);
`;

export const HistoryHeadWrap = styled.div`
  display: flex;
  padding: 4px;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
  border: 1px dashed var(--sec-accent-color);
  border-radius: 5px;
`;

export const HistoryLabel = styled.p`
  font-weight: 700;
`;

export const HistoryList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding-top: 12px;
`;
