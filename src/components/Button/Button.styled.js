import styled from "styled-components";

export const ButtonStyled = styled.button`
  min-height: 36px;

  border: 2px solid #a8a8a8;
  border-radius: 5px;
  transition: all var(--transition);

  &:hover {
    cursor: pointer;
    background-color: var(--accent-color);
    border: 2px solid transparent;
  }
  &:focus {
    outline: 0;
    border: 2px solid var(--accent-color);
  }
`;
