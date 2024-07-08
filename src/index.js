import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// routes
import Root from "./routes/root"
import PageContactUs from './routes/contactus';


// https://reactrouter.com/en/main/start/overview
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/contact",
    element: <PageContactUs />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals(console.log);
