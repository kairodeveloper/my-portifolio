import { memo, useEffect, useState } from "react";
import { AnimatedCursor } from "./styles";

const DELAY_START = 200;
const SPEED_TIMEOUT = 50;
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
      let conditionIndexEqualZero = index === 0;

      if (conditionIndexEqualZero) {

      }

      if (index > 0) {
        setMainText(text.slice(0, index - 1));
        setTimeout(
          () => write(text, positionParent, index - 1, true),
          SPEED_TIMEOUT,
        );
      }

      // end of 'loop'
      if (index === 0) {
        setPosition(position === words.length - 1 ? 0 : positionParent + 1);
      }

    } else {
      let conditionIndexEqualLenght = index === text.length;

      setMainText(text.slice(0, index + 1));
      setTimeout(
        () =>
          write(
            text,
            positionParent,
            conditionIndexEqualLenght ? index - 1 : index + 1,
            conditionIndexEqualLenght,
          ),
        conditionIndexEqualLenght ? SPEED_PAUSE_TIMEOUT : SPEED_TIMEOUT,
      );
    }
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
        {mainText}<AnimatedCursor>|</AnimatedCursor>
      </span>
    </>
  );
};

export default memo(TextingTypingComponent);
