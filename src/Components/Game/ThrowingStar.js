import { Flex, Text, Tooltip } from "@chakra-ui/react"
import './font.css';

const ThrowingStar = ({star}) => {

    return (
        <Flex fontSize={'8xl'} color={'white'} bgImage={'/images/throwingStar.png'} bgSize={'cover'} w={'15vh'} h={'22.5vh'} justifyContent={'center'} alignItems={'center'}>
            <Tooltip label={`Your team has ${star} throwing stars`}>
                <Text ml={'1vh'} textShadow={'2px 2px 2px black'} textAlign={'center'} fontFamily={'Sleman'}>{star}</Text>
            </Tooltip>
        </Flex>
            
    )
}

export default ThrowingStar;