import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
    },
    {
        path: '/error',
        element: <ErrorPage />,
      },

  ]);

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );