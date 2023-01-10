import React from "react";

import { Flex, Avatar, Text, IconButton } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

export default function PlayerRow(props) {

    return (
        <Flex  p={"0.3em"} bg={"white"}  color={"black"} borderRadius={"3px"} mb={"1em"} >
            
            <Flex alignItems={"center"} justifyContent={"center"}  width={"20%"}>
              <Avatar border={"3px solid green"} w={"2.3em"} h={"2.3em"} src="https://bit.ly/dan-abramov" />
            </Flex>

            <Flex alignItems={"center"} width={"60%"}>
              <Text m={"none"} fontWeight={"bold"} > nicfdsfname </Text>
            </Flex>

            <Flex justifyContent={"center"} alignItems={"center"} width={"20%"}>
              <IconButton
                colorScheme='red'
                aria-label='Search database'
                borderRadius='50%'
                size="xs"
                icon={<CloseIcon />}
              />
            </Flex>

          </Flex >
    )
}