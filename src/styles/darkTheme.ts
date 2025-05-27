import { createTheme, type ThemeOptions } from "@mui/material";
import merge from "deepmerge";
import { commonThemeOptions } from "./commonThemeOptions";

const baseOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    text: {
      primary: "#ffffff",
    },
  },
};

const darkTheme = createTheme(merge(baseOptions, commonThemeOptions));

export default darkTheme;
