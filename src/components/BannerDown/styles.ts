import { Col, Container } from "react-bootstrap";
import styled from "styled-components";

export const CustomContainer = styled(Container)`
  min-height: 5rem;
  border-radius: 0.5rem;
  background-color: #111111a9;
  padding: 1rem;
`;


export const CustomCol = styled(Col)<{ borderedRight?: boolean }>`
  border-right: ${({ borderedRight }) =>
    borderedRight ? "1px solid orange" : "none"};
`;

export const CustomColTop = styled(Col)<{ borderedRight?: boolean }>`
  font-weight: bold;
  color: orange;
  border-right: ${({ borderedRight }) =>
    borderedRight ? "1px solid orange" : "none"};
`;
