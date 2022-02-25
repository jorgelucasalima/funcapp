import { Flex, Box, Text, Icon } from "@chakra-ui/react";
import {RiLineChartLine} from 'react-icons/ri'


//incluir um icon bonitinho e nome para logo funcapp

export function Header() {
  return (
    <Flex
      as="header"
      width='100%'
      maxWidth='100%'
      h='20'
      mx='auto'
      px={6}
      align='center'
      bgColor='brand.700'
    >
      <Box
        as="nav"
        display='flex'
        alignItems='center'

      > 
        <Icon as={RiLineChartLine} 
          color='brand.600' 
          boxSize='30'
        />
        <Text
          color='brand.600'
          ml='2'
          fontSize='lg'
        >
          AppFunc
        </Text>
      </Box>
      


      
    </Flex>
    
   
  )
}