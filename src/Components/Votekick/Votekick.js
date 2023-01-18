import React from 'react'
import { Box,Button,Avatar,Text,Input,Flex, Icon} from "@chakra-ui/react";
export default function Votekick() {
  return (
    <Flex justifyContent={"center"} mt={"10px"}>
      <Flex flexDirection={"column"} width={"20%"}
      border={"0.2px solid black"} 
      borderRadius={"10px"} >
      
      <Flex borderRadius={"10px 10px 0 0"} p={"0.5em"} bg={"#02162F"} fontWeight={"bold"} color={"white"}>Votekick by @username1</Flex>

      <Flex p={"0.8em"} >

        <Flex p={"0.3em"} width={"80%"} flexDirection={"Column"}>
          <Flex>
          <Text margin={"0"} pb={"1em"} color={"#02162F"}>Vote to kick out @username2</Text>
          </Flex>
          
          <Flex justifyContent={"flex-start"} >
          <Button bg={"#02162F"} color={"white"} _hover={{color:"#02162F", bg:"white"}} w={"30%"} mr={"1em"} >Yes</Button>
          <Button bg={"#02162F"} color={"white"} _hover={{color:"#02162F", bg:"white"}} w={"30%"}>No</Button>
          </Flex>
          
        </Flex>

        <Flex width={"20%"}  flexDirection={"column"} mt={"0"}>
          <Flex color={"green"} fontWeight={"bold"} >
            <Box>
              <Icon w={17} h={17}>
              <path d="M15.6581 1.03772C15.3585 0.878392 15.0289 0.777069 14.6882 0.739546C14.3476 0.702022 14.0025 0.729035 13.6728 0.81904C13.3431 0.909044 13.0351 1.06027 12.7666 1.26408C12.4981 1.46789 12.2743 1.72028 12.1079 2.00681L7.26166 10.3407L4.48808 7.69039C4.24728 7.45215 3.95923 7.26212 3.64075 7.13139C3.32226 7.00065 2.97972 6.93184 2.63311 6.92896C2.2865 6.92609 1.94276 6.9892 1.62195 7.11462C1.30114 7.24005 1.00968 7.42527 0.764577 7.65947C0.519477 7.89368 0.325644 8.17219 0.19439 8.47875C0.063135 8.78531 -0.0029134 9.11378 9.85612e-05 9.44499C0.00311052 9.7762 0.0751226 10.1035 0.211933 10.4078C0.348743 10.7122 0.547611 10.9874 0.796933 11.2175L6.01779 16.2064C6.51116 16.6791 7.17682 16.9385 7.86337 16.9385L8.22491 16.9136C8.62503 16.8601 9.00669 16.7186 9.33985 16.5002C9.67302 16.2819 9.94859 15.9926 10.1449 15.6551L16.671 4.43016C16.8376 4.14386 16.9435 3.82901 16.9828 3.50357C17.0221 3.17814 16.9939 2.8485 16.8998 2.53348C16.8058 2.21846 16.6477 1.92423 16.4347 1.66759C16.2216 1.41094 15.9577 1.19691 15.6581 1.03772Z" fill="#2E9100"/>
              </Icon>
            </Box>
            <Text>2</Text>
          </Flex>
          
          <Flex color={"red"} fontWeight={"bold"}>
            <Box>
              <Icon w={17} h={17}>
              <path d="M15 14.0924L3 2.64624M15 2.64624L3 14.0924" stroke="#D10606" stroke-width="5" stroke-linecap="round"/>
              </Icon>
            </Box>
            <Text>1</Text>
          </Flex>
          
        </Flex>
      </Flex>


    </Flex>
  </Flex>
    
  )
}
