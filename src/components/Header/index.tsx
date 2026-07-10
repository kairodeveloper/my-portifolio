import { TranslateOutlined } from "@mui/icons-material";
import { Button, ButtonGroup, IconButton } from "@mui/material";
import {
  ContactButton,
  HeaderBoundary,
  HeaderContainer,
  HeaderItemContainer
} from "./styles";
import { HeaderProps } from "./types";

import { useEffect } from "react";

export default function Header(props: HeaderProps) {
  const titleHeader = "</>";
  const nameHeader = "Kairo Emannoel";
  return (
    <HeaderContainer>
      <HeaderBoundary>
        <HeaderItemContainer>
          <ButtonGroup variant="text" aria-label="Basic button group">
            <Button variant="text" style={{ color: "#b3b3b3", border: "none" }}>
              Home
            </Button>
            <Button variant="text" style={{ color: "#b3b3b3", border: "none" }}>
              Sobre mim
            </Button>
            <Button variant="text" style={{ color: "#b3b3b3", border: "none" }}>
              Meus Projetos
            </Button>

            {/* <ContactButton variant="contained" color="primary" disableElevation>
              Contato
            </ContactButton> */}
          </ButtonGroup>
        </HeaderItemContainer>
        <HeaderItemContainer
          style={{ width: "20%", flexDirection: "row-reverse" }}
        >
          <ContactButton variant="contained" style={{ color: "#FFF" }}>
            Contato
          </ContactButton>
          <IconButton style={{ color: "#FFF" }}>
            <TranslateOutlined />
          </IconButton>
        </HeaderItemContainer>
      </HeaderBoundary>
    </HeaderContainer>
  );
}
