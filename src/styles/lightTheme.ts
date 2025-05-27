import { createTheme, type ThemeOptions } from "@mui/material";
import merge from "deepmerge";
import { commonThemeOptions } from "./commonThemeOptions";

const baseOptions: ThemeOptions = {
  palette: {
    mode: "light",
    text: {
      primary: "#000",
    },
  },
};

const lightTheme = createTheme(merge(baseOptions, commonThemeOptions));

export default lightTheme;
