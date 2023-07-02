import React from 'react';
import { useDisplayText } from '../hooks/useDisplayText';

export const App = () => {
  const { displayText, addToDisplay, clearDisplay } = useDisplayText();

  const onAddClick = () => {
    const inputValue = document.getElementById('inputText').value;
    addToDisplay(inputValue);
    document.getElementById('inputText').value = '';
  };

  const onClearClick = () => {
    clearDisplay();
    document.getElementById('inputText').value = '';
  };

  return (
    <div>
      <input type="text" id="inputText" />
      <button onClick={onAddClick}>Add</button>
      <button onClick={onClearClick}>Clear</button>
      <div>{displayText}</div>
    </div>
  );
};
