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
import About from './routes/about';
import Index from './routes/index';
import Login from './routes/Login';
import Register from './routes/Register';
import FruitsApp from './Examples/Context/FruitsApp';
import ThemeWrapper from './Context/ThemeWrapper';
import StyledComponent from './Examples/StyledComponent';
// create router
const router = createBrowserRouter([
  {
    path: "/",
    // element: <RefactoredApp />
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
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

  <ThemeWrapper>

    <React.StrictMode>
      {/* <RefactoredApp /> */}
      <RouterProvider router={router} />
      {/* <FruitsApp/> */}
      {/* <StyledComponent/> */}
    </React.StrictMode>

  </ThemeWrapper>
);


