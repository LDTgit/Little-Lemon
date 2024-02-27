import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import iconDelivery from '../images/Icon-delivery.svg'

const ProductCard = ({ title, price, description, imageSrc }) => {
  return (
    <VStack className="productCard">
        <Image className="productImage" fit src={imageSrc} alt={title} />
        <div style={{ margin: '0.8rem'}}>
            <div className="titlePrice">
                <Heading as="h3" color="black">{title}</Heading>
                <Text className="price">{price}</Text>
            </div>
            <Text color="grey" fontSize='sm' style={{ marginBottom: '0.8rem'}}>{description}</Text>
             <div className="delivery">
                <p>Order a delivery</p>
                <img className="deliveryIcon" src={iconDelivery} alt="delivery"></img>
            </div>
        </div>
    </VStack>
  );
};

export default ProductCard;
