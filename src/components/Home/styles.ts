import { Col, Container } from "react-bootstrap";
import styled from "styled-components";

export const CustomContainer = styled(Container)`
  height: calc(100% - 3.625rem);
  color: wheat;
  border: 1px solid red;

  @media only screen and (max-width: 992px) {
    height: auto;
    margin-top: 5rem;
  }

  @media screen and (min-width: 993px) {
    margin-top: 3.625rem;
    display: flex;
    justify-content: center;
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
