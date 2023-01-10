import './GameRoomStyles.css';
import { Box, Text } from '@chakra-ui/react'




import React from 'react'

const GameRoom = () => {
  return (
   <div className='gameroom-background'>
    <div className='gameroom-content'>
    <Box className='level-indicator'>
        <Text> Level 12 </Text>
    </Box>
    </div>
   </div>
  )
}

export default GameRoom