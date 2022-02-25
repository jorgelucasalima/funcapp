import { Table, Tbody, Th, Td, Tr, Thead, Box } from '@chakra-ui/react';


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
      <Table size='lg'>
      <Thead >
        <Tr>
          <Th>id</Th>
          <Th>Nome</Th>
          <Th>Cargo</Th>
          <Th>Salário</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>1653</Td>
          <Td>Jorge</Td>
          <Td>Desenvolvedor</Td>
          <Td isNumeric>R$ 25.4</Td>
        </Tr>
        <Tr>
          <Td>2323</Td>
          <Td>Ayra</Td>
          <Td>Médica</Td>
          <Td isNumeric>R$ 30.48</Td>
        </Tr>
      </Tbody>
      
    </Table>
    </Box>
  )
}