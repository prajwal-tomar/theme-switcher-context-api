import { createContext, useContext } from "react";

// Create the context with default values
export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

// create the ThemeContext Provider
export const ThemeProvider = ThemeContext.Provider;

// we can directly get the values from the context now by using the below function
export default function useTheme() {
  return useContext(ThemeContext);
}
