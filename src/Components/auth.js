import { Box, Input, useDisclosure, Center, Image, Flex, Badge, Text, Button, Spacer,Select,Heading,FormControl,AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
AlertDialogCloseButton} from "@chakra-ui/react";
import React from 'react'
import { useState,useRef } from "react";
import "../style/signin.css";
import { BsGoogle } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
export default function Auth() {
//shout out to my nigga Turan
  const [clicked, setClicked] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef()
  const onClick  = () =>
  {
    setClicked(!clicked);    
  }

  if (!clicked) {
    return (
  <Flex className="main-wrapper"  >
    <Flex className={clicked ? "left  left-on-click" : "left"}>
          <Box  w={"80%"} >
      <Heading>Sign in to The mind</Heading>
      <a className="icon" href="#"><BsGoogle /></a>
      <form method="POST" action="/">
      <FormControl lineHeight={"3em"}  >
        <Input bg={"#F4F8F7"} borderRadius={10} border={"none"} type='text' placeholder="username" required w={"55%"} />
        <Input bg={"#F4F8F7"} borderRadius={10} border={"none"} type='password' placeholder="password" required w={"55%"} />
        <Text><a href="#">Forgot your password?</a></Text>
        <Button type="submit"   transitionDuration={"0.7s"} _hover={{bg:"white", color:"#010E1F" }} border={"1px solid #010E1F"} w={"45%"} p={5} borderRadius={10} bg={"#010E1F"} color={"white"} >Sign In</Button>
      </FormControl>
      </form>
      
      </Box>
    </Flex>
    <Flex className={clicked ? "right right-on-click" : "right"} >
            <Box  w={"80%"} m={"auto"}>
            <Heading >Hello Friend!</Heading>
            <Text   mt={5} mb={10} fontSize={12} >Enter your personal details and start journey with us</Text>
            <Button onClick={onClick} transitionDuration={"0.7s"} _hover={{bg:"white", color:"black" }} border={"1px solid white"} w={"45%"} p={5} borderRadius={10} bg={"transparent"} color={"white"} >Sign Up</Button>
            </Box>  
    </Flex>
        
  </Flex>
    )
  }
    else 
    {
      return (
        <Flex   className="main-wrapper"  >
         <Flex className={clicked ? "left  left-on-click" : "left"} color={"black"} bg={"white"} w={"70%"} textAlign={"center"} justifyContent={"center"} alignItems={"center"}  >
          <Box w={"50%"} gap={2} >
          <Heading color={"#010E1F"} >Create Account</Heading>
          <form method="POST" action='/'>
          <FormControl lineHeight={"3em"} paddingTop={"2em"} className="create-account">
            <Box>
                <Input w={"50%"} bg={"#F4F8F7"} borderRadius={20} border={"none"} type="text" placeholder="name" />
                <Input w={"50%"} bg={"#F4F8F7"} borderRadius={20} border={"none"} type="text" placeholder="surname"  />
                <Input  bg={"#F4F8F7"} borderRadius={20} border={"none"} type="date" required />
                <Input  bg={"#F4F8F7"} borderRadius={20} border={"none"} type="email" placeholder="email" />
            <Input bg={"#F4F8F7"} borderRadius={20} border={"none"} type='password' placeholder="password"  />
            <Input bg={"#F4F8F7"} borderRadius={20} border={"none"} type='password' placeholder=" confirm password" />
            <Select placeholder='Select gender' bg={"#F4F8F7"} borderRadius={20} border={"none"}  >
                <option value='male'>Male</option>
                <option value='female'>Female</option>
            </Select>
            </Box>
            <a  href="#" className="icon-register" ><BsGoogle /></a>
            <Button type="submit" onClick={onOpen} transitionDuration={"0.7s"} _hover={{bg:"white", color:"#010E1F" }} border={"1px solid #010E1F"} w={"45%"} p={5} borderRadius={10} bg={"#010E1F"} color={"white"} >Sign Up</Button>
            <AlertDialog motionPreset='slideInBottom' leastDestructiveRef={cancelRef}  isOpen={isOpen} isCentered>
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader textAlign={"center"} >Just one more step...</AlertDialogHeader>
          <AlertDialogBody textAlign={"center"} >
          We've sent a verification email to <a href="#" color="blue" >murad.isayev@ufaz.az.</a><br />
          Please verify your email address to log into TheMind<br />
          <CiMail className="CiMail" />
          </AlertDialogBody>

          <AlertDialogFooter className="footer-for-link" >
          <div><a href='#'>Didn't get the mail? Send it again.</a></div>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
          </FormControl>
          </form>
          
          </Box>
          
        </Flex>
        <Flex className={clicked ? "right right-on-click" : "right"} >
            <Box  w={"80%"} m={"auto"}>
            <Heading >Welcome Back!</Heading>
            <Text   mt={5} mb={10} fontSize={12} >To keep connected with us please
login with your personal info </Text>
            <Button onClick={onClick} transitionDuration={"0.7s"} _hover={{bg:"white", color:"#010E1F" }} border={"1px solid white"} w={"45%"} p={5} borderRadius={10} bg={"transparent"} color={"white"} >Sign In</Button>
            </Box>  
        </Flex>
        
      </Flex>
      )
    }


      

   
}
  
