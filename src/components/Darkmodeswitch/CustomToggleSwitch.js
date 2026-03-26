import React, { useContext } from 'react';
import './CustomToggleSwitch.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { FaMoon } from 'react-icons/fa';
import { FiSun } from 'react-icons/fi';

const CustomToggleSwitch = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="ts-wrapper" onClick={toggleTheme} title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}>
      <div className={`ts-track ${darkMode ? 'dark' : 'light'}`}>
        <div className="ts-thumb">
          <span className="ts-icon">
            {darkMode
              ? <FiSun size={11} color="#185FA5" />
              : <FaMoon size={10} color="#94a3b8" />
            }
          </span>
        </div>
      </div>
    </div>
  );
};

export default CustomToggleSwitch;