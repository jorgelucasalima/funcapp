import { Flex } from "@chakra-ui/react";
import {Logo} from './Logo'


export function Header() {
  return (
    <Flex
      as="header"
      width='100%'
      maxWidth={1480}
      h='20'
      mx='auto'
      px={6}
      align='center'
      bgColor='brand.700'

    >
      <Logo/>
    </Flex>
    
   
  )
}