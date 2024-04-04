import { Alert, AlertIcon, Box } from "@chakra-ui/react";

const ConfirmedBooking = (submitted) => {
    if (submitted === true){
        return (
            <div className="confirm-booking-page">
                <Box as="h3" id="confirm-booking-section">
                Your booking is confirmed!
                </Box>
            </div>
        );
    }
    else {
        return (
            <Alert status='error'>
            <AlertIcon />
              There was an error processing your request
          </Alert>
        )
    }
}
export default ConfirmedBooking;