const general = {
  font: {
    "2x": "40px",
    "1x": "33px",
    lg: "24px",
    md: "20px",
    sm: "19px",
    xs: "17px",
    smaller: "14px",
  },
  colors: {
    primary: "#183D6F",
    secondary: "#FFFFFF",
    thirdparty: "#D7443A",
    hoverEffect: "#EDF4FF",
    error: "#EF5350",
    text: {
      primary: "#2B4466",
      secondary: "#8B8C8C",
      thirdparty: "#FFFFFF",
      subtitle: "#1a1c2e",
    },
    border: {
      primary: "#d2d2d2",
      secondary: "#e4e2e267",
    },
    background: {
      secondary: "#F2F2F2",
      primary: "#FFFFFF",
    },
    disabled: "#D6DBE1",
    icon: "#696868d2",
  },
};

// Personalizar tema de colores
export const lightTheme = general;

export const darkTheme = {
  ...general,
  colors: {
    ...general.colors,
    background: {
      ...general.colors.background,
      secondary: "#343436",
    },
  },
};

const themes = {
  light: lightTheme,
  dark: darkTheme,
};

export default themes;
