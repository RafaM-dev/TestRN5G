import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { DefaultTheme, ThemeProvider } from "styled-components/native";

import themes, { lightTheme } from "./theme";

type ThemeType = "light" | "dark";

type TThemeContext = {
  theme: DefaultTheme;
  handleTheme: (mode: ThemeType) => void;
  mountedComponent: boolean;
  keyTheme: ThemeType;
};

export const ThemeContext = createContext<TThemeContext>({} as TThemeContext);

export const useTheme = () => useContext(ThemeContext);

export const Theme: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);
  const [keyTheme, setKeyTheme] = useState<ThemeType>("light");
  const [mountedComponent, setMountedComponent] = useState(false);

  const handleTheme = (mode: ThemeType) => {
    setTheme(themes[mode]);
    setKeyTheme(mode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };

  useEffect(() => {
    const localTheme = "light";

    localTheme ? handleTheme(localTheme) : handleTheme("light");
    setMountedComponent(true);
  }, []);

  return (
    <ThemeContext.Provider
      value={{ theme, keyTheme, handleTheme, mountedComponent }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};