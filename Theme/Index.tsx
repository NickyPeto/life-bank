import React, { useEffect, useState } from "react";
import { useColorScheme } from "react-native";
import { darkPalette, lightPalette } from "./Palettes";

export type colorScheme = "dark" | "light";

export const ThemeContext = React.createContext({
  isDark: false,
  palette: lightPalette,
  setScheme: (scheme: colorScheme) => {},
});

export const ThemeProvider = (props: any) => {
  const colorScheme = useColorScheme();
  const [isDark, setIsDark] = useState(colorScheme === "dark");

  useEffect(() => {
    setIsDark(colorScheme === "dark");
  }, []);

  const defautTheme = {
    isDark,
    palette: isDark ? darkPalette : lightPalette,
    setScheme: (scheme: colorScheme) => setIsDark(scheme === "dark"),
  };

  return (
    <ThemeContext.Provider value={defautTheme}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);
