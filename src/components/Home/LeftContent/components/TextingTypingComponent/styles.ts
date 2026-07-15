import styled, { keyframes } from "styled-components";
import colorPallete from "../../../../../utils/colors";

const animateCursos = keyframes`
  0% { color: ${colorPallete.black03}; opacity: 0; }
  100% { color: ${colorPallete.orange01} }
`;

export const AnimatedCursor = styled.span`
  animation-name: ${animateCursos};
  animation-duration: 1s;
  animation-iteration-count: infinite;
`;
