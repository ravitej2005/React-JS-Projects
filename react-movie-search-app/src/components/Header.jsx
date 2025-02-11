import React, { useState } from 'react'
import Searches from './Searches'
import { Link, useNavigate } from 'react-router-dom';

let controller = null;

function Header() {
  const [data, setData] = useState(undefined)
  const [input, setInput] = useState('')
  const navigate = useNavigate()

  async function SearchResults(e) {
    if (controller) {
      console.log(`🔴 Aborting previous request...`);
      controller.abort();
    }
    controller = new AbortController();
    const signal = controller.signal;
    console.log("In async func");
    
    try {
      setInput(e.target.value)
      
      let str = e.target.value.trim()
      if (str) {
        const search = str.toLowerCase()
        let response = await fetch(`https://www.omdbapi.com/?s="${search}"&apikey=10c30bc8`, { signal })
        let data = await response.json()
        setData(data)
      } else {
        setData(undefined)
      }
    } catch (error) {
      if (error.name === "AbortError") console.log(`Request aborted!`)
      else console.error("Something went wrong!", error)
    }

  }

  function displayResults(){
    console.log(input);
    if(input.trim()!=='') navigate("/results", { state: { data } });  
    setData(undefined)
  }

  return (
    <div className='flex items-center p-4 flex-wrap justify-center '>
      <img src="https://i.postimg.cc/J0pwvPPN/72195644-8c07-4f50-8301-b4b2ce10f136-removebg-preview.png" alt="Logo" className='h-18 ' />
      <div className='grow flex justify-center'>
        <div className='w-full max-w-md relative'>
          <input type="text" placeholder="Search..." className='border p-3 focus:outline-1 w-full rounded-l-full' onChange={SearchResults} />
          <div className='w-full rounded-lg mt-1 absolute bg-gray-100 overflow-x-hidden top-full z-10'>
            <Searches data={data} setData={setData} />
          </div>
        </div>
          <button onClick={displayResults} className='bg-gray-100 border p-3 px-5 hover:bg-gray-200 active:bg-gray-300 rounded-r-full '>Search</button>
      </div>
    </div>
  )
}

export default Header
