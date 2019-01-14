import React from 'react';

import Toggle from './Toggle';
import useDarkMode from 'use-dark-mode';
// import useDarkMode from './useDarkMode';

const DarkModeToggle = () => {
  const [isDarkMode, setDarkMode, clearDarkMode, toggleDarkMode] = useDarkMode(
    false,
    { className: 'dark-mode', element: document.body }
  );

  return (
    <>
      <div className="dark-mode-toggle">
        <button type="button" onClick={clearDarkMode}>
          ☀
        </button>
        <Toggle checked={isDarkMode} onChange={toggleDarkMode} />
        <button type="button" onClick={setDarkMode}>
          ☾
        </button>
      </div>
    </>
  );
};

export default DarkModeToggle;
