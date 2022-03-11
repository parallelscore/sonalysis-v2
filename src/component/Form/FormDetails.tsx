import React from 'react';
import { VStack, chakra,Text, SimpleGrid, GridItem, Button, Stack } from '@chakra-ui/react';
import {Link} from 'react-router-dom'

const FormDetails = ({children, coloredTitle,title, subTitle, display='flex', buttonText, hasFormFooter=false, hasAccount=false, tW="90%"}) => {
  return (
        <VStack bgColor="black" color="white" w="full" h="full"  p={{base: 20, sm: 20}}  spacing={10} alignItems="flex-start">
            <VStack mt="20" spacing={1} alignItems="flex-start">
                <Text fontSize="3xl" fontWeight="semibold">
                    <chakra.span color="yellow">
                        {coloredTitle}&nbsp;
                    </chakra.span>
                    {title}          
                </Text>
                <Text w={tW}>{subTitle}</Text>
            </VStack>
            <SimpleGrid columns={1}  rowGap={10} w="80%">
                {children}
                <GridItem colSpan={1}>
                    <Button role="button" display={display} backgroundColor="primary" color="white" size="lg" w="full">{buttonText}</Button>
                </GridItem>
                <Stack >
                    {
                        hasAccount ?
                        <Text align={'center'}>
                            Already have an account? <Link fontWeight="semibold">Login</Link>
                        </Text>
                        :
                        <Text align={'center'}>
                            Don't Have an Account? <Link fontWeight="semibold">Get Started</Link>
                        </Text>
                    }
                </Stack>
                {
                    hasFormFooter && <Stack>
                    <Text align={'center'}>
                         <Link to="/forgot-password"> <Text fontWeight="semibold">Forgot Password</Text></Link>
                    </Text>
                </Stack>
                }
            </SimpleGrid>

            
        </VStack>
  );
}

export default FormDetails