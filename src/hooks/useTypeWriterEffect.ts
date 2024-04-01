import { useState, useEffect } from 'react';

const useTypewriterEffect = (text: string, typingSpeed: number = 150, restartDelay: number = 1000) => {
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (!isDeleting && typedText.length === text.length) {
      // Once the full text is displayed, wait for `restartDelay` before starting to delete
      timeoutId = setTimeout(() => setIsDeleting(true), restartDelay);
    } else if (isDeleting && typedText === '') {
      // Once the text is fully deleted, wait for `restartDelay` before starting to type again
      setIsDeleting(false);
    } else if (isDeleting) {
      // Delete characters one by one
      timeoutId = setTimeout(() => {
        setTypedText(text.substring(0, typedText.length - 1));
      }, typingSpeed);
    } else {
      // Type characters one by one
      timeoutId = setTimeout(() => {
        setTypedText(text.substring(0, typedText.length + 1));
      }, typingSpeed);
    }

    return () => clearTimeout(timeoutId);
  }, [typedText, text, typingSpeed, isDeleting, restartDelay]);

  return typedText;
};

export default useTypewriterEffect;