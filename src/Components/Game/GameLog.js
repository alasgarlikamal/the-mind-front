import { Flex, Box } from "@chakra-ui/react";
import './font.css'

const GameLog = ({messages}) => {

    return (
        <Flex w={'22.5vh'} ml={'-5vh'} mt={'5vh'} h={'15vh'} border={'1px solid black'} flexDirection={'column'}>
            <Box bgColor={'white'} borderTopRadius={'5px'} textAlign={'center'}>Game log</Box>
            <Flex className={'terminal'} bgColor={'black'} height={'full'} flexDirection={'column'} overflow={'auto'} fontFamily={'VT123'}>
               
                {messages.map((message, index) => {
                    return (
                        <Flex key={index} color={message.status ? 'green' :'red'}>{message.message}</Flex>
                    )
                })}
               
            </Flex>
        </Flex>
    )

}

export default GameLog;