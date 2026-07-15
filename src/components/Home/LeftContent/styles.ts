import { Col } from "react-bootstrap";
import styled from "styled-components";
import colorPallete from "../../../utils/colors";

export const CustomCol = styled(Col)`
  color: wheat;
`;

export const TitleGreeting = styled.p`
  margin-top: 1rem;
  font-size: 1.1rem;
  margin-bottom: 0 !important;
  font-family: "Lucida Console", "Courier New", monospace;
  color: ${colorPallete.orange01};
`;

export const TitleName = styled.h4`
  margin-bottom: 0 !important;
`;

export const TitleDev = styled.p`
  color: #ff6f00;
  line-height: 1;
  font-weight: bold;
  font-size: 4rem;
`;
