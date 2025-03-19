import { createContext, useContext, useEffect } from "react";
import { useLocalStorageState } from "hooks/useLocalStorageState";

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  const isColorSchemaDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    isColorSchemaDark,
    "isDarkMode"
  );

  useEffect(() => {
    const rootClass = document.documentElement.classList;

    if (isDarkMode) {
      rootClass.add("dark-mode");
      rootClass.remove("light-mode");
    } else {
      rootClass.add("light-mode");
      rootClass.remove("dark-mode");
    }
  }, [isDarkMode]);

  function toggleDarkMode() {
    setIsDarkMode((isDark) => !isDark);
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeContext);

  if (!context)
    throw new Error("useDarkMode must be used within a DarkModeProvider");

  return context;
}

export { DarkModeProvider, useDarkMode };
