import styled from "styled-components";
import colorPallete from "../../utils/colors";
import { Button } from "@mui/material";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const HeaderContainer = styled.div`
  padding: 8px 0;
  height: 56px;
  border: 1px solid red;
`;

export const HeaderBoundary = styled(Row)`
  justify-content: space-between;
`;

export const HeaderItemContainer = styled(Row)`
`;

export const Logo = styled.div`
`;

export const Name = styled(Logo)`
`;

export const ContactButton = styled(Button)`
`;

export const LanguageButton = styled(Button)`
  height: 44px;
  width: 20% !important;
  border-radius: 45px !important;
`;
