import { useState } from 'react';

export const useDisplayText = () => {
  const [displayText, setDisplayText] = useState('');

  const addToDisplay = (text) => {
    if (displayText === '') {
      setDisplayText(text);
    } else {
      setDisplayText(`${displayText}-${text}`);
    }
  };

  const clearDisplay = () => {
    setDisplayText('');
  };

  return { displayText, addToDisplay, clearDisplay };
};