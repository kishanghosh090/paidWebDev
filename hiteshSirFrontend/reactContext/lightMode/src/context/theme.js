import { createContext, useContext } from "react";


export const ThemeContext = createContext({
    themeMode: "light",
    toggleTheme: () => { },
});
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ThemeContext.Provider;

