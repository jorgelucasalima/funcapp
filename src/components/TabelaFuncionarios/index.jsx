import { Table, Tbody, Th, Td, Tr, Thead, Box, Icon, Button } from '@chakra-ui/react';
import { FiTrash, FiEdit, FiPlus } from "react-icons/fi";

// incluir button antes do table

export function TabelaFuncionarios() {
  return (
    <Box
      as="table"
      mt='4'
    >  
      <Button
        bg='brand.400'
        color='brand.300'
        mt='6'
        ml='8'
        mb='4'
        height='60px'
        width='24'
        borderRadius='6'
      >
        <Icon as={FiPlus} boxSize='8' />
      </Button>

      <Table 
        size='sm'
        ml='10'
        variant='unstyled' 
        borderColor='brand.600'
        borderRadius='10'
        color='brand.600'

      >
        <Thead>
          <Tr>
            <Th color='brand.500' width='8'>Nome</Th>
            <Th color='brand.500' width='8'>Cargo</Th>
            <Th color='brand.500' width='8'>Salário</Th>
            <Th color='brand.500' width='8'>Ações</Th>
          </Tr>
        </Thead>
        <Tbody >
          <Tr>
            <Td>Jorge</Td>
            <Td>Desenvolvedor</Td>
            <Td>R$ 25.4</Td>
            <Td>
              <Icon as={FiEdit} mr='2' boxSize='5' />
              <Icon as={FiTrash} mr='2' boxSize='5' />
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  )
}