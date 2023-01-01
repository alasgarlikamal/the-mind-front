import React from "react";
import "./WaitingRoomStyles.css";
import { CopyIcon } from "@chakra-ui/icons";
import { Heading, Button,Avatar,Text, Flex} from "@chakra-ui/react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { CopyToClipboard } from "react-copy-to-clipboard";


const CreateJoin = () => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [text, setText] = React.useState("Copy Link");
  const [isActive, setIsActive] = React.useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    setText("Copied!");
    setTimeout(() => setText('Copy Link'), 1000);
    setTimeout(() => setIsActive(false), 1000);
    setIsHovered(!isHovered);
  };


  const handleMouseEnter = () => {
    setTimeout(() => {
      setIsHovered(true);
    }, 20);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsHovered(false);
  }, 20);

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
        <CopyToClipboard text="nenonushdukamal">
            <Button  className={isActive ? 'active-copy-button' : 'copy-button'} position="sticky" isDisabled={isActive}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick} w={"45%"} h={"3.2em"} > {isHovered && isActive === false ? <CopyIcon transition="all ease-out 0.3s"/> : text }</Button>
            </CopyToClipboard>
            <Button w={"45%"} h={"3.2em"} >Start</Button>
      </Flex >
    </div>
  </Flex>
  )
};

export default CreateJoin;
