import React, { useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home  from './components/Home.jsx'
import AddNote  from './components/AddNote.jsx'



function App() {
  
  const [Notes, setNotes] = useState([{
    title: "Finish React Project",
    desc: "Complete the final touches on the React app and deploy it.",
    datetime: "2025-03-10T14:00",
    priority: "High",
    type: "Work",
    canEdit: false,
  },
  {
    title: "Study for Exams",
    desc: "Revise data structures and algorithms for the upcoming test.",
    datetime: "2025-03-15T10:00",
    priority: "Medium",
    type: "Study",
    canEdit: false,
  },
  {
    title: "Grocery Shopping",
    desc: "Buy vegetables, fruits, and snacks for the week.",
    datetime: "2025-03-08T17:00",
    priority: "Low",
    type: "Personal",
    canEdit: false,
  },
  {
    title: "Team Meeting",
    desc: "Discuss project updates and assign new tasks.",
    datetime: "2025-03-11T09:30",
    priority: "High",
    type: "Work",
    canEdit: false,
  },
  {
    title: "Watch New Anime Episode",
    desc: "Check out the latest episode of One Piece.",
    datetime: "2025-03-09T21:00",
    priority: "Low",
    type: "Personal",
    canEdit: false,
  },
])
  console.log(Notes);
  
  

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home Notes={Notes} setNotes={setNotes}/>}/>
        <Route path='home' element={<Home Notes={Notes} setNotes={setNotes}/>}/>
        <Route path='addnotes' element={<AddNote setNotes={setNotes}/>}/>
      </Route>
    )
  )
   

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
