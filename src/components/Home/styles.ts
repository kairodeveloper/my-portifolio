import { Col, Container } from "react-bootstrap";
import styled from "styled-components";

export const CustomContainer = styled(Container)`
  margin-top: 3.625rem;
  color: wheat;

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    height: auto;
    margin-top: 5rem;
  }
`;

export const JustifiedCol = styled(Col)`
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
`;

export const SpanColImage = styled.span`
  height: 100%;

  @media screen and (min-width: 768px) {
    display: grid;
    place-items: center;
  }
`;
