import React, { useContext } from 'react';
import './CustomToggleSwitch.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { FaMoon } from 'react-icons/fa';
import { FiSun } from "react-icons/fi";

const CustomToggleSwitch = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="theme-switch-wrapper d-flex align-items-center ms-md-3">
      <div className={`theme-switch ${darkMode ? 'active' : ''}`} onClick={toggleTheme}>
        <div className="switch-handle d-flex justify-content-center align-items-center">
          {darkMode ? <FiSun size={18} color="#2f3336"/> : <FaMoon size={16} color="#fff" />}
        </div>
      </div>
    </div>
  );
};

export default CustomToggleSwitch;
