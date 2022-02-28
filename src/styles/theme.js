import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({

  fonts: {
    heading: "Poppins",
    body: "Poppins, sans-serif",
  },


  colors: {
    brand: {
      900: "#3C4178", // cor do button
      850: "#444983", // cor fundo dash
      800: "#2D3748", // cor do body
      700: "#1A202C", // cor do header
      600: "#B9BACE", // cor das letras
      500: "#EDEEEE", // cor letra dash
      400: "#A9AED6", // botão
      300: "#1A202C", // cor do menu
    },
    red: {
      500: "#E53E3E"
    }
  },

  styles: {
    global: {
      body: {
        color: "brand.900",
        bg: "brand.800",
      }
    }
  }
});