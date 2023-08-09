import styled from "styled-components";

export const ActionBlockWrap = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 12px;

  border-radius: 5px;
  background-color: var(--main-bg-color);
`;

export const TabWrap = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 16px;
  gap: 12px;

  border-bottom: 1px dashed var(--sec-accent-color);
`;
