import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({

  fonts: {
    heading: "Inter, sans-serif",
    body: "Inter, sans-serif",
  },


  colors: {
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
      600: "#2989d8",
      500: "#2ca3f8",
      400: "#c2e2ff",
      300: "#d6ebff",
      200: "#eef3f5",
      100: "#fafbfd",
      50: "#fcfdfe",
      25: "#fafcfa",
      0: "#fff",
    }
  },

  styles: {
    global: {
      body: {
        color: "brand.900",
        bg: "brand.900",
      }
    }
  }
});