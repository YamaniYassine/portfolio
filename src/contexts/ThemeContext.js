import React, { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

/*
 * Theme strategy
 * ──────────────
 * - By default the site follows the OS / browser setting (prefers-color-scheme)
 *   and updates live if the visitor switches their system theme.
 * - The navbar toggle sets a manual override, persisted in localStorage.
 * - If the visitor toggles back to whatever the system already uses,
 *   the override is cleared and the site returns to "auto".
 */
const STORAGE_KEY = 'theme-pref';
const mq = () => window.matchMedia?.('(prefers-color-scheme: dark)');

const readPref = () => {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return v === 'dark' || v === 'light' ? v : 'system';
  } catch {
    return 'system';
  }
};

const writePref = (v) => {
  try {
    if (v === 'system') localStorage.removeItem(STORAGE_KEY);
    else localStorage.setItem(STORAGE_KEY, v);
  } catch { /* storage unavailable — keep in-memory only */ }
};

export const ThemeProvider = ({ children }) => {
  const [pref, setPref]           = useState(readPref);
  const [systemDark, setSystemDark] = useState(() => !!mq()?.matches);

  /* Follow live OS changes */
  useEffect(() => {
    const m = mq();
    if (!m) return;
    const onChange = (e) => setSystemDark(e.matches);
    m.addEventListener('change', onChange);
    return () => m.removeEventListener('change', onChange);
  }, []);

  const darkMode = pref === 'system' ? systemDark : pref === 'dark';

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
    document.documentElement.style.colorScheme = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  const toggleTheme = () => {
    const next = darkMode ? 'light' : 'dark';
    const nextPref = (next === 'dark') === systemDark ? 'system' : next;
    writePref(nextPref);
    setPref(nextPref);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme, isAuto: pref === 'system' }}>
      {children}
    </ThemeContext.Provider>
  );
};
