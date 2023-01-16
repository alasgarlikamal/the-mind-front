import {
    Box,
    Flex,
    Link,
    Stack,
    useColorMode
  } from "@chakra-ui/react";
import React from 'react'



const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
   <Flex
      as="nav"
      align="baseline"
      justify="flex-start"
      wrap="wrap"
      padding="1.5rem"
      bg="transparent"
    >
      <Box align="center" mr={5} >
        <Link href="#" fontWeight="600" color="#50C9E9" fontFamily='Montserrat' lineHeight='1.905rem'>
          THE MIND
        </Link>
      </Box>


      <Flex 
        align="center"
        justify="space-around"
        textAlign="center"  
        w={"20em"}
        ml={"8%"}
        
      >
        <Box>
        <Link href="#" fontWeight="semibold" color='#FFFFFF'>
          Play
        </Link>
        </Box>
        <Box>
        <Link href="#" fontWeight="semibold" color='#FFFFFF'>
          Rules
        </Link>
        </Box>
        <Box>
        <Link href="#" fontWeight="semibold" color='#FFFFFF'>
          About
        </Link>
        </Box>
        
      </Flex>
    </Flex>
  
    </>
  )
}

export default Navbar