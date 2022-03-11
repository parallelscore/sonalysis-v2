import { useState, useEffect } from 'react';
import './login.scss';
import Modal from '../../component/layouts/Modal';
import CancelIcon from '../../assets/icons/cancel.svg';

import EyeIconOpen from '../../assets/icons/eye-open.png';
import endPoint from '../../api/endPoints';
import { postCall } from '../../api/request';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLocation } from '../../store/locations/actions';
import swal from 'sweetalert';
import {Box, Text, Avatar, Tag, VStack, Input, Flex, HStack, Select, InputGroup,Button, InputRightElement, Center,InputLeftElement} from '@chakra-ui/react'
// import {AiFillEyeInvisible} from 'react-icon/ai'
// import {AiFillEyeInvisible} from 'react-icons/ai'



const Login = ({ setIsSignUpOpen, handleLoginOpenModal }) => {
   

    // const handleOnchange = (e) => {
    //     const name = e.target.name;
    //     const value = e.target.value;
    //     setUserData({ ...userData, [name]: value });
    // };

    // useEffect(() => {
    //     dispatch(fetchLocation());
    // }, []);

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setIsLoading(true);
    //     setErrorMessage('');
    //     postCall(endPoint.register, userData).then((res) => {
    //         setIsLoading(false);
    //         if (res?.status === 200) {
    //             // cookie.set("auth", res.data.data.auth_token);
    //             // return window.location.replace("/app")
    //             swal('Success', 'Account created successfully!', 'success');
    //             handleLoginOpenModal();
    //         }
    //         setErrorMessage(res.data.message);
    //         setInterval(() => setErrorMessage(''), 8000);
    //     });
    // };
    // const stopPropagation = (e) => {
    //     e.stopPropagation();
    // };
    return (
        <Modal isClose={() => setIsSignUpOpen(false)} >
            <Box className='container'>
                <div
                    className='signup col-lg-9 mx-auto'
                    // onClick={stopPropagation}
                >
                    <div className='signup-left col-5 d-none d-lg-flex'>
                        <h1 className='p-0'>Club Admin Platform</h1>
                        <div className='signup-left-title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut purus rhoncus lectus.</div>
                        {/* <div className="signup-left-text ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut purus rhoncus lectus posuere elit et. Odio sapien cras molestie viverra vestibulum. Eros pulvinar lacinia fermentum tincidunt fames etiam lorem.</div> */}
                    </div>
                    <div className='signup-right col-lg-7 p-5'>
                       <Box>
                           <Text mt='54px' fontSize='12px' fontWeight='400' color='#AAAAAA'> Please fill in the following details to bring your dream to life </Text>
                           <Avatar bg='black.500' src='../../assets/icons/upload-icon.svg' mt={4}/>
                           <Text fontSize='10px' fontWeight='500' mt={4} color='#5597FF'>Upload Your Logo</Text>
                           <Flex mt={12} direction='column'>
                                <Text w='100%' textAlign='left' fontSize='12px' fontWeight='400'>CLUB NAME</Text>
                                <Input variant='outline' placeholder='eg. ClubFC' mt={2}/>
                           </Flex>
                           <HStack mt={6}>
                                <Flex  direction='column'>
                                        <Text w='100%' textAlign='left' fontSize='12px' fontWeight='400'>FIRST NAME</Text>
                                        <Input variant='outline' placeholder='eg. ClubFC' mt={2}/>
                                </Flex>
                                <Flex  direction='column'>
                                        <Text w='100%' textAlign='left' fontSize='12px' fontWeight='400'>LAST NAME</Text>
                                        <Input variant='outline' placeholder='eg. ClubFC' mt={2}/>
                                </Flex>
                           </HStack>
                           <Flex mt={4} direction='column'>
                                <Text w='100%' textAlign='left' fontSize='12px' fontWeight='400'>COUNTRY</Text>
                                <Select variant='outline' placeholder='Select Country' />
                           </Flex>
                           <Flex mt={4} direction='column'>
                                <Text w='100%' textAlign='left' fontSize='12px' fontWeight='400'>COMPANY EMAIL</Text>
                                <Input variant='outline' placeholder='example@gmail.com' mt={2}/>
                           </Flex>
                           <Flex mt={4} direction='column'>
                                <Text w='100%' textAlign='left' fontSize='12px' fontWeight='400'>COMPANY PHONE NUMBER</Text>
                                <Input variant='outline' placeholder='901-912-35646' mt={2}/>
                           </Flex>
                           <Flex mt={4} direction='column'>
                                <Text w='100%' textAlign='left' fontSize='12px' fontWeight='400'>PASSWORD</Text>
                                <InputGroup>
                                    {/* <InputLeftElement
                                    color='gray.300'
                                    fontSize='1.2em'
                                    children={<Select placeholder='+234' variant='unstyled'/>}
                                    /> */}
                                    <Input placeholder='At least 8+ characters' />
                                    {/* <InputRightElement children={<AiFillEyeInvisible color='green.500' />} /> */}
                                    <InputRightElement  />
                                </InputGroup>
                                {/* <Input variant='outline' placeholder='At least 8+ characters' mt={2}/> */}
                           </Flex>
                           <Button bg='#443B4F !important' mt='18px !important' fontSize='14px !important' fontWeight='500 !important' p='0px 18px !important'>REGISTER YOUR CLUB</Button>
                           <Center>
                           <HStack spacing={2} mt={2}>
                                <Text fontSize='12px'>Already have an account?</Text>
                                <Text fontSize='12px'>Login</Text>
                           </HStack>
                            </Center>
                       </Box>
                    </div>
                </div>
            </Box>
        </Modal>
    );
};

export default Login;
