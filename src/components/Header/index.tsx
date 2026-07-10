import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";

import { HeaderProps } from "./types";

export default function Header(props: HeaderProps) {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <Image
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAYAAADnRuK4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFLElEQVR4nO3cWegVVRzA8WsaWRQaVlDQai9CRJtt1EMvarZA9hDYYhv01J7Vm/EnSP8VvQUFWbY+RFBpRRsEgmaRBEUbFUU9lNq+r984OA9y+58zc2fOzL1Xvx/wyTPnN+eeHzNnm3+vJ0mSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEnSTo2IYd+XxoQJpEZMIDViAqkRE0iNmEC7EMZQT6ODMdTT6GAM9TQ6GEM9jQ7GUE+jgzHUkwLg1UiOrB/2vWnEAScmHjJLhn1/GnHA05Hk+RSYPuz70wgD5gH/RBLommHfn1oAnArck6muxyLJ8z2wT44YGiHAVcAfRSff0LCu4xJPn8l8d62hA/YA7u/r5L+BhQ3qfDmSPD8BB+RtgYYmdCawIdLZW4HDatS5kLgV7bREQwHsCbyV6PDNocwA9U0H3o7UtcWxz04IOLR42sQ8AUyrWNe1iXqua781GgrgDOCvROffVqGOg4EfI9d/FsZa3bRGQwFcn0igf4ELay4aBhd01xINDfBoIgl+C+tEkeuWJK57vua9nELayY0brLyAmcCmRKdtA46cYib3VaT8r8ARNe/lkZIEejhbw5UPcCDwRaLj3gNmF2WnAesSZW+peQ/7FU+8lN9dUxpRxUryL4nOexGYUTLregfYvWb8W0uSp1GCqgPA0mLwHPNU4inxZzjKUTPubsVufRWfu6s/woAJ6qn9ZADOGTDW2XlbrWyKMc6aATv0tSZPBeCFAePVmuWpI2EcA7xSsTPDdsVBDWLNTezixzZoQ/m5eVutrIBZxaA4JYyXzm0Y567E8sHsIkGncme+1qoVwJUlCRS2MeY13NjdFql7VVFmMvL/3wJ7ZW2wsp9U/JlyXzZYOLw88Yo6fIeN33BWaSqXZW+4mgOOAb6jujC1PqRGnDcj9a3rK/dcpNzmrA1Xc8DRidcKJavV+w8Q56REXWf2lV2cKFtr7UktAOYD35RsJaQWGsNBtVkVY62J1PFJWFicYmnho0j5h1r7QVQdcDrwQyI5wuH7s4CrSdsI7F0Sa05iRfumyDXLE0ld+cmnFgCLSvbBwsGz83Yov6IkiV4K+2aJeDcndvLnRK7ZN3GPy9v6bVQCuKLYxyIxI/rfwbIwza5zkL5k32t1yb0+mDj96P5Yl4qOvJu0MH1eFrk+jEvuGyR5iuvCazBmfoUTAzGLm/4mqih8KQE8Q1oY85xfIQkfH+QTnsSUfFPFe3+jytRf7X6//m5J8oSxxqIBPut5smLypBYFl1WMd2niVVtrQVMVhZXbksEyxRrQaQPWO6NiuclEzJkDfFW7JbX9oRaE8zqU+6D//HPG+KmOz6VyImpAxTdcqY8J14dzyS3Gj716cqv0KlQNYYsgcvbm3rpnmQeIHRv85lZpMK6agNv7/nLG0g5iHku3Tmi7TbusYuodVorfB47qKObqjhPogS7atcsqvsHq5DBWyRZEW6JbIhozYXO0rU4mnZw35muFhqLY7viwzdcM8dfjx/3HQjSes75WB7qkB+iVVtM1ooC1kY59PXOc2B+HeDZnHHUonJFO7HtdkjnWsrLD+RozwMpIp27Nvd3A9m2SryPx7sgZSx0o6dCVLcVc1VXCqmXAxV2/UkgfFbmojZhqSXGwfiprW467LhJ3Q5txlf+jxKFMq0kvGxzfZmxlAiwoBtD9/ybaXthj+z7fRCT+gjZjS5IkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkqTc2/gPNGD3rBbnrXgAAAABJRU5ErkJggg=="
              rounded
              height={48}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="me-auto">
              <Nav.Link active href="#home">
                Home
              </Nav.Link>
              <Nav.Link href="#link">About me</Nav.Link>
              <Nav.Link href="#home">Services</Nav.Link>
              <Nav.Link href="#home">Career</Nav.Link>

              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
