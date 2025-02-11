import React from 'react'
// import Header from './components/Header'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import ResultPage from './components/ResultPage'
import Results from './components/Results'
import Home from './components/Home'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/results" element={<Results />} />
        <Route path="/results/:id" element={<ResultPage />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
