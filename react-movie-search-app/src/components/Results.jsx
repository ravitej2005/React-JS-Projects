import React from 'react'
import { useLocation } from 'react-router-dom'

function Results() {
  const location = useLocation()
  const data = location.state?.data;
  console.log("in results",data);
  
  return (
    <div>
      
    </div>
  )
}

export default Results
