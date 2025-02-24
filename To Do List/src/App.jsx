import React, { useState, useEffect } from 'react'
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home  from './components/Home.jsx'
import AddNote  from './components/AddNote.jsx'



function App() {
 
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route index element={<Navigate to="/home" replace />} />
        <Route path='home' element={<Home />}/>
        <Route path='addnotes' element={<AddNote/>}/>
      </Route>
    )
  )
   

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
