import { SimpleGrid, Box, Icon, Text } from '@chakra-ui/react'
import { TabelaFuncionarios } from '../TabelaFuncionarios'
import { FuncionarioContext } from '../../contexts/funcionarios'
import { useContext } from 'react'

export function Dashboard() {

  const {funcionarios} = useContext(FuncionarioContext)


  return(
    <SimpleGrid 
      columns={3} 
      spacing={4} 
      mt='4'
      ml='30'
      mr='30' 
      color='brand.500' 
    >
      <Box 
        bg='brand.850' 
        height='150' 
        width='25'
        borderRadius='10px' 
      >
        <Text
          fontSize='lg'
          fontWeight='bold'
          color='brand.500'
          mt='3'
          ml='3'
        >
          Quantidade Funcionários
        </Text>
      </Box>
      <Box 
        bg='brand.850' 
        height='150' 
        width='25'
        borderRadius='10px' 
      >
        <Text
          fontSize='lg'
          fontWeight='bold'
          color='brand.500'
          mt='3'
          ml='3'
        >
          Maior Salário
        </Text>
      </Box>
      <Box 
        bg='brand.600' 
        height='150' 
        width='25'
        borderRadius='10px' 
      >
        <Text
          fontSize='lg'
          fontWeight='bold'
          color='brand.700'
          mt='3'
          ml='3'
        >
          Média Salárial
        </Text>
      </Box>
    </SimpleGrid>
  )
}