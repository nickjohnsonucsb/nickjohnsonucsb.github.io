import { useState, useEffect, useRef } from "react";

export default function TypeWriter({
  phrases,
  deletingSpeed = 50,
  delay = 5000,
}) {
  const [text, setText] = useState("");
  const [isFinished, setIsFinished] = useState(false);
  const typeTrack = useRef({
    index: 0,
    isDeleting: false,
    loopNum: 0,
    typingRate: 150,
    timer: null,
  });
  useEffect(() => {
    const handleTyping = () => {
      setIsFinished(false);
      const currentPhrase = phrases[typeTrack.current.loopNum % phrases.length];
      typeTrack.current.index =
        typeTrack.current.index + (typeTrack.current.isDeleting ? -1 : 1);
      const currentPhraseText = currentPhrase.text;
      const updatedText = currentPhraseText.substring(
        0,
        typeTrack.current.index
      );

      setText(updatedText);
      if (!typeTrack.current.isDeleting && updatedText === currentPhraseText) {
        setIsFinished(true);
        typeTrack.current.isDeleting = true;
        typeTrack.current.typingRate = deletingSpeed;
        typeTrack.current.timer = setTimeout(
          handleTyping,
          currentPhrase.delay ?? delay
        );
        return;
      } else if (typeTrack.current.isDeleting && updatedText === "") {
        typeTrack.current.isDeleting = false;
        typeTrack.current.loopNum = typeTrack.current.loopNum + 1;
        typeTrack.current.typingRate =
          phrases[typeTrack.current.loopNum % phrases.length].speed;
      }
      typeTrack.current.timer = setTimeout(
        handleTyping,
        typeTrack.current.typingRate
      );
    };
    typeTrack.current.timer = setTimeout(
      handleTyping,
      typeTrack.current.typingRate
    );
    return () => {
      clearTimeout(typeTrack.current.timer);
    };
  }, []);

  return (
    <>
      {text}
      <span
        className="title-md"
        style={{
          animation: isFinished ? "blink 1s step-end infinite" : "none",
        }}
      >
        |
      </span>
    </>
  );
}
