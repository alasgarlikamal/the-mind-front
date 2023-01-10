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
        align='stretch'
        h='40vh'
        marginTop={'2em'}
      >
        <PlayerRow/>
        <PlayerRow/>
        <PlayerRow/>
        <PlayerRow/>

      </VStack>
           
      <Flex width={"100%"} justifyContent={"space-between"} >
            <Button w={"45%"} h={"3.2em"} onClick={onCopy}>{hasCopied ? "Copied!" : "Copy"}</Button>
            <Button w={"45%"} h={"3.2em"} colorScheme='green' >Start</Button>
      </Flex >
    </div>
    <Text style={{ position: 'absolute', bottom: 0 }} fontSize={'xs'} marginBottom={'1vw'} textAlign={'center'} color={'#9B9B9B'}>All rights reserved © 2022 The Mind</Text>
  </Flex>
  )
};

export default CreateJoin;
