import { Flex } from "@chakra-ui/react"
import {Header} from "../components/Header"
import { TabelaFuncionarios } from "../components/TabelaFuncionarios"
import { Dashboard } from "../components/Dashboard"

export default function Home() {
  return (
    <Flex 
      as="main"
      height="100vh"
      flexDir="column"
    >
      <Header />  
      <Dashboard />
      <TabelaFuncionarios/>
    
    </Flex>
  )
}
