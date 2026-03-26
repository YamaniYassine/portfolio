import { useEffect, useRef, useState } from 'react';

/**
 * Cycles through an array of strings with a typewriter effect.
 * Types forward, pauses, then deletes before moving to the next word.
 *
 * @param {string[]} words - Array of strings to cycle through.
 * @returns {string} The current displayed substring.
 */
export function useTypingEffect(words) {
  const [display, setDisplay]   = useState('');
  const [wordIdx, setWordIdx]   = useState(0);
  const [charIdx, setCharIdx]   = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timer = useRef(null);

  useEffect(() => {
    const word = words[wordIdx];

    const tick = () => {
      if (!deleting) {
        setDisplay(word.slice(0, charIdx + 1));
        if (charIdx + 1 === word.length) {
          timer.current = setTimeout(() => setDeleting(true), 1800);
          return;
        }
        setCharIdx(c => c + 1);
      } else {
        setDisplay(word.slice(0, charIdx - 1));
        if (charIdx - 1 === 0) {
          setDeleting(false);
          setWordIdx(i => (i + 1) % words.length);
          setCharIdx(0);
          return;
        }
        setCharIdx(c => c - 1);
      }
    };

    timer.current = setTimeout(tick, deleting ? 45 : 75);
    return () => clearTimeout(timer.current);
  }, [display, deleting, wordIdx, charIdx, words]);

  return display;
}