import { Heading, Image, Text, VStack } from "@chakra-ui/react";
// import { FaRegStar } from "react-icons/fa";
import { TbStarFilled } from "react-icons/tb";

const maxRating =5;

const TestimonialCard = ({ rating, name, review, imageSrc }) => {
  function stars(number){
    let starNum=[];
    for (let i = 0; i < number; i++) {
      starNum.push(<TbStarFilled className="starReceived" key={i}/>)
    }
    for (let i = number; i < maxRating; i++) {
      starNum.push(<TbStarFilled className="starUnreceived" key={i}/>)
    }
    return (
      <ul className="starList">
        {starNum.map((item, index) =>
        <li key={index}>{item}</li>
        )}
      </ul>
    );
  }

  return (
    <VStack className="testimonialCard">
        <div style={{ margin: '0.8rem'}} className="testimonialContainer">
            <Heading as="h4" color="black">Rating: {stars(rating)}</Heading>
            <div>
                <Image className="reviewImage" fit src={imageSrc} alt={name} />
                <Text className="reviewName">{name}</Text>
            </div>
            <Text color="grey" fontSize='sm' style={{ marginBottom: '0.2rem'}}>{review}</Text>
        </div>
    </VStack>
  );
};

export default TestimonialCard;