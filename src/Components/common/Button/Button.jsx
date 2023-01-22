import styled from 'styled-components';

export const Button = styled.button`
  padding: 2px 10px;
  border-radius: 5px;
  font-size: 14px;
  background-color: #aacb73;
  border: 1px solid grey;
  display: flex;
  align-items: center;
  gap: 4px;
  &:hover {
    background-color: rgb(224, 239, 251);
  }
  &:active {
    background-color: rgb(172, 215, 250);
  }
`;
