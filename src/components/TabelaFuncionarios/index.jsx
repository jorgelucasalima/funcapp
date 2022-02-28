import { Table, Tbody, Th, Td, Tr, Thead, Box, Icon } from '@chakra-ui/react';
import { FiTrash, FiEdit } from "react-icons/fi";

// incluir button antes do table

export function TabelaFuncionarios() {
  return (
    <Box
      as="table"
      mt='20'
    >  
      <Table 
        size='sm'
        variant='unstyled' 
        color='brand.600'
        ml='10'
      >
        <Thead>
          <Tr>
            <Th color='brand.600' width='8'>Nome</Th>
            <Th color='brand.600' width='8'>Cargo</Th>
            <Th color='brand.600' width='8'>Salário</Th>
            <Th color='brand.600' width='8'>Ações</Th>
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