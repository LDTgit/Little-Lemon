import { Box } from "@chakra-ui/react";

const ConfirmedBooking = (submitted) => {
    return (
        <div className="confirm-booking-page">
            <Box as="h3" id="confirm-booking-section">
                Your booking is confirmed!
            </Box>
        </div>
    );
}
export default ConfirmedBooking;