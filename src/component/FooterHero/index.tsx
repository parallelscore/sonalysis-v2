import React from 'react'
import { HStack, Box, Text, SimpleGrid } from '@chakra-ui/react';
import './index.scss';


const FooterHero = ({handleSignUpOpenModal}: {handleSignUpOpenModal: ()=> void}) => {
  return (
        <div className='home-game col-lg-10 mx-auto p-5 d-lg-flex align-items-center'>
            <SimpleGrid px={{base: 0, md: 14}} columns={{base:1, sm: 1, md: 2}}>
                <Box w={{base:"full", md: "xl"}}>
                    <Box w={{base:"full", md: "md"}}>
                        <Text fontWeight="semibold" fontSize="3xl">Start Analyzing Your Game Today!</Text>
                        <div className="mt-3">
                            <Text fontWeight="normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor, nullam id aliquam.</Text>
                        </div>
                    </Box>
                </Box>
                <Box py={{base: 0, md: 14}} px={{base: 0, md: 24}}>
                    <button
                        onClick={handleSignUpOpenModal}
                        className='mt-5 mt-lg-0 ml-5'
                    >
                        GET STARTED
                    </button>
                </Box>
            </SimpleGrid>
        </div>
  )
}

export default FooterHero
