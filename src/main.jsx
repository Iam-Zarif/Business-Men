import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Common from './Components/Common/Common';
import Home from './Components/Home/Home';
import BusinessMen from './Components/BusinessMen/BusinessMen';
import Blogs from './Components/Blogs/Blogs';
import Feedback from './Components/Feedback/Feedback';
import BusinessManDetail from './Components/BusinessManDetail/BusinessManDetail';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Common></Common>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "feedback",
        element: <Feedback></Feedback>,
      },

      {
        path: "businessmen",
        element: <BusinessMen></BusinessMen>,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
      },
      {
        path: "details/:id",
        element: <BusinessManDetail></BusinessManDetail>,
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
