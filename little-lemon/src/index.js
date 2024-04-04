import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Main from './components/Main';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from "./ErrorPage";
// import ConfirmedBooking from './components/ConfirmedBooking';
import MenuPage from './components/MenuPage';
// import {useState} from 'react';
// import BookingPage from './components/BookingPage';

// function ShowBooking (){
//   const [toggle, setToggle] = useState(false);
//   function changeToggle() {
//     setToggle(!toggle);
//   }
// }
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      // {
      //   path: "booking-confirmation",
      //   element: <ConfirmedBooking />,
      // },
      {
        path: "",
        element: <Main />,
      },
      {
        path: '/menu',
        element: <MenuPage />,
      },
    ],
  },

]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
