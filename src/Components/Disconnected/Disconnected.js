import React from 'react'
import { Box,Button,Avatar,Text,Input,Flex, Icon} from "@chakra-ui/react";
export default function Disconnected() {
  return (
    <Flex justifyContent={"center"} mt={"10px"}>
      <Flex flexDirection={"column"} width={"20%"}
      border={"0.2px solid black"} 
      borderRadius={"10px"} >
      
      <Box borderRadius={"10px 10px 0 0"} p={"0.5em"} bg={"#02162F"} fontWeight={"bold"} color={"white"} textAlign={"center"}>Disconnected</Box>

      <Flex p={"0.8em"} flexDirection={"column"} textAlign={"center"} justifyContent={"center"} alignItems={"center"}>
        <Text marginBottom={"1em"} >You were kicked from this game.
You have been voted off of the server</Text>
        <Button w={"40%"} bg={"#02162F"} color={"white"} _hover={{color:"#02162F", bg:"white"}} >Leave</Button>
      </Flex>


    </Flex>
  </Flex>
    
  )
}
