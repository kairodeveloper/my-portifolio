import { Col } from "react-bootstrap";
import styled from "styled-components";

export const CustomCol = styled(Col)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: wheat;
`;

export const TitleGreeting = styled.p`
  margin-bottom: 0 !important;
`;

export const TitleName = styled.h4`
  margin-bottom: 0 !important;
`;

export const TitleDev = styled.h1`
  color: #ff6f00;
  margin: 3vh 0 5vh;
  line-height: 1;
`;
