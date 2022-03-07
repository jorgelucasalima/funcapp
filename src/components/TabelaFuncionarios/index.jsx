import { Table, Tbody, Th, Td, Tr, Thead, Box, Icon, Button } from '@chakra-ui/react';
import { FiTrash, FiEdit, FiPlus } from "react-icons/fi";
import api from '../../services/api';
import { useState, useEffect, useRef } from 'react';
import { toast } from 'react-toastify';



// incluir button antes do table

export function TabelaFuncionarios() {
  const mountedRef = useRef(true);
  const [funcionarios, setFuncionarios] = useState([]);

  useEffect(() => {
    api.get('funcionarios')
      .then(({data}) => {
        if(mountedRef.current) {
          setFuncionarios(data) //to vendo, uhmmmmmm
          console.log(data)
        }
      })
      .catch(error => {
        toast("Erro ao carregar funcionários")
      })
  }, [])
  return (
    <Box
      as="table"
      mt='4'
    >
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
          {funcionarios.map(funcionario => {
            return (
              <Tbody key={funcionario.id}>
                <Td>{funcionario.nome}</Td>
                <Td>{funcionario.cargo}</Td>
                <Td>{funcionario.salario}</Td>
                <Td>
                  <Icon as={FiEdit} mr='2' boxSize='5' />
                  <Icon as={FiTrash} mr='2' boxSize='5' />
                </Td>
              </Tbody>
            )
          })} 
      </Table>
    </Box>
  )
}