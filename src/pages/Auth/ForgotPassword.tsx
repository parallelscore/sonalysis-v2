import { Flex,FormControl, GridItem, FormLabel, Input, FormErrorMessage, Text, chakra } from '@chakra-ui/react'
import {FormImage, FormDetails} from "../../component/Form/Index"
import Image from "../../assets/images/login-coach.svg"
import React from 'react'


const ForgotPassword = () => {
  return (
    <Flex h="100vh" direction={{base:'column-reverse', md:'row'}} >
        <FormImage image={Image} title="Recover Your" body="PASSWORD"/>
        <FormDetails tW="100%" hasAccount={true} buttonText="RECOVER PASSWORD" coloredTitle="Recover" title="Your Password" subTitle="Enter your email below to recover your forgotten password">
            <GridItem colSpan={1}>
                <FormControl >
                    <FormLabel htmlFor="email">
                        Email
                    </FormLabel>
                    <Input id="email"  name="email"  type="email" placeholder="john@doe.com"/>
                    <FormErrorMessage>Email is required and must be valid.</FormErrorMessage>
                </FormControl>
            </GridItem>
        </FormDetails>
        
    </Flex>
  )
}

export default ForgotPassword
