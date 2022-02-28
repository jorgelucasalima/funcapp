import { Table, Tbody, Th, Td, Tr, Thead, Box, Icon } from '@chakra-ui/react';
import { FiTrash, FiEdit } from "react-icons/fi";

// incluir button antes do table

export function TabelaFuncionarios() {
  return (
    <Box
      as="table"
      width="60%"
      borderWidth="100px"
      borderStyle="solid"
      borderRadius="10px"
      rounded="md"
      overflow="hidden"
      position="center"
      mt="10px"
      ml="20"
    >
      
      <Table size='lg' color='brand.600'>
      <Thead >
        <Tr>
          <Th>Nome</Th>
          <Th>Cargo</Th>
          <Th>Salário</Th>
          <Th>Ações</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Jorge</Td>
          <Td>Desenvolvedor</Td>
          <Td>R$ 25.4</Td>
          <Td>
            <Icon as={FiEdit}/>
            <Icon as={FiTrash}/>
          </Td>
        </Tr>
        <Tr>
          <Td>Ayra</Td>
          <Td>Médica</Td>
          <Td>R$ 25.4</Td>
          <Td>
            <Icon as={FiEdit}/>
            <Icon as={FiTrash}/>
          </Td>
        </Tr>
      </Tbody>
      
    </Table>
    </Box>
  )
}