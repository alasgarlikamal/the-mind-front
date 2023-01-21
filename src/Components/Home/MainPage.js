import React from 'react';
import { Button, Flex, useDisclosure } from '@chakra-ui/react';
import VideoModal from './VideoModal';
import './MainPage.css';
import { Navbar } from '../Navbar/Navbar';

const MainPage = () => {

  const {isOpen, onClose, onOpen} = useDisclosure();

  
    return (
      <Flex bgImage={'/images/main-page.jpg'} h='100vh'  flexDir='column' bgPos={'center'} bgRepeat={'no-repeat'} bgSize='cover'>
        <Navbar/>
      <div className='mainpage-container'>
        <Button  width="11.688rem" height='4.25rem' color='#16163D' fontSize='2.063rem' fontFamily='Montserrat' borderRadius='0.75rem' right='36.5rem' top='10.438rem' background='rgba(255, 255, 255, 0.87)' boxShadow='6px 4px 15px rgba(11, 11, 52, 0.25);'>Play</Button>
        <Button onClick={onOpen} _hover={'none'}  position={'relative'} variant='outline' width="11.688rem" height='4.25rem' color='white' fontSize='2.063rem' fontFamily='Montserrat' borderRadius='0.75rem' right='20.5rem' top='6.25rem'  boxShadow='6px 4px 15px rgba(11, 11, 52, 0.25);'>Rules</Button>
        
        <VideoModal isOpen={isOpen} onClose={onClose}/>
      </div>
      </Flex>
    )
  }
  
  export default MainPage;