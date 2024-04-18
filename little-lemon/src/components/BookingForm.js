import { useEffect, useState } from 'react';
import { Box } from "@chakra-ui/react";
// import { use } from 'express/lib/router';

const BookingForm = ({ availableTimes, updateTimes, createTimes, todayDate, setCurrentDate, changeToggle, submitForm }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState(todayDate);
  const [guests, setGuests] = useState(1);
  const [time, setTime] = useState(availableTimes[0]);
  const [occasion, setOccasion] = useState("Birthday");

  function addGuest() {
    if (guests < 10) {
      setGuests(guests + 1)
    }
  }
  function removeGuest() {
    if (guests > 1) {
      setGuests(guests - 1)
    }
  }

  const firstDate = new Date();
  const secondDate = new Date(todayDate);
  const currentTime = firstDate.getHours();
  firstDate.setHours(0, 0, 0, 0);
  secondDate.setHours(0, 0, 0, 0);
  const hour = time.slice(0, 2);
  // console.log("Current time: ", currentTime);
  // console.log("Selected time: ", hour);

  const handleSubmit = (e) => {
    updateTimes(date, time);
    e.preventDefault();
    // submitAPI(e);
    // setSubmitted(true);
    // setErrors(validateValues(name, date, guests));
    // setSubmitting(true);
    changeToggle();
    submitForm({
      name: name,
      date: date,
      guests: guests,
      time: time,
      occasion: occasion
    })
  }


  function getDateTimes(newDate) {
    setCurrentDate(newDate);
    setDate(newDate);
    createTimes(newDate);
  }

  useEffect(() => {
    setTime(availableTimes[0]);
  }, [availableTimes]);

  function enabledSubmitButton(){
    return <button type="submit" aria-label="On Click">Make Your Reservation</button>
  }

  function disabledSubmitButton(){
    return <button type="submit" disabled>Make Your Reservation</button>
  }

  function SubmitButton() {

    if (name.length <= 2) return disabledSubmitButton();
    if (availableTimes.length <=0) return disabledSubmitButton();
    if (10 < guests || guests < 1) return disabledSubmitButton();
    if ((firstDate > secondDate)) return disabledSubmitButton();
    console.log(secondDate);
    console.log(firstDate);
    if (firstDate.getTime() === secondDate.getTime()){
      if (currentTime >= hour) return disabledSubmitButton();
    }
    return enabledSubmitButton();
  };

  return (
    <Box p={6} rounded="md" id='form-cont'>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className='form-field'>
            <label htmlFor='name'>Name:</label>
            <input required id='name' type='text' placeholder='Name' name='name' value={name}
              onChange={(e) => setName(e.target.value)} />
            {(name.length < 3) ? (
              <p className="error">
                *Names should be at least 3 characters long
              </p>
            ) : null}
          </div>
          <div className='form-field'>
            <label htmlFor='res-date'>Choose date:</label>
            <input id='res-date' type='date' name='res-date' value={date}
              onChange={(e) => getDateTimes(e.target.value)} />
            {(date < todayDate) ? (
              <p className="error">
                *The selected date cannot be before today.
              </p>
            ) : null}
          </div>
          <div className='form-field'>
            <label htmlFor="guests">Number of guests:</label>
            <div id='guestsContainer'>
              <span className="addRemButton" onClick={removeGuest}>-   </span>
              <span>{guests}   </span>
              <span className="addRemButton" onClick={addGuest}>+</span>
            </div>
            {(guests < 1 ?? guests > 10) ? (
              <p className="error">
                *The minimum amount of guests is 1 and the maximim amout is 10.
              </p>
            ) : null}
            {/* <input
              aria-required
              id="guests"
              typeof='number'
              placeholder='1'
              min={1}
              max={10}
              step={1}
              value={guests}
              onChange={handleChange}
            /> */}

          </div>
          <div className='form-field'>
            <label htmlFor="res-time">Choose time:</label>
            <select id="res-time" value={time}
              onChange={(e) => setTime(e.target.value)}>
              {availableTimes.map((time, index) => (
                <option key={index} value={time}>{time}</option>
              ))}
            </select>
            {(hour <= currentTime) ? (
              <p className="error">
                *You cannot book a table for this hour.
              </p>
            ) : null}
          </div>
          <div className='form-field'>
            <label htmlFor="occasion">Occasion:</label>
            <select id="occasion" value={occasion}
              onChange={(e) => setOccasion(e.target.value)}>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </select>
            {(occasion !== "Birthday" && occasion !== "Anniversary") ? (
              <p className="error">
                *Please select the occasion between Birthday and Anniversary.
              </p>
            ) : null}
          </div>

          <SubmitButton />

        </fieldset>
      </form>
    </Box>
  );
};

export default BookingForm