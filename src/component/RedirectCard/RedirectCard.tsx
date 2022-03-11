import {

	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	VStack,
	Center,
	Spinner,
    Text
} from '@chakra-ui/react';

const RedirectCard = ({isOpen, onClose}) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} >
                <ModalOverlay />
                <ModalContent w='331px' h='auto' bg='#242424'>
                   <Center mt={12}> <Spinner
                        thickness='4px'
                        speed='0.95s'
                        emptyColor='gray.200'
                        color='#811AFF'
                        size='xl'
                        
                    /></Center>
               <ModalHeader p='16px 24px 4px' textAlign='center' fontSize='18px'>You are being redirected</ModalHeader>
                <ModalBody textAlign='center'>
                    <Text>Sonalysis is redirecting you to another window to make your payment</Text>
                </ModalBody>

                <ModalFooter w='100%'>
                    <VStack spacing={6} w='100%'>
                        <Button bg='#811AFF' _hover={{bg:'#811AFF'}} w='100%' >
                        CONTINUE
                        </Button>
                        <Button bg='#242424' _hover={{bg:'#811AFF'}} onClick={onClose} w='100%'>
                        CANCEL
                        </Button>
                    </VStack>
                </ModalFooter>
                </ModalContent>
            </Modal>
    )
}

export default RedirectCard
