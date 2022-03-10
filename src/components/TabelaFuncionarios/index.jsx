import { Input,Table, Tbody, Th, Td, Tr, Thead, Box, Icon, Button, 
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton, useDisclosure, FormControl, FormLabel, Form  } from '@chakra-ui/react';
import { FiTrash, FiEdit, FiPlus } from "react-icons/fi";
import api from '../../services/api';
import { useState, useEffect, useRef } from 'react';
import { toast } from 'react-toastify';



export function TabelaFuncionarios() {
  const mountedRef = useRef(true);
  const [funcionarios, setFuncionarios] = useState([]);
  const [camposInput, setCamposInput] = useState({
    nome: '',
    cargo: '',
    salario: '',
  })
  const {isOpen, onOpen, onClose} = useDisclosure();

  useEffect(() => {
    api.get('funcionarios')
      .then(({data}) => {
          setFuncionarios(data) 
          console.log(data)
      })
      .catch(error => {
        toast("Erro ao carregar funcionários")
      })
  }, [])


  function mudarInput(event) {
    camposInput[event.target.nome] = event.target.value
    setCamposInput(camposInput)
  }

  function submitFormulario(event) {
    event.preventDefault();
  }


  return (
    <Box
      as="table"
      mt='4'
    >
      <Button
        bg='brand.900'
        ml='8'
        mb='10'
        onClick={onOpen}
      >
        <FiPlus size={20} color="#fff" />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Cadastrar Funcionário</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            
            aqui criar FormControl com imput

            <ModalFooter>
              <Button 
                colorScheme='blue' 
                mr={3} 
                type='submit'
              >
                Salvar
              </Button>
            </ModalFooter>
             
          </ModalBody>

          
        </ModalContent>
      </Modal>


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