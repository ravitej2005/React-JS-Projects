import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Planets from './Components/Planets/Planets';
import Moons from './Components/Moons/Moons';
import OtherBodies from './Components/OtherBodies/OtherBodies';
import CardInfo from './Components/CardInfo/CardInfo';
import Home from './Components/Home/Home';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/planets/:id" element={<CardInfo />} />
        <Route path="/moons" element={<Moons />} />
        <Route path="/moons/:id" element={<CardInfo />} />
        <Route path="/otherBodies" element={<OtherBodies />} />
        <Route path="/otherBodies/:id" element={<CardInfo />} />
      </Route>
    ),
    {
      basename: '/my-space-explorer', // Set the basename to match the deployment path
    }
  );
  
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
