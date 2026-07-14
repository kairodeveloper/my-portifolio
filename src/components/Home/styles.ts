import { Col, Container } from "react-bootstrap";
import styled from "styled-components";

export const CustomContainer = styled(Container)`
  height: calc(100vh - 3.625rem);
`;

export const JustifiedCol = styled(Col)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
