
import { Flex,Box,Tabs,Tab,TabList, TabPanel,TabPanels, HStack, Text, Button, Center } from '@chakra-ui/react'
import {FormImage, FormDetails} from "../../component/Form/Index"
import Image from "../../assets/images/hero-bg.jpg"
import {AiFillCheckCircle} from 'react-icons/ai'
import PlanCard from "../../component/PlanBox/PlanCard"

const AdminSubPlan = () => {
    return (
        <Flex h="auto" direction={{base:'column-reverse', md:'row'}} >
        <FormImage image={Image} title="Club Admin Platform" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut purus rhoncus lectus."/>
        <FormDetails arrow='flex' account='none' display='none' coloredTitle="Choose" title="Subscription plan" subTitle="Please fill in the following details to bring your dream to life">
    
            <Tabs variant='unstyled'>
            <TabList bg='#000' w='50%' rounded={5} p='8px 16px'>
                <Tab _selected={{ color: 'white', bg: 'primary', rounded:'5px' }}>Monthly</Tab>
                <Tab _selected={{ color: 'white', bg: 'primary', rounded:'5px' }}>Yearly</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                <Flex mt={6} justifyContent='space-between'>
                        <PlanCard title='BASIC' plan='900' time='month'>
                            <HStack mt={2}>
                                <AiFillCheckCircle color='#811AFF'/>
                                <Text> Good Video Quality</Text>
                            </HStack>
                            <HStack mt={2}>
                                <AiFillCheckCircle color='#811AFF'/>
                                <Text> Good Video Quality</Text>
                            </HStack>
                            <HStack mt={2}>
                                <AiFillCheckCircle color='#811AFF'/>
                                <Text> Good Video Quality</Text>
                            </HStack>
                        </PlanCard>
                        <PlanCard title='PREMIUM' plan='2000' time='month'>
                            <HStack mt={2}>
                                <AiFillCheckCircle color='#811AFF'/>
                                <Text> Good Video Quality</Text>
                            </HStack>
                            <HStack mt={2}>
                                <AiFillCheckCircle color='#811AFF'/>
                                <Text> Good Video Quality</Text>
                            </HStack>
                            <HStack mt={2}>
                                <AiFillCheckCircle color='#811AFF'/>
                                <Text> Good Video Quality</Text>
                            </HStack>
                            <HStack mt={2}>
                                <AiFillCheckCircle color='#811AFF'/>
                                <Text> Good Video Quality</Text>
                            </HStack>
                            <HStack mt={2}>
                                <AiFillCheckCircle color='#811AFF'/>
                                <Text> Good Video Quality</Text>
                            </HStack>
                        </PlanCard>
                </Flex>
                </TabPanel>
                <TabPanel>
                <Flex mt={6} justifyContent='space-between'>
                    <PlanCard title='BASIC' plan='900' time='month'>
                        <HStack mt={2}>
                            <AiFillCheckCircle color='#811AFF'/>
                            <Text> Good Video Quality</Text>
                        </HStack>
                        <HStack mt={2}>
                            <AiFillCheckCircle color='#811AFF'/>
                            <Text> Good Video Quality</Text>
                        </HStack>
                        <HStack mt={2}>
                            <AiFillCheckCircle color='#811AFF'/>
                            <Text> Good Video Quality</Text>
                        </HStack>
                    </PlanCard>
                    <PlanCard title='PREMIUM' plan='2000' time='month'>
                        <HStack mt={2}>
                            <AiFillCheckCircle color='#811AFF'/>
                            <Text> Good Video Quality</Text>
                        </HStack>
                        <HStack mt={2}>
                            <AiFillCheckCircle color='#811AFF'/>
                            <Text> Good Video Quality</Text>
                        </HStack>
                        <HStack mt={2}>
                            <AiFillCheckCircle color='#811AFF'/>
                            <Text> Good Video Quality</Text>
                        </HStack>
                        <HStack mt={2}>
                            <AiFillCheckCircle color='#811AFF'/>
                            <Text> Good Video Quality</Text>
                        </HStack>
                        <HStack mt={2}>
                            <AiFillCheckCircle color='#811AFF'/>
                            <Text> Good Video Quality</Text>
                        </HStack>
                    </PlanCard>
                </Flex>
                </TabPanel>
            </TabPanels>
            </Tabs>
           
        </FormDetails>
        
    </Flex>
    )
}

export default AdminSubPlan
