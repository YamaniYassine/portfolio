import React, { useContext } from 'react';
import './CustomToggleSwitch.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { FaMoon } from 'react-icons/fa';
import { FiSun } from 'react-icons/fi';

const CustomToggleSwitch = () => {
  const { darkMode, toggleTheme, isAuto } = useContext(ThemeContext);
  const label = `Switch to ${darkMode ? 'light' : 'dark'} mode${isAuto ? ' (currently following system)' : ''}`;

  return (
    <button
      type="button"
      className="ts-wrapper"
      onClick={toggleTheme}
      title={label}
      aria-label={label}
      aria-pressed={darkMode}
    >
      <span className={`ts-track ${darkMode ? 'dark' : 'light'}`}>
        <span className="ts-thumb">
          <span className="ts-icon">
            {darkMode
              ? <FiSun size={11} color="#185FA5" />
              : <FaMoon size={10} color="#94a3b8" />
            }
          </span>
        </span>
      </span>
    </button>
  );
};

export default CustomToggleSwitch;
