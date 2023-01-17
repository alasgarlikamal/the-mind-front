import { Box, Flex} from '@chakra-ui/react'
import Card from './Card'
import React from 'react'
import 'animate.css'
import PlayerPopover from './PlayerPopover'

const TopRow = ({numbers}) => {
    return (
        <Flex justifyContent={'center'} alignItems={'center'} gap={5} >

            <Flex size={'auto'} gap={2} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                <PlayerPopover/>
            </Flex>

            <Flex justifyContent={'center'} ml={'14vh'}>
                {numbers.map((number) => {
                    return(
                        <Box key={number} w={'auto'} v={'auto'} ml={'-14vh'}>
                                <Card isHoverable={false}/>
                        </Box>
                    )
                })}
            </Flex>

        </Flex>

    )
}

export default TopRow;