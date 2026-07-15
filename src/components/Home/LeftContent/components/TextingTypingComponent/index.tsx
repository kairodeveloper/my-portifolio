import { memo, useEffect, useState } from "react";
import { AnimatedCursor } from "./styles";

const DELAY_START = 200;
const SPEED_TIMEOUT = 30;
const SPEED_PAUSE_TIMEOUT = 2000;

type WordObject = {
  text: string;
};

export interface TextingTypingComponentProps {
  words: WordObject[];
}

const TextingTypingComponent = ({ words }: TextingTypingComponentProps) => {
  const [mainText, setMainText] = useState<string>("");
  const [position, setPosition] = useState<number>(0);

  const write = (
    text: string,
    positionParent: number,
    index = 0,
    reverse = false,
  ) => {
    if (reverse) {
      if (index === 0) {
        setPosition(
          positionParent === words.length - 1 ? 0 : positionParent + 1,
        );
        return;
      }

      setMainText(text.slice(0, index - 1));

      setTimeout(() => {
        write(text, positionParent, index - 1, true);
      }, SPEED_TIMEOUT);

      return;
    }

    setMainText(text.slice(0, index + 1));

    const finished = index === text.length;

    setTimeout(
      () => {
        write(text, positionParent, finished ? index - 1 : index + 1, finished);
      },
      finished ? SPEED_PAUSE_TIMEOUT : SPEED_TIMEOUT,
    );
  };

  useEffect(() => {
    const { text } = words[position ?? 0];

    setTimeout(() => {
      write(text, position ?? 0);
    }, DELAY_START);
  }, [position]);

  return (
    <>
      <span>
        {mainText}
        <AnimatedCursor>|</AnimatedCursor>
      </span>
    </>
  );
};

export default memo(TextingTypingComponent);
