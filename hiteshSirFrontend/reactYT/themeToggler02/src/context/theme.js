import { useContext, createContext } from "react";

// context creation
export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

//provider
export const ThemeProvider = ThemeContext.Provider;

//custom hook
export const useTheme = () => useContext(ThemeContext);
