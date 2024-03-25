import { render, fireEvent, screen } from "@testing-library/react";
import {initializeTimes, Main} from './components/Main';
import BookingForm from "./components/BookingForm";


const ALL_AVAILABLE_TIMES = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

const getTodayDate = () => {
    const today = new Date();
    const month = (today.getMonth() + 1) < 10 ? `0${today.getMonth() + 1}` : today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
    return `${year}-${month}-${date}`;
  }

const todayDate = getTodayDate();

test('Renders the BookingForm heading', () => {
  render(<BookingForm availableTimes={ALL_AVAILABLE_TIMES}/>);
  const buttonElement = screen.getByText("Make Your reservation");
  expect(buttonElement).toBeInTheDocument();
})

test('initializeTimes', () => {
    // Call the function with test inputs
    const result = initializeTimes(todayDate);

  // Assert that the function returns the expected value
    expect(result).toEqual({ [todayDate]: ALL_AVAILABLE_TIMES });
})

test('updateTimes', () => {
    const handleSubmit = jest.fn();
    render(<BookingForm availableTimes={ALL_AVAILABLE_TIMES} updateTimes={handleSubmit} todayDate={todayDate}/>);
    const result = screen.getAllByRole('option')[0].textContent;
    fireEvent.click(screen.getByRole('button'));
    expect(handleSubmit).toHaveBeenCalledWith(
      todayDate, result,
    );
})