import React from "react";
import "./LobbyStyles.css";
import CardFlip from "react-card-flip";
import { Button,Avatar,Text,Input,Flex,Box,IconButton } from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";

const CreateJoin = () => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="createjoin">
      <CardFlip isFlipped={isFlipped}>
        <div className="lobbycard-front">
          <Avatar w={"5em"} h={"5em"} src="https://bit.ly/dan-abramov" mb={"1em"}/>
          <div className="front-text"  >
            <Text color="white" mb={"2em"}>nickname</Text>
            </div>
          <Button bg={"#1F5378"}  w={"55%"} className="joinroombutton" onClick={handleFlip}>
            Join Room
          </Button>
          <Button bg={"#46A661"} color={"white"}  w={"55%"} className="createroombutton">Create Room</Button>
        </div>


        <div className="lobbycard-back">
          <Flex width={"100%"} m={"1em 0 2em 1em"} className={"return-button"}>
             <IoIosArrowBack color={"white"} fontSize={"2em"} cursor={"pointer"} onClick={handleFlip} />
            </Flex>
          <div className="back-text">
          <Text color="white" mb={"1em"}>Enter Invitation link:</Text>
          </div>
          <div className="url-input">
            <Input mb={"4em"} bg={"#BFBFBF"} id={"url"}  color={"white"} textAlign={"center"}  type="text" placeholder="Room url..." />
          </div>
          <Button bg={"#46A661"} className={"joinroombutton"} w={"55%"} color={"white"} >Join</Button>
        </div>


      </CardFlip>
      <Text style={{ position: 'absolute', bottom: 0 }} fontSize={'xs'} marginTop={'1vw'} textAlign={'center'} color={'white'}>All rights reserved © 2022 The Mind</Text>
    </div>
  );
};

export default CreateJoin;
