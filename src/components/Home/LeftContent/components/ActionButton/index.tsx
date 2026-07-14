import { memo, ReactNode } from "react";
import { CustomFilledButton, CustomBlankedButton } from "./styles";

interface ActionButtonProps {
  text: string;
  filled?: boolean;
}

const ActionButton = ({ text, filled }: ActionButtonProps) => {
  return filled ? (
    <CustomFilledButton>{text}</CustomFilledButton>
  ) : (
    <CustomBlankedButton>{text}</CustomBlankedButton>
  );
};

export default memo(ActionButton);
