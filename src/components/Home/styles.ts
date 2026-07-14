import { Col, Container } from "react-bootstrap";
import styled from "styled-components";

export const CustomContainer = styled(Container)`
  min-height: calc(100vh - 3.625rem);
  margin-top: 3.625rem;
  color: wheat;
`;

export const JustifiedCol = styled(Col)`
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
`;

export const SpanColImage = styled.span`
  height: 100%;
  display: grid;
  place-items: center;
  margin-bottom: 16px;
`;
