import { useState, useEffect } from "react";

export default function Typewriter({ strings, pauseFor = 2000, deleteSpeed = 50, loop = true, cursor = "_" }) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);       // Which string
  const [subIndex, setSubIndex] = useState(0); // Which character
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index >= strings.length && !loop) return;

    const currentString = strings[index % strings.length];

    // typing
    if (!deleting && subIndex < currentString.length) {
      const timeout = setTimeout(() => setSubIndex(subIndex + 1), 100);
      return () => clearTimeout(timeout);
    }

    // pause at end
    if (!deleting && subIndex === currentString.length) {
      const timeout = setTimeout(() => setDeleting(true), pauseFor);
      return () => clearTimeout(timeout);
    }

    // deleting
    if (deleting && subIndex > 0) {
      const timeout = setTimeout(() => setSubIndex(subIndex - 1), deleteSpeed);
      return () => clearTimeout(timeout);
    }

    // move to next string
    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex(index + 1);
    }
  }, [subIndex, deleting, index, strings, pauseFor, deleteSpeed, loop]);

  return (
    <span>
      {strings[index % strings.length].substring(0, subIndex)}
      <span className="cursor">{cursor}</span>
    </span>
  );
}
