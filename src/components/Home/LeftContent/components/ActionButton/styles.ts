import { Button } from "react-bootstrap";
import styled from "styled-components";

const BaseButton = styled(Button)<{ filled?: boolean }>`
  width: fit-content;
  height: 30px;
  line-height: 15px;
  margin-left: 1vw;

  transition:
    background-color 0.5s ease,
    color 0.5s ease;
`;

export const CustomFilledButton = styled(BaseButton)`
  background-color: #d35d03;
  color: white;
  border: none;

  &:hover,
  &:focus {
    background-color: #d35d03 !important;
    color: #121212;
  }
`;

export const CustomBlankedButton = styled(BaseButton)`
  background-color: transparent;
  border-color: white;
  color: white;
  
  &:hover,
  &:focus {
    background-color: #9e9e9e !important;
    border-color: white !important;
    color: #121212;
  }
`;
