import {
	Flex,
	HStack,
	Button,
	useRadioGroup,
	useDisclosure
} from '@chakra-ui/react';
import { FormImage, FormDetails } from '../../component/Form/Index';
import PaymentPlan from '../../component/PaymentPlan/PaymentPlan';
import Hero from '../../assets/images/hero-bg.jpg';
import masterCardPng from '../../assets/images/mastercard.png';
import paypalpng from '../../assets/images/paypal.png';
import visapng from '../../assets/images/visa.png';
import RedirectCard from '../../component/RedirectCard/RedirectCard';
import SuccessfullCard from '../../component/SuccessfullCard/SuccessfullCard';

const PaymentMethod = () => {
	// const { redirectisOpen=isOpen, redirectonOpen=onOpen, redirectonClose=onClose } = useDisclosure();
    const { isOpen, onOpen, onClose } = useDisclosure();

	const options = [
		{
			name: 'MasterCard',
			picture: masterCardPng
		},
		{
			name: 'PayPal',
			picture: paypalpng
		},
		{
			name: 'Visa',
			picture: visapng
		}
	];

	const option = [ 'Mastercard', 'Visa', 'Paypal' ];
	const image = [ masterCardPng, paypalpng, visapng ];

	const { getRootProps, getRadioProps } = useRadioGroup({
		name: 'framework',
		defaultValue: 'react',
		onChange: console.log
	});
	return (
		<Flex h="100vh" direction={{ base: 'column-reverse', md: 'row' }}>
			<FormImage
				image={Hero}
				title="Club Admin Platform"
				body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut purus rhoncus lectus."
			/>
			<FormDetails
				buttonText="MAKE YOUR PAYMENT"
				coloredTitle="Choose"
				title="Payment method"
				subTitle="Please fill in the following details to bring your dream to life"
			>
                
				<Button onClick={onOpen}>Open Modal</Button>

				<HStack spacing="24px" mb="32px">
					{option.map((value, index) => {
						const radio = getRadioProps({ value });
						return (
							<PaymentPlan picture={image[index]} value={value} radio={radio}>
								{' '}
								{value}
							</PaymentPlan>
						);
					})}
				</HStack>
			</FormDetails>

			{/* This is the redirect modal */}
                    <RedirectCard isOpen={isOpen} onClose={onClose} />
			{/* The successful payment modal */}
                    <SuccessfullCard isOpen={isOpen} onClose={onClose}/>
			
		</Flex>
	);
};

export default PaymentMethod;
