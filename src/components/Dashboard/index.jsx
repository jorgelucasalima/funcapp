import { SimpleGrid, Box } from '@chakra-ui/react'

export function Dashboard() {
  return(
    <SimpleGrid 
      columns={3} 
      spacing={8} 
      mt='4'
      ml='15'
      mr='15'  
    >
      <Box 
        bg='brand.850' 
        height='200' 
        width='50'
        borderRadius='10px' 
      >
        dados 1
      </Box>
      <Box 
        bg='brand.850' 
        height='200' 
        width='50'
        borderRadius='10px' 
      >
        dados 2
      </Box>
      <Box 
        bg='brand.850' 
        height='200' 
        width='50'
        borderRadius='10px' 
      >
        dados 3
      </Box>
    </SimpleGrid>
  )
}