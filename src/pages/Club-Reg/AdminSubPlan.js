
import { Flex,Box,Tabs,Tab,TabList, TabPanel,TabPanels, HStack, Text, Button } from '@chakra-ui/react'
import {FormImage, FormDetails} from "../../component/Form/Index"
import Image from "../../assets/images/hero-bg.jpg"
import {AiFillCheckCircle} from 'react-icons/ai'

const AdminSubPlan = () => {
    return (
        <Flex h="auto" direction={{base:'column-reverse', md:'row'}} >
        <FormImage image={Image} title="Club Admin Platform" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut purus rhoncus lectus."/>
        <FormDetails display='none' coloredTitle="Choose" title="Subscription plan" subTitle="Please fill in the following details to bring your dream to life">
        {/* <Box>
            <BiArrowBack/>
            <Text>Back</Text>
        </Box> */}

            <Tabs variant='unstyled'>
            <TabList bg='#000' w='50%' rounded={5} p='8px 16px'>
                <Tab _selected={{ color: 'white', bg: 'primary', rounded:'5px' }}>Monthly</Tab>
                <Tab _selected={{ color: 'white', bg: 'primary', rounded:'5px' }}>Yearly</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <HStack mt={6} spacing={4}>
                    <Box mt='1px' borderWidth='2px' borderRadius='lg'  p='4px 8px'>
                        <Text fontSize='12px'>Basic</Text>
                        <Text fontSize='14px' fontWeight='600' mt={2}>$900 / Month</Text>
                        <HStack mt={2}>
                            <AiFillCheckCircle bg='primary'/>
                           <Text> Good Video Quality</Text>
                        </HStack>
                        <HStack mt={2}>
                            <AiFillCheckCircle bg='primary'/>
                           <Text> Good Video Quality</Text>
                        </HStack>
                        <HStack mt={2}>
                            <AiFillCheckCircle bg='primary'/>
                           <Text> Good Video Quality</Text>
                        </HStack>
                        <Button mt={4} mb={2}>CHOOSE PLAN</Button>
                    </Box>
                    <Box mt='24px' borderWidth='2px' borderRadius='lg' p='4px 8px'>
                        <Text fontSize='12px'>Basic</Text>
                        <Text fontSize='14px' fontWeight='600' mt={2}>$900 / Month</Text>
                        <HStack mt={2}>
                            <AiFillCheckCircle bg='primary'/>
                           <Text> Good Video Quality</Text>
                        </HStack>
                        <HStack mt={2}>
                            <AiFillCheckCircle bg='primary'/>
                           <Text> Good Video Quality</Text>
                        </HStack>
                        <HStack mt={2}>
                            <AiFillCheckCircle bg='primary'/>
                           <Text> Good Video Quality</Text>
                        </HStack>
                        <HStack mt={2}>
                            <AiFillCheckCircle bg='primary'/>
                           <Text> Good Video Quality</Text>
                        </HStack>
                        <HStack mt={2}>
                            <AiFillCheckCircle bg='primary'/>
                           <Text> Good Video Quality</Text>
                        </HStack>
                        <Button mt={4} mb={2}>CHOOSE PLAN</Button>
                    </Box>
                    </HStack>
                </TabPanel>
                <TabPanel>
                <p>two!</p>
                </TabPanel>
            </TabPanels>
            </Tabs>
           
        </FormDetails>
        
    </Flex>
    )
}

export default AdminSubPlan
