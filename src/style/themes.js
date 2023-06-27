import { extendTheme } from '@chakra-ui/react';
import { colors } from "./color";

const themes = {
  default: {
    main: colors.main,
    secundary: colors.teal100
  },
  light: {
    main: colors.white,
    secundary: colors.main
  }
}

const ChakraThemes = extendTheme({
  colors: {
    tagTheme: {
      100: colors.main,
      700: colors.white,
    },
  },

});

export {themes, ChakraThemes};