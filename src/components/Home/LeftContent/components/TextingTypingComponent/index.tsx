import { memo, useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { AnimatedCursor } from "./styles";

const DELAY_START = 200;
const SPEED_TIMEOUT = 50;
const SPEED_PAUSE_TIMEOUT = 2000;

type WordObject = {
  text: string;
  delay?: number;
};

export interface TextingTypingComponentProps {
  words: WordObject[];
}

const TextingTypingComponent = ({ words }: TextingTypingComponentProps) => {
  const [mainText, setMainText] = useState<string>("");

  const testes: WordObject[] = [
    {
      text: "Kairo",
      delay: 1000,
    },
    {
      text: "Emannoel",
      delay: 4000,
    },
  ];

  const write = async (text: string, index = 0, reverse = false) => {
    if (reverse) {
      if (index > 0) {
        setMainText(text.slice(0, index - 1));
        setTimeout(() => write(text, index - 1, true), SPEED_TIMEOUT);
      }
    } else {
      if (index < text.length) {
        setMainText(text.slice(0, index + 1));
        setTimeout(() => write(text, index + 1), SPEED_TIMEOUT);
      }

      if (index === text.length) {
        setTimeout(() => write(text, index - 1, true), SPEED_PAUSE_TIMEOUT);
      }
    }
  };

  // useEffect(() => {
  //   words.forEach((word) => {
  //     setTimeout(() => {
  //       write(word.text);
  //     }, word.delay ?? DELAY_START);
  //   });
  // }, []);

  // useEffect(() => {
  //   const delay = (ms: number) =>
  //     new Promise((resolve) => setTimeout(resolve, ms));

  //   for (let index = 0; index < words.length; index++) {
  //     setInterval(async () => {
  //       console.log("aasd", words[index].text);
  //       await delay(5000);
  //     }, words[index].delay);

  //     index = (index + 1) % words.length;
  //   }
  // }, []);
  useEffect(() => {
    const testee = async (word: string, delay_?: number) => {
      console.log("start");

      const promise = new Promise((resolve) => {
        setTimeout(() => write(word), delay_ ?? DELAY_START);
      });

      await promise;
      console.log(`end ${word}`);
    };

    words.map(async (it) => {
      await testee(it.text, it.delay);
    });
  }, []);

  return (
    <>
      <Row>
        <span>
          {mainText} <AnimatedCursor>|</AnimatedCursor>
        </span>
      </Row>
    </>
  );
};

export default memo(TextingTypingComponent);
