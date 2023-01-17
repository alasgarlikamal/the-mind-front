import React from "react";
import { Avatar, Button, Flex, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Portal, Text } from '@chakra-ui/react'
import { NotAllowedIcon } from '@chakra-ui/icons'
const PlayerPopover = () => {


    return (
        <>
        <Popover>
            <PopoverTrigger>
                <Button color={'white'} _hover={{ bgGradient: 'linear(to-l, #0D366A, #01162F)' }} bg={'linear-gradient(90deg, rgba(55, 59, 68, 0.82) -43.81%, rgba(42, 109, 218, 0.82) 119.34%)'}>username</Button>
            </PopoverTrigger>
            <Portal>
                <PopoverContent w={'20vh'}>
                <PopoverArrow />
                <PopoverHeader textAlign={'center'} fontWeight={'bold'} color={'#02162F'} >PROFILE</PopoverHeader>
                <PopoverCloseButton />
                <PopoverBody>
                    <Flex flexDirection={'column'} gap={1} justifyContent={'center'} alignItems={'center'} >
                        <Avatar size={'xl'} src={'/images/avatars/walter.png'}></Avatar>
                        <Text textAlign={'center'} fontWeight={"bold"} color={'#02162F'}>username</Text>
                        <Button bg="#02162F" _hover={{bg:"#02162F"}} color={'white'} leftIcon={<NotAllowedIcon/>}>Votekick</Button>
                    </Flex>
                </PopoverBody>
                </PopoverContent>
            </Portal>
        </Popover>

        <Avatar size={'xl'} src={'/images/avatars/walter.png'}></Avatar>
        </>
    )
}

export default PlayerPopover;