import React from 'react'
import './DropdownStyles.css'
import { Avatar, Box, Flex, Text, Image } from '@chakra-ui/react'
import settings from '../../images/settings.png'
import profileicon2 from '../../images/profileicon2.png'
import logout from '../../images/logout.png'

const DropdownProfile = () => {
  return (
    
    <div className='dropdownProfile'>
        <Flex cursor={'pointer'} justifyContent={'center'}>
        <Box>
            <Avatar></Avatar>
        </Box>
        <Box>
            <Text width={'8rem'} fontSize={'16px'} textAlign='center' justifyContent={'center'} marginTop='0.1rem' marginRight={'5rem'}>Murad Isayev</Text>
            <Text width={'7.9rem'} fontSize={'14px'} textAlign='center' justifyContent={'center'}>@muradisayev</Text>
        </Box>
        </Flex>
        <Box>
        <div style={{height: '2px', background: '#012757', color: '#012757', borderColor:'#012757', width: '12.98rem', marginTop: '0.2rem', marginLeft: '-15px', marginRight:'-15px'}}/>
        </Box>
        <Flex flexDirection={'column'} w='2rem' align='space between' marginTop={'-0.5rem'}>

            <Flex alignContent={'center'} align='space between' w={'5rem'}>
            <Box>
                <Image src={profileicon2}></Image>
            </Box>
            <Text>Profile</Text>
            </Flex>

            <Flex alignContent={'center'} w={'6rem'} marginTop='-15px'>
            <Box>
            <Image src={settings}></Image>
            </Box>
            <Text>Settings</Text>
            </Flex>

            <Flex alignContent={'center'} w={'4rem'} marginTop='-15px'>
            <Box>
            <Image src={logout}></Image>
            </Box>
            <Text>Log Out</Text>
            </Flex>
        </Flex>
    </div>
    
  )
}

export default DropdownProfile;