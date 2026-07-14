import {
  Container,
  DropdownDivider,
  Image,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import { CustomButton as Button, CustomNavBar as Navbar } from "./styles";
import { HeaderProps } from "./types";
import { useState } from "react";

type PossibleKeys = "home" | "about" | "services" | "career";

export default function Header(props: HeaderProps) {
  const [activeKey, setActiveKey] = useState<PossibleKeys>("home");

  const keyIsActived = (key: PossibleKeys): boolean => key === activeKey;

  return (
    <>
      <Navbar expand="md" className="bg-body-tertiary" data-bs-theme="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">
            <Image
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD6klEQVR4nO2aSWgUQRSGfxfcd1Dw6C568CBE9KLeBPWgIF5EUbveJMGAUYNoAgYPouhNPRhwwaDiAorRiCuIgooLHvQSjBvJVPVEk4gDUYmO1Djd1rRjuieZSfdM14O6TL1X9d5Xy6uqHkCLFi1atGjRokVLZvlUgTGCUCMIzwQhLgiJgJe4YHgqGKql7+iLcMICTogGIKheFU5o5RGU9Cr4VsJsTuj0O4gcQOhoKcWsrAEIwj2/nc8ZBIY7WQUfjWCO307numQ1CwSB/HY4D8XIBkBNABzOdanxDIAz1AbA4ZwWGVMhAOiSu3ZYAbyPbsTEV2swRBAaQgeAE6qs/qMM5aECwAndMcJku3/CpVABEIRGq++PmzFBMHwLFQBOWKv0vSUvffQnAE74IQhHBeEUJ/xy0e14twHDrL6TN7n0+kucoV4uk0IBEDcJy5S2rrg4dszWNTDXUd9g1ZmE1X1ZGv0F4LMgLExri3C7JxuTYZGie9BRf83R1lLO8CWQADhDixxBq40EMEAw7HexaZJ6Sf09GJzx7YGhWvUtamC+YDADBYAzNJuEaXbwazBITm1XWyU4Tljeg+7hxB4MtHRFGaZywpugAHjGSzHJsk2d5M67OkT4xQ1MsYMiXHAJoF7OEktfnhs4w0u/ATxv24TRtt06jOQMtzza3rXsPpRhvLwHeIB2Wc0YqTPDa98AmAw7VDvBcMTriJgRrLfsTEJZFjPucJqvhCrfAHCGFxlmwA0Pdl/NcoxSwD3xFDzD/XbCWHsGVGK4IDz2cwkknHuAXKeC4YSLzUlLP2Zgpsfgr8qALbuODRjHCQ+CkwU2Y7oNARjACYf+qx/BEmX0e0yVSX3C6b5sgHkHIP44GTUjmOfhae29ldKS6ZLQ6tL2AeusYD3XyzYCeRLkhM4ow+I0CAzXHTp7rTp5ZHZp72aaXxGUCEJb0O8CXcLAqkwAZO6PRTBDmSHnXABcdsCKF8ptsFveBAXDRYcTD9VNzC33p26Sx2V6Td0wC/w9wABTRr80L30EGECXHHW7D8KjUAHgDGfV3O/2UFJ0AET69N/Xn8EHAwChUR5/ZRbobSordAAJQfjOGX72d/BBApDwq2gATAOo1QC8Cg8TgNifB4m3fjvoA5Dm5MVMEHb77YyPEHYV5XTPAkCtnAHbM32nK1bhhDobAkOl/GGlDYDwpqkCQ1GkIr8pqPsdJyyXb2wjHH9MOl6MEJLBq6/VDO32K7O6DFJLoVkuB07YWSSlLkOm2wrHM/aZEG1+9epL89/P2YRt+fqfXiAKQ7sc+X+CVyW1J6yUO2Tyo0VxlEpuYIX6ZUmLFi1atAD4DZVWsiDU+rmHAAAAAElFTkSuQmCC"
              alt="laptop-coding--v2"
              rounded
              height={48}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-between"
          >
            <Nav className="me-auto left-auto">
              <Nav.Link
                className="navItem"
                active={keyIsActived("home")}
                onClick={() => setActiveKey("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                className="navItem"
                active={keyIsActived("about")}
                onClick={() => setActiveKey("about")}
              >
                About me
              </Nav.Link>
              <Nav.Link
                className="navItem"
                active={keyIsActived("services")}
                onClick={() => setActiveKey("services")}
              >
                Services
              </Nav.Link>
              <Nav.Link
                className="navItem"
                active={keyIsActived("career")}
                onClick={() => setActiveKey("career")}
              >
                Career
              </Nav.Link>
            </Nav>
            <DropdownDivider />
            <Button variant="dark">Contact me</Button>
            <NavDropdown
              title={
                <Image
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAYAAADnRuK4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFLElEQVR4nO3cWegVVRzA8WsaWRQaVlDQai9CRJtt1EMvarZA9hDYYhv01J7Vm/EnSP8VvQUFWbY+RFBpRRsEgmaRBEUbFUU9lNq+r984OA9y+58zc2fOzL1Xvx/wyTPnN+eeHzNnm3+vJ0mSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEnSTo2IYd+XxoQJpEZMIDViAqkRE0iNmEC7EMZQT6ODMdTT6GAM9TQ6GEM9jQ7GUE+jgzHUkwLg1UiOrB/2vWnEAScmHjJLhn1/GnHA05Hk+RSYPuz70wgD5gH/RBLommHfn1oAnArck6muxyLJ8z2wT44YGiHAVcAfRSff0LCu4xJPn8l8d62hA/YA7u/r5L+BhQ3qfDmSPD8BB+RtgYYmdCawIdLZW4HDatS5kLgV7bREQwHsCbyV6PDNocwA9U0H3o7UtcWxz04IOLR42sQ8AUyrWNe1iXqua781GgrgDOCvROffVqGOg4EfI9d/FsZa3bRGQwFcn0igf4ELay4aBhd01xINDfBoIgl+C+tEkeuWJK57vua9nELayY0brLyAmcCmRKdtA46cYib3VaT8r8ARNe/lkZIEejhbw5UPcCDwRaLj3gNmF2WnAesSZW+peQ/7FU+8lN9dUxpRxUryL4nOexGYUTLregfYvWb8W0uSp1GCqgPA0mLwHPNU4inxZzjKUTPubsVufRWfu6s/woAJ6qn9ZADOGTDW2XlbrWyKMc6aATv0tSZPBeCFAePVmuWpI2EcA7xSsTPDdsVBDWLNTezixzZoQ/m5eVutrIBZxaA4JYyXzm0Y567E8sHsIkGncme+1qoVwJUlCRS2MeY13NjdFql7VVFmMvL/3wJ7ZW2wsp9U/JlyXzZYOLw88Yo6fIeN33BWaSqXZW+4mgOOAb6jujC1PqRGnDcj9a3rK/dcpNzmrA1Xc8DRidcKJavV+w8Q56REXWf2lV2cKFtr7UktAOYD35RsJaQWGsNBtVkVY62J1PFJWFicYmnho0j5h1r7QVQdcDrwQyI5wuH7s4CrSdsI7F0Sa05iRfumyDXLE0ld+cmnFgCLSvbBwsGz83Yov6IkiV4K+2aJeDcndvLnRK7ZN3GPy9v6bVQCuKLYxyIxI/rfwbIwza5zkL5k32t1yb0+mDj96P5Yl4qOvJu0MH1eFrk+jEvuGyR5iuvCazBmfoUTAzGLm/4mqih8KQE8Q1oY85xfIQkfH+QTnsSUfFPFe3+jytRf7X6//m5J8oSxxqIBPut5smLypBYFl1WMd2niVVtrQVMVhZXbksEyxRrQaQPWO6NiuclEzJkDfFW7JbX9oRaE8zqU+6D//HPG+KmOz6VyImpAxTdcqY8J14dzyS3Gj716cqv0KlQNYYsgcvbm3rpnmQeIHRv85lZpMK6agNv7/nLG0g5iHku3Tmi7TbusYuodVorfB47qKObqjhPogS7atcsqvsHq5DBWyRZEW6JbIhozYXO0rU4mnZw35muFhqLY7viwzdcM8dfjx/3HQjSes75WB7qkB+iVVtM1ooC1kY59PXOc2B+HeDZnHHUonJFO7HtdkjnWsrLD+RozwMpIp27Nvd3A9m2SryPx7sgZSx0o6dCVLcVc1VXCqmXAxV2/UkgfFbmojZhqSXGwfiprW467LhJ3Q5txlf+jxKFMq0kvGxzfZmxlAiwoBtD9/ybaXthj+z7fRCT+gjZjS5IkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkqTc2/gPNGD3rBbnrXgAAAABJRU5ErkJggg=="
                  rounded
                  height={48}
                />
              }
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Português</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Espanhol</NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
