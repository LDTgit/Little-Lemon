import { Heading, Box, Image, Text } from "@chakra-ui/react";
// import ProductCard from "./ProductCard";

const MenuPage = (props) => {
    console.log(props.products);
    return (
        <div className="menu-page">
            <button><a href="/">Back to Home</a></button>
            <Heading as="h1" id="menu-section">
            Check our our menu
            </Heading>
            <Box className="cardsContainerMenu">
                {props.products.map((product) => (
                    <div className="productCardMenu" key={product.title}>
                    <Image className="productImageMenu" fit src={product.getImageSrc()} alt={product.title} />
                    <div style={{ margin: '0.3rem'}}>
                        <div className="titlePrice">
                            <Heading as="h3" color="black" style={{margin: '0.3rem'}}>{product.title}</Heading>
                            <Text className="price">{product.price}</Text>
                        </div>
                        <Text color="grey" fontSize='sm' style={{ marginBottom: '0.3rem'}}>{product.description}</Text>
                    </div>
                </div>
                ))}
            </Box>

        </div>
    );
}
export default MenuPage;