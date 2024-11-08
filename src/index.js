import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import RefactoredApp from './RefactoredApp'
import Contact from './routes/contact';
import ErrorPage from './error-page';
// Routers
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// routes
import Root from './routes/root';
import Home from './routes/Home';
// create router
const router = createBrowserRouter([
  {
    path: "/",
    // element: <RefactoredApp />
    element : <Root/>,
    errorElement :<ErrorPage/>,
    children : [
      {
        path : "home" ,
        element : <Home/>,
      },
      {
        path : "Contact" ,
        element : <Contact/>,
      }
    ]
  },
  // {
  //   path : "home" ,
  //   element : <Home/>,
  // },
  // {
  //   path : "Contact" ,
  //   element : <Contact/>,
  // }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <RefactoredApp /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);


