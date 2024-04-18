import { render, fireEvent, screen } from "@testing-library/react";
import {initializeTimes} from './components/Main';
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
let yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);

test('Renders the BookingForm heading', () => {
  render(<BookingForm availableTimes={ALL_AVAILABLE_TIMES}/>);
  const buttonElement = screen.getByText("Make Your Reservation");
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
    const doNothing = jest.fn();
    render(<BookingForm availableTimes={ALL_AVAILABLE_TIMES} updateTimes={handleSubmit} todayDate={todayDate} changeToggle={doNothing} submitForm={doNothing}/>);
    const result = screen.getAllByRole('option')[0].textContent;
    const input = screen.getByLabelText('Name:');
    fireEvent.change(input, {target: {value: 'Laura'}})
    fireEvent.click(screen.getByRole('button'));
    expect(handleSubmit).toHaveBeenCalledWith(
      todayDate, result,
    );
})

test('Will not call onClick when name is shorter than 3', () => {
  const handleSubmit = jest.fn();
  const doNothing = jest.fn();
  render(<BookingForm availableTimes={ALL_AVAILABLE_TIMES} updateTimes={handleSubmit} todayDate={todayDate} changeToggle={doNothing} createTimes={doNothing} submitForm={doNothing}/>);
  const button = screen.getByText("Make Your Reservation")
  const input = screen.getByLabelText('Name:');
  fireEvent.change(input, {target: {value: 'La'}})
  fireEvent.click(screen.getByRole('button'));
  expect(handleSubmit).toHaveBeenCalledTimes(0)
  expect(button).toHaveProperty('disabled', true)
})

test('Will not call onClick when date is before today', () => {
  const handleSubmit = jest.fn();
  const doNothing = jest.fn();
  render(<BookingForm availableTimes={ALL_AVAILABLE_TIMES} updateTimes={handleSubmit} todayDate={todayDate} setCurrentDate={doNothing} createTimes={doNothing} changeToggle={doNothing} submitForm={doNothing}/>);
  const inputName = screen.getByLabelText('Name:');
  fireEvent.change(inputName, {target: {value: 'Laura'}});
  const button = screen.getByText("Make Your Reservation");
  const input = screen.getByLabelText('Choose date:');
  fireEvent.focus(input);
  // console.log(input);
  // console.log(yesterday);
  fireEvent.change(input, { target: { value: yesterday } });
  fireEvent.click(screen.getByRole('button'));
  expect(handleSubmit).toHaveBeenCalledTimes(0);
  expect(button).toHaveProperty('disabled', true);
})

test('Will not call onClick when selected time is before current time', () => {
  const handleSubmit = jest.fn();
  const doNothing = jest.fn();
  render(<BookingForm availableTimes={ALL_AVAILABLE_TIMES} updateTimes={handleSubmit} todayDate={todayDate} setCurrentDate={doNothing} createTimes={doNothing} changeToggle={doNothing} submitForm={doNothing}/>);
  const button = screen.getByText("Make Your Reservation");
  const input = screen.getByLabelText('Choose time:');
  fireEvent.focus(input);
  fireEvent.change(input, { target: { value: '06:00' } });

  const inputName = screen.getByLabelText('Name:');
  fireEvent.change(inputName, {target: {value: 'Laura'}});

  fireEvent.click(screen.getByRole('button'));
  expect(handleSubmit).toHaveBeenCalledTimes(0);
  expect(button).toHaveProperty('disabled', true);
})


test('Will call onClick when inputs are correct', () => {
  const handleSubmit = jest.fn();
  const doNothing = jest.fn();
  render(<BookingForm availableTimes={ALL_AVAILABLE_TIMES} updateTimes={handleSubmit} todayDate={todayDate} setCurrentDate={doNothing} createTimes={doNothing} changeToggle={doNothing} submitForm={doNothing}/>);

  const inputName = screen.getByLabelText('Name:');
  fireEvent.change(inputName, {target: {value: 'Laura'}});
  const inputDate = screen.getByLabelText('Choose date:');
  fireEvent.focus(inputDate);
  fireEvent.change(inputDate, { target: { value: '2025-04-17' } });

  const button = screen.getByText("Make Your Reservation");
  fireEvent.click(screen.getByRole('button'));
  expect(handleSubmit).toHaveBeenCalledTimes(1);
  expect(button).toHaveProperty('disabled', false);
})