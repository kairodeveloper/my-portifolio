import { Button, Navbar } from "react-bootstrap";
import styled from "styled-components";
import colorPallete from '../../utils/colors';

export const CustomNavBar = styled(Navbar)`
  background-color: ${colorPallete.black02} !important;

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
  background-color: ${colorPallete.orange01};
  border-color: ${colorPallete.orange01};
`;
