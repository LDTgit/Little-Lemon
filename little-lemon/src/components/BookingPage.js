import BookingForm from "./BookingForm";
import { Box, Heading } from "@chakra-ui/react";


const BookingPage = () => {
    return (
        <div className="booking-page">
            <Heading as="h1" id="booking-section">
            Book a table
            </Heading>
            <Box className="booking-box"><BookingForm /></Box>
        </div>
    );
  };

export default BookingPage