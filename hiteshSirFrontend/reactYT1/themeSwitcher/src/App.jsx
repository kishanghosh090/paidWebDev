import { useEffect, useState } from "react";
import useTheme, { ThemeProvider } from "./context/theme.js";
import ThemeBtn from "./components/ThemeBtn.jsx";
import Card from "./components/Card.jsx";

function App() {
  const [themeMode, seThemeMode] = useState("light");
  const lightTheme = () => {
    seThemeMode("light");
  };
  const darkTheme = () => {
    seThemeMode("dark");
  };

  // actual changes theme
  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ lightTheme, darkTheme, themeMode }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
