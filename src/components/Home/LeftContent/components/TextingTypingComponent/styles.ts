import styled, { keyframes } from "styled-components";
import colorPallete from "../../../../../utils/colors";

const animateCursos = keyframes`
  0% { color: ${colorPallete.black03}; opacity: 0; }
  100% { color: wheat }
`;

export const AnimatedCursor = styled.span`
  animation-name: ${animateCursos};
  animation-duration: 750ms;
  animation-iteration-count: infinite;
`;
