import { Box, Center, Text} from '@chakra-ui/react';


const OfferCard = ({image, title, body }: {image: string, title: string, body: string}) => {
  return (
    <Box textAlign="center">
        <Center><img src={image} alt='' /></Center>
        <Text mt="8" variant="title">{title}</Text>
        <Text mt="8" variant="body">
            {body}
        </Text>
    </Box>
  )
}

export default OfferCard
