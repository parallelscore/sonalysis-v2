import React from 'react'
import { Box, HStack, Text, Button, Center, useColorMode, useColorModeValue } from '@chakra-ui/react'
import {AiFillCheckCircle} from 'react-icons/ai'

const PlanCard = ({children,title, plan, time }) => {
    return (
    <Box borderWidth='2px' borderRadius='16px'p='16px' color='#fff' _hover={{bg:'white', color:'#000'}}>
        <Text fontSize='12px'>{title}</Text>
        <Text fontSize='14px' fontWeight='600' mt={2}>${plan} / {time}</Text>
        {children}
        <Button mt={4} mb={2} bg='#242424' _hover={{bg:'primary', color:'#fff'}}>CHOOSE PLAN</Button>
    </Box>
    )
}

export default PlanCard
