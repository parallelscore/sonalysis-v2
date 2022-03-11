import {
	HStack,
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	Image,
	VStack,
	Text,
	Center,

} from '@chakra-ui/react';
import { AiFillCheckCircle } from 'react-icons/ai';
import PlanCard from '../../component/PlanBox/PlanCard';
import confirmpng from '../../assets/images/confirmation.png';

const SuccessfullCard = ({isOpen, onClose}) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent w="331px" h="auto" bg="#242424" color='#fff'>
            <Center>
                <Image src={confirmpng} alt="confirmation" w='130px'/>
            </Center>
            <ModalHeader p="4px 24px 4px" textAlign="center" fontSize="18px">
                Subscription Successfull
            </ModalHeader>
            <ModalBody >
                <Text mb="12px" textAlign="center">You can cancel this plan anytime</Text>
            <PlanCard title="BASIC" plan="900" time="month" >
                <HStack mt={2}>
                    <AiFillCheckCircle color="#811AFF" />
                    <Text> Good Video Quality</Text>
                </HStack>
                <HStack mt={2}>
                    <AiFillCheckCircle color="#811AFF" />
                    <Text> Good Video Quality</Text>
                </HStack>
                <HStack mt={2}>
                    <AiFillCheckCircle color="#811AFF" />
                    <Text> Good Video Quality</Text>
                </HStack>
            </PlanCard>
            </ModalBody>

            <ModalFooter w="100%">
                <VStack spacing={6} w="100%">
                    <Button bg="#811AFF" _hover={{ bg: '#811AFF' }} w="100%" onClick={onClose}>
                        GO TO CLUB MANAGEMENT
                    </Button>
                </VStack>
            </ModalFooter>
        </ModalContent>
    </Modal>
    )
}

export default SuccessfullCard
