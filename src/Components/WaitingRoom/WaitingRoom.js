import React from "react";
import "./WaitingRoomStyles.css";
import { Heading,Stack,StackDivider,Card, CardHeader, CardBody, CardFooter,Button,Avatar,Text,Input,Flex,Box,IconButton } from "@chakra-ui/react";
import { AiOutlineCloseCircle } from "react-icons/ai";
const CreateJoin = () => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
  <Flex className="PlayerList-container">
    <div class="PlayerList">
      <Flex justifyContent={"center"}>
        <Heading size={"lg"} color={"white"} textAlign={"center"}>PLAYERS 4/4</Heading>
      </Flex>
      
      <Flex  color={"white"} mt={"4em"} flexDirection={"column"} >
          
          <Flex  p={"0.3em"} bg={"white"}  color={"black"} borderRadius={"3px"} mb={"1em"} >

            <Flex alignItems={"center"} justifyContent={"center"}  width={"20%"}>
              <Avatar border={"3px solid green"} w={"2.3em"} h={"2.3em"} src="https://bit.ly/dan-abramov" />
            </Flex>

            <Flex alignItems={"center"} width={"60%"}>
              <Text fontWeight={"bold"} m={"none"}  > nickname </Text>
            </Flex>

            <Flex justifyContent={"center"} alignItems={"center"} width={"20%"}>
              <AiOutlineCloseCircle fontSize={"2em"}   cursor={"pointer"}  />
            </Flex>

          </Flex >

          <Flex  p={"0.3em"} bg={"white"}  color={"black"} borderRadius={"3px"} mb={"1em"} >
            
            <Flex alignItems={"center"} justifyContent={"center"}  width={"20%"}>
              <Avatar w={"2em"} h={"2em"} src="https://bit.ly/dan-abramov" />
            </Flex>

            <Flex alignItems={"center"} width={"60%"}>
              <Text m={"none"} fontWeight={"bold"} > nickname </Text>
            </Flex>

            <Flex justifyContent={"center"} alignItems={"center"} width={"20%"}>
              <AiOutlineCloseCircle fontSize={"2em"} cursor={"pointer"}  />
            </Flex>

          </Flex >
      
          <Flex  p={"0.3em"} bg={"white"}  color={"black"} borderRadius={"3px"} mb={"1em"} >
            
            <Flex alignItems={"center"} justifyContent={"center"}  width={"20%"}>
              <Avatar w={"2em"} h={"2em"} src="https://bit.ly/dan-abramov" />
            </Flex>

            <Flex alignItems={"center"} width={"60%"}>
              <Text m={"none"} fontWeight={"bold"} > nickname </Text>
            </Flex>

            <Flex justifyContent={"center"} alignItems={"center"} width={"20%"}>
              <AiOutlineCloseCircle fontSize={"2em"} cursor={"pointer"}  />
            </Flex>

          </Flex >
        
          <Flex  p={"0.3em"} bg={"white"}  color={"black"} borderRadius={"3px"} mb={"1em"} >
            
            <Flex alignItems={"center"} justifyContent={"center"}  width={"20%"}>
              <Avatar w={"2em"} h={"2em"} src="https://bit.ly/dan-abramov" />
            </Flex>

            <Flex alignItems={"center"} width={"60%"}>
              <Text m={"none"} fontWeight={"bold"} > nickname </Text>
            </Flex>

            <Flex justifyContent={"center"} alignItems={"center"} width={"20%"}>
              <AiOutlineCloseCircle fontSize={"2em"} cursor={"pointer"}  />
            </Flex>

          </Flex >

      </Flex>
      <Flex mt={"3em"} width={"100%"} justifyContent={"space-between"} >
            <Button w={"45%"} h={"3.2em"} >Copy Link</Button>
            <Button w={"45%"} h={"3.2em"} >Start</Button>
      </Flex >
    </div>
  </Flex>
  )
};

export default CreateJoin;
