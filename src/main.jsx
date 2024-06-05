import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './pages/App.jsx'
import './styles/staticindex.css'
import ErrorPage from './pages/ErrorPage.jsx';
import MainLayout from './layouts/MainLayout.jsx';
import AboutUs from './pages/AboutUs.jsx';
import PortFolio from './pages/Portfolio.jsx';
import Contact from './pages/Contact.jsx';

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/portfolio",
        element: <PortFolio />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/contactus",
        element: <Contact />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
