import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !isDarkMode ? 'dark' : 'light';
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', newMode);
  };

  // Apply dark mode on page load based on localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="bg-[var(--color-custom-light-background)] dark:bg-[var(--color-custom-dark-blue)] h-15 flex justify-between">
      <h1 className="text-xl font-bold ml-10 mt-5 text-[var(--color-text-black)] dark:text-[var(--color-text-light)]">
        Where in the world?
      </h1>
      <div className="flex items-center">
        <span className="text-[var(--color-text-black)] dark:text-[var(--color-text-light)]">
          {isDarkMode ? '🌙' : '🌞'}
        </span>
        <button
          onClick={toggleDarkMode}
          className="hover:text-gray-300 mt-5 mr-2 transition text-[var(--color-text-black)] dark:text-[var(--color-text-light)]"
        >
          Dark Mode
        </button>
      </div>
    </div>
  );
};

export default Navbar;
