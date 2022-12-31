import React from "react";
import "./LobbyStyles.css";
import CardFlip from "react-card-flip";
import { Button } from "@chakra-ui/react";

const CreateJoin = () => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="createjoin">
      <CardFlip isFlipped={isFlipped}>
        <div className="lobbycard-front">
          <div className="front-text">nickname</div>
          <Button
            bg={"#1F5378"}
            className="joinroombutton"
            onClick={handleFlip}
          >
            Join Room
          </Button>
          <Button className="creteroombutton">Create Room</Button>
        </div>
        <div className="lobbycard-back">
          <div className="back-text"></div>
          <Button onClick={handleFlip}>Flip</Button>
        </div>
      </CardFlip>
    </div>
  );
};

export default CreateJoin;
