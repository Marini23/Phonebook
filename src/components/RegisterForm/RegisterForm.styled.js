import styled from 'styled-components';

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 20px;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  height: 48px;
  font: inherit;
  font-size: 20px;
  border: solid 1px black;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
export const BtnSubmit = styled.button`
  display: inline-block;
  width: 120px;
  height: 48px;
  border: solid 1px black;
  color: black;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;
