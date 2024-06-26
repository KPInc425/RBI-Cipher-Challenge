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
import Contact from './pages/Contact.jsx';
import Challenges from './pages/ChallengesPage.jsx';
import WhatTheSonar from './pages/WhatTheSonar.jsx';
import CodingChallengeWarmup from './pages/CodingChallengeWarmup.jsx';
import CommunityProgrammingChallenge from './pages/CommunityProgrammingChallenge.jsx';

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
        path: "/challenges",
        element: <Challenges />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/contactus",
        element: <Contact />,
      },
      {
        path: "/what-the-sonar",
        element: <WhatTheSonar />,
      },
      {
        path: "/coding-challenge-warmup",
        element: <CodingChallengeWarmup />,
      },
      {
        path: "/community-programming-challenge",
        element: <CommunityProgrammingChallenge />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
