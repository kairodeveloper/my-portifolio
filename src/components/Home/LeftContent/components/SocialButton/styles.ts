import styled from "styled-components";
import colorPallete from "../../../../../utils/colors";

export const CustomButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: #ffffff48;
  color: white;
  border-width: 0;
  border-radius: 100%;
  margin-right: 16px !important;
  display: grid;
  place-items: center;
  padding: 0 !important;

  transition:
    background-color 0.5s ease,
    color 0.5s ease;

  &:hover {
    background-color: ${colorPallete.orange01};
    color: ${colorPallete.black02};
  }
`;
