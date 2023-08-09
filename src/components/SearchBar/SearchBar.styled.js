import styled from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  padding-bottom: 16px;

  border-bottom: 1px dashed var(--sec-accent-color);

  @media screen and (min-width: 768px) {
    width: 540px;
  }
  @media screen and (min-width: 1440px) {
    width: 590px;
  }
`;

export const InputStyled = styled.input`
  padding: 8px;
  max-width: 180px;
  text-align: center;
  border: 2px solid transparent;
  border-radius: 5px;
  transition: all var(--transition);
  appearance: none;
  -moz-appearance: textfield;

  &:hover,
  &:focus {
    border: 2px solid var(--accent-color);
    outline: 0;
  }

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
