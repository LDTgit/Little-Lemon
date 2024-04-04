import React from "react";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import TestimonialCard from "./TestimonialCard";
import restaurantFoodImg from '../images/restauranfood.jpg';
import { useState, useReducer} from 'react';
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";


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
    review: "Nulla viverra, ligula sed sodales laoreet, mi lectus bibendum lorem.",
    getImageSrc: () => require("../images/client.jpeg")
  },
  {
    rating: 4,
    name: "Johnny Doe",
    review: "Sed mattis facilisis dolor eu viverra. Proin pellentesque blandit ante.",
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
    review: " Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.",
    getImageSrc: () => require("../images/client.jpeg")
  }
]

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


function Main() {
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
    if (dateExists){
      console.log(dateExists)
    }  else {
      dispach({ type: 'create_new_date', payload: { date: selectedDate, time: ALL_AVAILABLE_TIMES} });
    }
  }

  const [submitted, setSubmitted]=useState(false)

  // const [bookingItems, setBookingItem] = useState({name:'', date:'', date:'', guests:'', time:'', occasion:''});
  // function bookingInfo(name, date, guests, time, occasion){
  //   setBookingItem({
  //     name: name,
  //     date: date,
  //     guests: guests,
  //     time: time,
  //     occasion: occasion
  //   })
  // }

  function submitForm (data){
    console.log(data);
    // console.log(data.name);
    // console.log(data.date);
    // console.log(availableTimes);
    // console.log(availableTimes[data.date]);
    console.log(availableTimes[data.date]);
    console.log(data.time);
    if (availableTimes[data.date].includes(data.time) ){
      setSubmitted(true);
      console.log(availableTimes[data.date]);
      console.log(data.time);
    } else {
      setSubmitted(false);
    }
    // for (let i=0; i<availableTimes[data.date].length; i++){
    //   if (availableTimes[data.date][i] === data.time){
    //     setSubmitted(true);
    //     console.log(availableTimes[data.date][i]);
    //     console.log(data.time);
    //     break;
    //   }
    //   else {
    //     setSubmitted(false);
    //   }
    // }
    // (availableTime[data.date] && )
    // bookingInfo(data.name, data.date, data.guests, data.time, data.occasion);
  }



  return (
    <main>
      <div>
        <section id="heroSection" className={`heroSection ${toggle ? "height-fit-content" : ""}`}>
          <article>
            <Heading as="h1">Little Lemon</Heading>
            <Heading as="h2">Chicago</Heading>
            <Text>We are a family owned Mediteranean restaurant, focused on traditional recipes served with a modern twist.</Text>
            <button id="book-button" onClick={changeToggle}>{!toggle ? "Reserve a table" : "Back"}</button>
            {toggle && (
              <BookingPage availableTimes={availableTimes[todayDate]} updateTimes={updateTimes} createTimes={createTimes} todayDate={todayDate} setCurrentDate={updateDate} changeToggle={changeToggle} submitForm={submitForm}/>
            )}
            {submitted && !toggle && (< ConfirmedBooking submitted={submitted}/>)}
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