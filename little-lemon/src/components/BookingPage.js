import BookingForm from "./BookingForm";
import { Box, Heading } from "@chakra-ui/react";


const BookingPage = ({availableTimes, updateTimes, createTimes, todayDate, setCurrentDate, changeToggle, submitForm }) => {
    return (
        <div className="booking-page">
            <Heading as="h1" id="booking-section">
            Book a table
            </Heading>
            <Box className="booking-box"><BookingForm availableTimes={availableTimes} updateTimes={updateTimes} createTimes={createTimes} todayDate={todayDate} setCurrentDate={setCurrentDate} changeToggle={changeToggle} submitForm={submitForm} /></Box>
        </div>
    );
  };

export default BookingPage