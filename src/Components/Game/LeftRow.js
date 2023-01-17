import {Box, Flex } from '@chakra-ui/react'
import Card from './Card'
import React from 'react'
import 'animate.css'
import PlayerPopover from './PlayerPopover'

const LeftRow = ({numbers}) => {
    return (
        <Flex justifyContent={'center'} alignItems={'center'} flexDirection={'column'} >

            <Flex justifyContent={'center'} mt={'35vh'} mb={'10vh'} flexDirection={'column'} >
                {numbers.map((number) => {
                    return(
                        <Box key={number} w={'auto'} v={'auto'} mt={'-15vw'} rotate={'90'}>
                                <Card isHoverable={false} isSideRow={true}/>
                        </Box>
                    )
                })}
            </Flex>

            <Flex size={'auto'} gap={2} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                <PlayerPopover />
            </Flex>

        </Flex>

    )
}

export default LeftRow;