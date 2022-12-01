import React from 'react'
import "../style/waiting.css"
import background from "../images/background.png"
import {Box,Card} from "@mui/material"
import {Flex,Select,Button} from "@chakra-ui/react";

export default function Waiting() {
  return (
    <Flex className="main-waiting-container" >
        <Flex className='lobby-card'>
            <h1>Players 1/4</h1>
                <ul>
                    <li className='player' >

                    </li>
                    <li className='player' >

                    </li>
                    <li className='player' >

                    </li>
                    <li className='player' >

                    </li>
                </ul>
            <Button>Invite</Button>
            <Button>Start</Button>
        </Flex>
    </Flex>
  )
}
