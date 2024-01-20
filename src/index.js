import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Artist from './artist_components/Artist_main';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Fans from "./fan_components/fans";
import Report from "./artist_components/report"


const router = createBrowserRouter([
  {
    path: "/artist",
    element: <Artist />,
  },
  {
    path: "/artist/report",
    element: <Report />,
  },
  {
    path: "/fans",
    element: <Fans />,
  },
]);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
