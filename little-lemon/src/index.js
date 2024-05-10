import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Main from './components/Main';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from "./ErrorPage";

import MenuPage from './components/MenuPage';

const products = [
  {
    title: "Greek salad",
    price: "$12.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    getImageSrc: () => require(".//images/greek salad.jpg")
  },
  {
    title: "Bruchetta",
    price: "$ 5.99",
    description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    getImageSrc: () => require(".//images/bruchetta.svg").default
  },
  {
    title: "Lemon Dessert",
    price: "$ 5.00",
    description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    getImageSrc: () => require(".//images/lemon dessert.jpg")
  },
  {
    title: "Greek salad 2",
    price: "$12.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    getImageSrc: () => require(".//images/greek salad.jpg")
  },
  {
    title: "Bruchetta 2",
    price: "$ 5.99",
    description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    getImageSrc: () => require(".//images/bruchetta.svg").default
  },
  {
    title: "Lemon Dessert 2",
    price: "$ 5.00",
    description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    getImageSrc: () => require(".//images/lemon dessert.jpg")
  },
]

const ratings = [
  {
    rating: 4,
    name: "John Doe",
    review: "Vestibulum pretium neque quis dui pretium, eu pretium lorem viverra.",
    getImageSrc: () => require(".//images/client.jpeg")
  },
  {
    rating: 5,
    name: "Jane Doe",
    review: "Nulla viverra, ligula sed sodales laoreet, mi lectus bibendum lorem.",
    getImageSrc: () => require(".//images/client.jpeg")
  },
  {
    rating: 4,
    name: "Johnny Doe",
    review: "Sed mattis facilisis dolor eu viverra. Proin pellentesque blandit ante.",
    getImageSrc: () => require(".//images/client.jpeg")
  },
  {
    rating: 5,
    name: "Jannette Doe",
    review: "In aliquam eros neque, ullamcorper placerat tellus porttitor vel.",
    getImageSrc: () => require(".//images/client.jpeg")
  },
  {
    rating: 4,
    name: "Tim Doe",
    review: "Nunc mattis urna non dui ullamcorper, ut feugiat dui cursus.",
    getImageSrc: () => require(".//images/client.jpeg")
  },
  {
    rating: 5,
    name: "Timette Doe",
    review: " Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.",
    getImageSrc: () => require(".//images/client.jpeg")
  }
]

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Main products={products} ratings={ratings}/>,
      },
      {
        path: '/menu',
        element: <MenuPage products={products}/>,
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
