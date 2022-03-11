
import {useState} from 'react'

import { Flex,FormControl, GridItem, FormLabel, Input, FormErrorMessage,VStack, HStack, Select, Box, Center, Text, InputGroup, InputRightElement} from '@chakra-ui/react'
import {FormImage, FormDetails} from "../../component/Form/Index"
import Image from "../../assets/images/hero-bg.jpg"
import {AiOutlinePicture, AiFillEyeInvisible} from 'react-icons/ai'

const ClubAdminReg = () => {
   const [adminReg, setAdminReg] = useState({
       'clubName':'',
       'firstname':'',
       'lastname':'',
       'country':'',
       'company-email':'',
       'company-phone':'',
       'password':''

   })

   const [clubName, setClubName] = useState('')

   const handleAdminReg=(e)=>{
       setAdminReg({...adminReg,[e.target.name]:e.target.value})
   }

   console.log('adminreg', adminReg);
console.log('clubName', clubName);

    return (
    <Flex h="auto" direction={{base:'column-reverse', md:'row'}} bg='primary'>
            <FormImage image={Image} title="Club Admin Platform" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut purus rhoncus lectus."/>
            <FormDetails hasAccount={true}  coloredTitle="Build" title="Your Football Club" buttonText="REGISTER YOUR CLUB" subTitle="Please fill in the following details to bring your dream to life">
                <VStack>
                    <Center h='60px' w='60px' rounded='100%' bg='#000' m='auto'>
                        <AiOutlinePicture size='24px' rounded={4}/>
                    </Center>
                    <Text textAlign='center'>Upload Photo</Text>
                </VStack>
                <GridItem colSpan={1}>
                    <FormControl >
                        <FormLabel htmlFor="club-name">
                            Club Name
                        </FormLabel>
                        <Input id="club-name" onChange={handleAdminReg} value={adminReg.clubName} name="clubName"  type="text" placeholder="eg. ClubFC"/>
                        <FormErrorMessage>Club Name is required and must be valid.</FormErrorMessage>
                    </FormControl>
                </GridItem>
                <HStack>
                <GridItem colSpan={1}>
                    <FormControl >
                        <FormLabel htmlFor="firstname">
                            Firstname
                        </FormLabel>
                        <Input id="firstname" onChange={handleAdminReg} name="firstname" value={adminReg.firstname}  type="text" placeholder="Enter your firstname"/>
                        <FormErrorMessage>Firstname is required.</FormErrorMessage>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={1}>
                    <FormControl >
                        <FormLabel htmlFor="lastname">
                            Lastname
                        </FormLabel>
                        <Input id="lastname"  name="lastname" onChange={handleAdminReg} value={adminReg.lastname} type="text" placeholder="Enter your lastname"/>
                        <FormErrorMessage>Lastname is required.</FormErrorMessage>
                    </FormControl>
                </GridItem>
                </HStack>
                <GridItem colSpan={1}>
                    <FormControl >
                        <FormLabel htmlFor="country">
                            Country
                        </FormLabel>
                        <Select name='country' variant='outline' placeholder='Select Country' onChange={handleAdminReg}>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                        <FormErrorMessage>Country is required.</FormErrorMessage>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={1}>
                    <FormControl >
                        <FormLabel htmlFor="email">
                            Company Email
                        </FormLabel>
                        <Input id="company-email" onChange={handleAdminReg} value={adminReg['company-email']} name="company-email"  type="email" placeholder="Enter your email"/>
                        <FormErrorMessage>Country email is required.</FormErrorMessage>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={1}>
                    <FormControl >
                        <FormLabel htmlFor="phone">
                            Company Phone Number
                        </FormLabel>
                        <Input id="company-phone" onChange={handleAdminReg} value={adminReg['company-phone']} name="company-phone"  type="text" placeholder="901-912-35646"/>
                        <FormErrorMessage>Country phone is required.</FormErrorMessage>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={1}>
                    <FormControl >
                        <FormLabel htmlFor="password">
                            Password
                        </FormLabel>
                        <InputGroup>
                           
                            <Input id="password" onChange={handleAdminReg} value={adminReg.password} name="password"  type="password" placeholder="At least 8+ characters"/>
                            <InputRightElement children={<AiFillEyeInvisible color='green.500' />} />
                        </InputGroup>
                        
                        <FormErrorMessage>Password phone is required.</FormErrorMessage>
                    </FormControl>
                </GridItem>
            </FormDetails>
        </Flex>
      
       
    );
};

export default ClubAdminReg;
