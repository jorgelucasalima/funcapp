import { SimpleGrid, Box, Icon } from '@chakra-ui/react'


export function Dashboard() {
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
        dados 1
      </Box>
      <Box 
        bg='brand.850' 
        height='150' 
        width='25'
        borderRadius='10px' 
      >
        dados 2
      </Box>
      <Box 
        bg='brand.600' 
        height='150' 
        width='25'
        borderRadius='10px' 
      >
        dados 3
      </Box>
    </SimpleGrid>
  )
}