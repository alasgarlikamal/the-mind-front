import React, { useContext, useEffect, useState } from "react";
import {Box, Center, Flex, Spacer } from "@chakra-ui/react";
import Deck from "./Deck";
import Card from "./Card";
import 'animate.css'
import TopRow from "./TopRow";
import LeftRow from "./LeftRow";
import RightRow from "./RightRow";
import { SocketContext } from "../../context/SocketContext";
import LifeCard from "./LifeCard";
import ThrowingStar from "./ThrowingStar";
import GameLog from "./GameLog";

const Game = () => {

    const socket = useContext(SocketContext);

    const [numbers, setNumbers] = useState([])
    const [gameData, setGameData] = useState({playerCount: 0, lives: 0, throwingStars: 0, level: 0, playerInfo: [{username: '', image: '', cardCount: 0}], smallestCard: 0})
    const [messages, setMessages] = React.useState([{message: 'Welcome to the game', status: true}])

    useEffect(() => {


        socket.emit('getCards');
        socket.emit('getGameData');

        socket.on('cards', (cards) => {
            setNumbers(cards);
        })

        socket.on('gameData', (data) => {
            setGameData(data);
        })

        socket.on('correctCard', (data)=> {
            socket.emit('getCards');
            socket.emit('getGameData');
            setMessages([{message: data.message, status: data.status}, ...messages]);
        })

        socket.on('wrongCard', (data)=> {
            socket.emit('getCards');
            socket.emit('getGameData');
            setMessages([{message: data.message, status: data.status}, ...messages]);
        })

        socket.on('nextLevel', (data)=> {
            socket.emit('getCards');
            socket.emit('getGameData');
            setMessages([{message: data.message, status: data.status}, ...messages]);
        })

        socket.on('gameOver', (data)=> {
            socket.emit('getCards');
            socket.emit('getGameData');
            setMessages([{message: data.message, status: data.status}, ...messages]);
        })

        socket.on('win', (data)=> {
            socket.emit('getCards');
            socket.emit('getGameData');
            setMessages([{message: data.message, status: data.status}, ...messages]);
        })

    }, [socket, messages])

    const playCard = (card) => {
        socket.emit('playCard', {card});
    }

    if(gameData){
    return (
        <Box backgroundImage={"url('/images/Rectangle 46.png')"} bgRepeat={'no-repeat'} bgSize={'cover'} h={"100vh"} w={"100vw"}>

            <Flex p={'2vh'}>
                <Center color={'white'}  fontWeight={'bold'} bgGradient='linear(to-l, #0D366A, #01162F)' fontSize={'3xl'} h={'8vh'} w={'13vw'} borderRadius={'1vh'}>
                    LEVEL {gameData.level}
                </Center>
            </Flex>

            <Box w={'40vw'} h={'20vh'} m={'auto'} mt={'-11vh'} mb={'2vh'}>
                <TopRow player={gameData.playerInfo[0]} />
            </Box>

            <Flex justifyContent={'center'} >

                <Spacer/>
                <Box w={'13vw'} h={'47vh'} display={'inline-block'}>
                    {gameData.playerCount > 2 && <LeftRow numbers={numbers} player={gameData.playerInfo[1]}/>}
                </Box>
                <Spacer/>
                <Spacer/>
                <Flex justifyContent={'center'} alignItems={'center'} w={'47vh'} h={'47vh'}>
                    <Deck number={gameData.smallestCard}/>
                </Flex>
                <Spacer/>
                <Spacer/>
                <Box w={'13vw'} h={'47vh'} display={'inline-block'}>
                    {gameData.playerCount > 3 && <RightRow numbers={numbers} player={gameData.playerInfo[2]}/>}
                </Box>
                <Spacer/>

            </Flex>

            <Box  m={'auto'} mt={'2vh'}>
                <Flex justifyContent={'center'} ml={'11vh'}>
                    <GameLog messages={messages}/>
                    <Spacer/>
                    {numbers.map((number, index) => {
                        if (index === numbers.length - 1) {
                            return (
                                <Box key={number} w={'auto'} v={'auto'} ml={'-11vh'} className={'animate__animated animate__bounceInUp'} onClick={() => playCard(number)}>
                                    <Card  number={number} isHoverable={false}/>
                                </Box>
                            )
                            } else {
                            return (
                                <Box key={number} w={'auto'} v={'auto'} ml={'-11vh'} className={'animate__animated animate__bounceInUp'} onClick={() => playCard(number)}>
                                    <Card number={number} isHoverable={true}/>
                                </Box>
                            )
                        }
                    })}

                    <Spacer/>
                    <Flex mr={'5vh'}>
                        <LifeCard life={gameData.lives}/>
                        <ThrowingStar star={gameData.throwingStars}/>
                    </Flex>
                </Flex>
            </Box>
        </Box>
    ) 
    }


}

export default Game;