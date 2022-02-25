import { SimpleGrid, Box } from '@chakra-ui/react'

export function Dashboard() {
  return(
    <SimpleGrid columns={3} spacing={10} mt='4'>
      <Box bg='tomato' height='80px'>dados 1</Box>
      <Box bg='tomato' height='80px'>dados 2</Box>
      <Box bg='tomato' height='80px'>dados 3</Box>
    </SimpleGrid>
  )
}