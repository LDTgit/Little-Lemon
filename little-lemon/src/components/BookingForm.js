import { useState } from 'react';
// import useSubmit from "../hooks/useSubmit";
import { Box } from "@chakra-ui/react";


const BookingForm = ({availableTimes, updateTimes, todayDate}) => {

  const [name, setName] = useState("");
  const [date, setDate] = useState(todayDate);
  const [guests, setGuests] = useState(1);
  const [time, setTime] = useState(availableTimes[0]);
  const [occasion, setOccasion] = useState("Birthday")


  const handleSubmit = (e) => {
    updateTimes(date, time);
    e.preventDefault();
    console.log({
      name: name,
      date: date,
      guests: guests,
      time: time,
      occasion: occasion
    })
  }

  // const {isLoading, response, submit} = useSubmit();

  return (
    <Box p={6} rounded="md" id='form-cont'>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className='form-field'>
            <label htmlFor='name'>Name:</label>
            <input id='name' type='text' placeholder='Name' name='name' value={name}
              onChange={(e) => setName(e.target.value)} />
          </div>
          <div className='form-field'>
            <label htmlFor='res-date'>Choose date:</label>
            <input id='res-date' type='date' name='res-date' value={date}
              onChange={(e) => setDate(e.target.value)} />
          </div>
          <div className='form-field'>
            <label htmlFor="guests">Number of guests</label>
            <input
              id="guests"
              typeof='number'
              placeholder='1'
              min={1}
              max={10}
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            />
          </div>
          <div className='form-field'>
            <label htmlFor="res-time">Choose time:</label>
            <select id="res-time" value={time}
              onChange={(e) => setTime(e.target.value)}>
              {availableTimes.map((time, index) => (
                <option key={index} value={time}>{time}</option>
              ))}
            </select>
          </div>
          <div className='form-field'>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion}
              onChange={(e) => setOccasion(e.target.value)}>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </select>
          </div>

          <button type="submit"> Make Your reservation </button>

        </fieldset>
      </form>
    </Box>
  );
};

export default BookingForm