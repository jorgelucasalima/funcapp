import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import FuncionarioProvider from '../contexts/funcionarios';

function MyApp({ Component, pageProps }) {
  
  return (

    <FuncionarioProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </FuncionarioProvider>
    
  );
}

export default MyApp
