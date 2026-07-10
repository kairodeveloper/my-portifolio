import { Navbar, Button } from "react-bootstrap";
import styled from "styled-components";

export const CustomNavBar = styled(Navbar)`
  background-color: #121212;
  
  --bs-navbar-padding-y: 0;

  #basic-nav-dropdown::after {
    margin-left: -12px;
    color: white;
  }

  .left-auto {
    margin-left: auto !important;
  }

  .navItem {
    padding: 2vh 3vw !important;
  }
`;

export const CustomButton = styled(Button)`
  background-color: #e86600;
  border-color: #e86600;
`;
