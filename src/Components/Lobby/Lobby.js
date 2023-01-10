import React, {useState, useEffect, useRef} from "react";
import "./LobbyStyles.css";
import CardFlip from "react-card-flip";
import { Button,Avatar,Text,Input,Flex} from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";
import { getUserInfo } from '../../api/getUserInfo';

const CreateJoin = () => {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const [user, setUser] = useState({firstname: '', lastname: '', date_of_birth: '', username: '', email: '', avatar: {imageUrl: ''}});
  const [errorMessage, setErrorMessage] = useState(null);
  const inputReference = useRef(null);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    inputReference.current.focus();
  };

  useEffect(() => {
    async function getUser() {
      const data = await getUserInfo();
      if (!data) {
          setErrorMessage("Something went wrong");
          return; 
      }
      setUser(data);
    }
    getUser(); 
  }, []);

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  return (
    <div className="createjoin">
      <CardFlip isFlipped={isFlipped}>
        <div className="lobbycard-front">
          <Avatar w={"5em"} h={"5em"} src={process.env.REACT_APP_API_URL + user.avatar.imageUrl} mb={"1em"}/>
          <div className="front-text"  >
            <Text color="white" mb={"2em"}>{user.username}</Text>
            </div>
          <Button fontWeight={"500"} bg={"#1F5378"}  w={"55%"} className="joinroombutton" onClick={handleFlip}>
            Join Room
          </Button>
          <Button fontWeight={"500"} bg={"#46A661"} color={"white"}  w={"55%"} className="createroombutton">Create Room</Button>
        </div>


        <div className="lobbycard-back">
          <Flex width={"100%"} m={"1em 0 2em 1em"} className={"return-button"}>
             <IoIosArrowBack color={"white"} fontSize={"2em"} cursor={"pointer"} onClick={handleFlip} />
            </Flex>
          <div className="back-text">
          <Text color="white" mb={"1em"}>Enter Invitation link:</Text>
          </div>
          <div className="url-input">
            <Input mb={"4em"} bg={"#BFBFBF"} id={"url"} ref={inputReference} autoComplete={'off'} color={"white"}  type="text" placeholder="Paste link" />
          </div>
          <Button bg={"#46A661"} className={"joinroombutton"} w={"55%"} color={"white"} >Join</Button>
        </div>


      </CardFlip>
      <Text style={{ position: 'absolute', bottom: 0 }} fontSize={'xs'} marginBottom={'1vw'} textAlign={'center'} color={'#9B9B9B'}>All rights reserved © 2022 The Mind</Text>
    </div>
  );
};

export default CreateJoin;
