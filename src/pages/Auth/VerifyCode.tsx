import { Flex,FormControl, GridItem, FormLabel, Input, FormErrorMessage, Text, chakra } from '@chakra-ui/react'
import {FormImage, FormDetails} from "../../component/Form/Index"
import Image from "../../assets/images/login-coach.svg"
import React from 'react'


const VerifyCode = () => {
  return (
    <Flex h="100vh" direction={{base:'column-reverse', md:'row'}} >
        <FormImage image={Image} title="Verify" body="CODE"/>
        <FormDetails  hasAccount={true} buttonText="CONFIRM CODE" coloredTitle="Verify" title="Code" subTitle="A code has been sent to your email. Enter the code to reset your password">
            <GridItem colSpan={1}>
                <FormControl >
                    <FormLabel htmlFor="email">
                        Verification Code
                    </FormLabel>
                    <Input id="code"  name="code"  type="text" placeholder=""/>
                    <FormErrorMessage>Verification is required and must be valid.</FormErrorMessage>
                </FormControl>
            </GridItem>
        </FormDetails>
        
    </Flex>
  )
}

export default VerifyCode
