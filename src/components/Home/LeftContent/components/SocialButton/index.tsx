import { memo } from "react";
import { CustomButton as Button } from "./styles";

interface SocialButtonProps {
  svgPath: string;
}

const SocialButton = ({ svgPath }: SocialButtonProps) => {
  return (
    <>
      <Button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-linkedin"
          viewBox="0 0 16 16"
        >
          <path d={svgPath} />
        </svg>
      </Button>
    </>
  );
};

export default memo(SocialButton);
