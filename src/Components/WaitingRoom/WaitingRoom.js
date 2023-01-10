import React from "react";
import "./WaitingRoomStyles.css";
import { Heading,Button,Avatar,Text,Flex,useClipboard, VStack, Box} from "@chakra-ui/react";
import PlayerRow from "./playerRow";

const CreateJoin = () => {
 
  const { onCopy, value, setValue, hasCopied } = useClipboard("");

  return (
  <Flex className="PlayerList-container">
    <div class="PlayerList">
      <Flex justifyContent={"center"}>
        <Heading size={"lg"} color={"white"} textAlign={"center"}>PLAYERS 4/4</Heading>
      </Flex>

      <VStack
        spacing={4}
        align='stretch'
        h='160px'
      >
      <Box>
        auye
      </Box>  
      </VStack>

      
      <Flex  color={"white"} mt={"4em"} flexDirection={"column"} >
          
          <Flex  p={"0.3em"} bg={"white"}  color={"black"} borderRadius={"3px"} mb={"1em"} >

            <Flex alignItems={"center"} justifyContent={"center"}  width={"20%"}>
              <Avatar  w={"2.3em"} h={"2.3em"} src="https://bit.ly/dan-abramov" />
            </Flex>

            <Flex alignItems={"center"} width={"60%"}>
              <Text fontWeight={"bold"} m={"none"}  > nickname </Text>
            </Flex>

          </Flex >

          <PlayerRow/>
      
          <PlayerRow/>
        
          <PlayerRow/>


      </Flex>
      <Flex mt={"3em"} width={"100%"} justifyContent={"space-between"} >
            <Button w={"45%"} h={"3.2em"} onClick={onCopy}>{hasCopied ? "Copied!" : "Copy"}</Button>
            <Button w={"45%"} h={"3.2em"} colorScheme='green' >Start</Button>
      </Flex >
    </div>
  </Flex>
  )
};

export default CreateJoin;
