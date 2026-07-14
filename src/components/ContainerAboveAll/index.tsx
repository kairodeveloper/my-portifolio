import { memo, ReactNode } from "react";
import { ContainerBackground } from "./styles";

interface ContainerAboveAllProps {
  children?: ReactNode | ReactNode[];
}

const ContainerAboveAll = ({ children }: ContainerAboveAllProps) => (
  <ContainerBackground>{children}</ContainerBackground>
);

export default memo(ContainerAboveAll);
