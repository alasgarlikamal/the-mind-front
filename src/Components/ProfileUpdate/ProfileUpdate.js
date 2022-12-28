import React from 'react'
import {useState} from "react"
import "./ProfileUpdate.css"
import { Box,SimpleGrid,Avatar, FormLabel,Input, Flex, Text, Button, Heading,FormControl} from "@chakra-ui/react";
export default function ProfileUpdate() {
    const database = ["https://bit.ly/dan-abramov","https://bit.ly/prosper-baba","https://bit.ly/kent-c-dodds","https://bit.ly/ryan-florence"];
    const [profile, setProfile] = useState("https://bit.ly/dan-abramov")
    const [index, setIndex] = useState(0)
    function onPhotoChange () 
    {  
       setProfile(database[index])
       setIndex(index + 1)
       if (index === database.length-1)
       {
        setIndex(0)
       }
       
       console.log(profile)
    }
    return (
    
   <Flex className='main-profile-wrapper' >
    <Box  className="box-header" h={"30%"} >
        <Box>
        <Heading>Profile</Heading>
    <Text>Update your photos and personal details here.</Text>
        </Box>
    <Box justifySelf={"flex-end"}>
        <Avatar className="avatar" w={"7em"} h={"7em"} src={profile}>
        <img className='buttonImage' src="../images/change.png" alt='button to change image' onClick={onPhotoChange} />

        </Avatar>
    </Box>
    
    </Box>

    <Box className="box-body" h={"60%"} >
    <form method="POST" action="/Users/nicat/Desktop/themindfront/The_Mind_Front_End/public">
      <FormControl>
        <SimpleGrid columns={2}>
            <Box class="Binput">
            <FormLabel fontWeight={"bolder"} for="Name">Name</FormLabel>
        <Input placeholder='Name' name="Name" bg={"white"} />
            </Box>
        
        <Box class="Binput">
        <FormLabel fontWeight={"bolder"} for="Surname" >Surname</FormLabel>
        <Input placeholder='Surname'  bg={"white"} name="Surname" />
        </Box>
        
        <Box class="Binput">
        <FormLabel  fontWeight={"bolder"} for="Username" >Username</FormLabel>
        <Input placeholder='Username'bg={"white"} name="Username"/>
        </Box>
        
        <Box class="Binput">
        <FormLabel fontWeight={"bolder"} for="Date" >Date</FormLabel>
        <Input  type="datetime-local" bg={"white"} placeholder='Date' name="Date"/>
        </Box>
        
        </SimpleGrid>
      </FormControl>
        <Box className='box-footer' h={"20%"} mb="3em" >
            <Button  bg={"white"} variant='outline' width={"8em"} mr="1em" color="#09264A">Cancel</Button>
            <Button type="Submit" className="saveB" bg={"#09264A"} color={"white"}  width={"8em"}>Save</Button>
        </Box>
      </form>
    </Box>
    
   </Flex>  
  )
}
