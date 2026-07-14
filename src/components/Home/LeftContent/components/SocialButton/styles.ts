import styled from "styled-components";

export const CustomButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: #ffffff48;
  color: white;
  border-width: 0;
  border-radius: 100%;
  margin-right: 2vw !important;
  display: grid;
  place-items: center;
  padding: 0 !important;

  transition:
    background-color 0.5s ease,
    color 0.5s ease;

  &:hover {
    background-color: #d35d03;
    color: #121212;
  }
`;
