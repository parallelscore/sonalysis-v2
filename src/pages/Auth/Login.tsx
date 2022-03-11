import { Flex,FormControl, GridItem, FormLabel, Input, FormErrorMessage, Text, chakra } from '@chakra-ui/react'
import {FormImage, FormDetails} from "../../component/Form/Index"
import Image from "../../assets/images/login-coach.svg"
import React from 'react'


const Login = () => {
  return (
    <Flex h="100vh" direction={{base:'column-reverse', md:'row'}} >
        <FormImage image={Image} title="CONTINUE AS" body="A Coach"/>
        <FormDetails hasFormFooter={true} buttonText="LOGIN" coloredTitle="Continue" title="Your Analysis Coach" subTitle="Welcome back and get to see what has been happening since you’ve been gone">
            <GridItem colSpan={1}>
                <FormControl >
                    <FormLabel htmlFor="email">
                        Email
                    </FormLabel>
                    <Input id="email"  name="email"  type="email" placeholder="john@doe.com"/>
                    <FormErrorMessage>Email is required and must be valid.</FormErrorMessage>
                </FormControl>
            </GridItem>

            <GridItem colSpan={1}>
                <FormControl >
                    <FormLabel htmlFor="password">
                        Password
                    </FormLabel>
                    <Input id="password"  name="password"  type="password" placeholder="Enter your password"/>
                    <FormErrorMessage>Password is required.</FormErrorMessage>
                </FormControl>
            </GridItem>
        </FormDetails>
        
    </Flex>
  )
}

export default Login
