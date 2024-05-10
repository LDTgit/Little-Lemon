import React from "react";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import TestimonialCard from "./TestimonialCard";
import restaurantFoodImg from '../images/restauranfood.jpg';
import { useState, useReducer} from 'react';
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";
import {Link} from "react-router-dom";

const ALL_AVAILABLE_TIMES = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

const getTodayDate = () => {
  const today = new Date();
  const month = (today.getMonth() + 1) < 10 ? `0${today.getMonth() + 1}` : today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
  return `${year}-${month}-${date}`;
}

export function initializeTimes(todayDate) {
  return { [todayDate]: ALL_AVAILABLE_TIMES };
}

function Main(props) {
  const products = props.products;
  const ratings = props.ratings;
  const [toggle, setToggle] = useState(false);
  function changeToggle() {
    setToggle(!toggle);
  }
  const [todayDate, setCurrentDate] = useState(getTodayDate());

  function updateDate(nextDate){
    setCurrentDate(nextDate);
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'create_new_date': {
        return {
          ...state,
          [action.payload.date]:action.payload.time
        };
      }
      case 'remove_time': {
        const newState =
        {
          [action.payload.date]:state[action.payload.date].filter(times => times !== action.payload.time)
        }
        return newState;
      }
      default: console.log("Exited switch")
    }
    throw Error('Unknown action: ' + action.type);
  }

  const [availableTimes, dispach] = useReducer(reducer, initializeTimes(todayDate));
  const updateTimes = (selectedDate, selectedTime) => {
    dispach({ type: 'remove_time', payload: { date: selectedDate, time: selectedTime } });
  };
  const createTimes = (selectedDate) => {
    const dateExists = availableTimes[selectedDate];
    if (!dateExists){
      dispach({ type: 'create_new_date', payload: { date: selectedDate, time: ALL_AVAILABLE_TIMES} });
    }
  }

  const [submitted, setSubmitted]=useState(false);


  function submitForm (data){
    if (availableTimes[data.date].includes(data.time) ){
      setSubmitted(true);
    } else {
      setSubmitted(false);
    }
  }


  return (
    <main>
      <div>
        <section id="heroSection" className={`heroSection ${toggle ? "height-fit-content" : ""}`}>
          <article id="articleHeroSection">
            <Heading as="h1">Little Lemon</Heading>
            <Heading as="h2">Chicago</Heading>
            <Text>We are a family owned Mediteranean restaurant, focused on traditional recipes served with a modern twist.</Text>
            <button id="book-button" onClick={changeToggle}>{!toggle ? "Reserve a table" : "Back"}</button>
            {toggle && (
              <BookingPage availableTimes={availableTimes[todayDate]} updateTimes={updateTimes} createTimes={createTimes} todayDate={todayDate} setCurrentDate={updateDate} changeToggle={changeToggle} submitForm={submitForm}/>
            )}
            {submitted && !toggle && (< ConfirmedBooking />)}
          </article>
          <figure>
            <img className="restaurantPicture" src={restaurantFoodImg} alt="restaurant food" />
          </figure>
        </section>
      </div>

      <section className="highlightsSection">
        <article>
          <Heading as="h2" id="products-section">This weeks specials!</Heading>
          <button><Link to="/menu">Online menu</Link></button>
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
      <section className="aboutSection" id="aboutSection">
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