import React from "react";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import TestimonialCard from "./TestimonialCard";
import restaurantFoodImg from '../images/restauranfood.jpg';
// import {useState} from 'react';
import BookingPage from "./BookingPage";

const products = [
  {
    title: "Greek salad",
    price: "$12.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    getImageSrc: () => require("../images/greek salad.jpg")
  },
  {
    title: "Bruchetta",
    price: "$ 5.99",
    description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    getImageSrc: () => require("../images/bruchetta.svg").default
  },
  {
    title: "Lemon Dessert",
    price: "$ 5.00",
    description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    getImageSrc: () => require("../images/lemon dessert.jpg")
  },
  {
    title: "Greek salad 2",
    price: "$12.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    getImageSrc: () => require("../images/greek salad.jpg")
  },
  {
    title: "Bruchetta 2",
    price: "$ 5.99",
    description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    getImageSrc: () => require("../images/bruchetta.svg").default
  },
  {
    title: "Lemon Dessert 2",
    price: "$ 5.00",
    description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    getImageSrc: () => require("../images/lemon dessert.jpg")
  },
]

const ratings = [
  {
    rating: 4,
    name: "John Doe",
    review: "Vestibulum pretium neque quis dui pretium, eu pretium lorem viverra.",
    getImageSrc: () => require("../images/client.jpeg")
  },
  {
    rating: 5,
    name: "Jane Doe",
    review: "Nulla viverra, ligula sed sodales laoreet, mi lectus bibendum lorem, et consequat lectus nisi non urna.",
    getImageSrc: () => require("../images/client.jpeg")
  },
  {
    rating: 4,
    name: "Johnny Doe",
    review: "Sed mattis facilisis dolor eu viverra. Proin pellentesque blandit ante, vitae semper ante hendrerit et.",
    getImageSrc: () => require("../images/client.jpeg")
  },
  {
    rating: 5,
    name: "Jannette Doe",
    review: "In aliquam eros neque, ullamcorper placerat tellus porttitor vel.",
    getImageSrc: () => require("../images/client.jpeg")
  },
  {
    rating: 4,
    name: "Tim Doe",
    review: "Nunc mattis urna non dui ullamcorper, ut feugiat dui cursus.",
    getImageSrc: () => require("../images/client.jpeg")
  },
  {
    rating: 5,
    name: "Timette Doe",
    review: " Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    getImageSrc: () => require("../images/client.jpeg")
  }
]


function Main({ toggle, changeToggle }) {
  return (
    <main>
      <div>
        <section className={`heroSection ${toggle ? "height-fit-content" : ""}`}>
          <article>
            <Heading as="h1">Little Lemon</Heading>
            <Heading as="h2">Chicago</Heading>
            <Text>We are a family owned Mediteranean restaurant, focused on traditional recipes served with a modern twist.</Text>
            <button id="book-button" onClick={changeToggle}>{!toggle ? "Reserve a table" : "Back"}</button>
            {toggle && (
              <BookingPage />
            )}
          </article>
          <figure>
            <img className="restaurantPicture" src={restaurantFoodImg} alt="restaurant food" />
          </figure>
        </section>
      </div>

      <section className="highlightsSection">
        <article>
          <Heading as="h2" id="products-section">This weeks specials!</Heading>
          <button>Online menu</button>
        </article>

        <Box className="cardsContainer">
          {products.map((product) => (
            <ProductCard
              key={product.title}
              title={product.title}
              price={product.price}
              description={product.description}
              imageSrc={product.getImageSrc()}
            />
          ))}
        </Box>
      </section>
      <section className="testimonialsSection">
        <article>
          <Heading as="h2" id="testimonials-section">Testimonials</Heading>
        </article>

        <Box className="testimonialCardsContainer">
          {ratings.map((rating) => (
            <TestimonialCard
              key={rating.name}
              rating={rating.rating}
              name={rating.name}
              review={rating.review}
              imageSrc={rating.getImageSrc()}
            />
          ))}
        </Box>
      </section>
      <section className="aboutSection">
        <div>
          <Heading as="h1">Little Lemon</Heading>
          <h2>Chicago</h2>
          <Text>We are a family owned Mediteranean restaurant, focused on traditional recipes served with a modern twist.</Text>
        </div>
        <Image className="ownerPicture" fit src={require("../images/Mario and Adrian A.jpg")} alt="Mario and Adrian A"></Image>
      </section>
    </main>
  );
}

export default Main;