import BookingForm from "./BookingForm";
import { Box, Heading } from "@chakra-ui/react";


const BookingPage = ({availableTimes, updateTimes, todayDate}) => {
    return (
        <div className="booking-page">
            <Heading as="h1" id="booking-section">
            Book a table
            </Heading>
            <Box className="booking-box"><BookingForm availableTimes={availableTimes} updateTimes={updateTimes} todayDate={todayDate}/></Box>
        </div>
    );
  };

export default BookingPage