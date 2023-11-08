import { Heading, Image, Text, VStack } from "@chakra-ui/react";


const TestimonialCard = ({ rating, name, review, imageSrc }) => {
  return (
    <VStack className="testimonialCard">
        <div style={{ margin: '0.8rem'}}>
            <Heading as="h4" color="black">Rating: {rating} stars</Heading>
            <div>
                <Image className="reviewImage" fit src={imageSrc} alt={name} />
                <Text className="reviewName">{name}</Text>
            </div>
            <Text color="grey" fontSize='sm' style={{ marginBottom: '0.8rem'}}>{review}</Text>
        </div>
    </VStack>
  );
};

export default TestimonialCard;