import { memo, ReactNode } from "react";
import { ContainerBackground, OrangeShape } from "./styles";

interface ContainerAboveAllProps {
  children?: ReactNode | ReactNode[];
}

const ContainerAboveAll = ({ children }: ContainerAboveAllProps) => (
  <ContainerBackground>
    {children}
    <OrangeShape />
  </ContainerBackground>
);

export default memo(ContainerAboveAll);
