import React from "react";
import {Box, Center, Flex, Spacer } from "@chakra-ui/react";
import Deck from "./Deck";
import Card from "./Card";
import 'animate.css'
import TopRow from "./TopRow";
import LeftRow from "./LeftRow";
import RightRow from "./RightRow";

const Game = () => {

    const numbers = [13, 78, 99, 65, 43, 12, 13, 78, 99, 65, 43, 12]


    return (
        <Box backgroundImage={"url('/images/Rectangle 46.png')"} bgRepeat={'no-repeat'} bgSize={'cover'} h={"100vh"} w={"100vw"}>

            <Flex p={'2vh'}>
                <Center color={'white'}  fontWeight={'bold'} bgGradient='linear(to-l, #0D366A, #01162F)' fontSize={'3xl'} h={'8vh'} w={'13vw'} borderRadius={'1vh'}>
                    LEVEL 12
                </Center>
            </Flex>

            <Box w={'40vw'} h={'20vh'} m={'auto'} mt={'-11vh'} mb={'2vh'}>
                <TopRow numbers={numbers}/>
            </Box>

            <Flex justifyContent={'center'} >

                <Spacer/>
                <Box w={'13vw'} h={'47vh'} display={'inline-block'}>
                    <LeftRow numbers={numbers}/>
                </Box>
                <Spacer/>
                <Spacer/>
                <Flex justifyContent={'center'} alignItems={'center'} w={'47vh'} h={'47vh'}>
                    <Deck/>
                </Flex>
                <Spacer/>
                <Spacer/>
                <Box w={'13vw'} h={'47vh'} display={'inline-block'}>
                    <RightRow numbers={numbers}/>
                </Box>
                <Spacer/>

            </Flex>

            <Box  m={'auto'} mt={'2vh'}>
                <Flex justifyContent={'center'} ml={'11vh'}>
                    {numbers.map((number, index) => {
                        if (index === numbers.length - 1) {
                            return (
                                <Box key={number} w={'auto'} v={'auto'} ml={'-11vh'} className={'animate__animated animate__bounceInUp'}>
                                    <Card  number={number} isHoverable={false}/>
                                </Box>
                            )
                            } else {
                            return (
                                <Box key={number} w={'auto'} v={'auto'} ml={'-11vh'} className={'animate__animated animate__bounceInUp'}>
                                    <Card number={number} isHoverable={true}/>
                                </Box>
                            )
                        }
                    })}

                </Flex>
            </Box>



        </Box>
    ) 


}

export default Game;