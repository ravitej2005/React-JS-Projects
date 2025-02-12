import React from 'react'
import { Link } from 'react-router-dom';

function Searches({data,input,setData}) {
  console.log("in searches",data);
  
  if (data!==undefined) {
    return (
      data.Response === "True"
      ? data.Search.map((movie)=>{
        return (
        <Link onClick={()=>{input.target.elements.searchInput.value=''; setData(undefined)}} to={`/results/${movie.imdbID}`}>
        <div className='px-5 h-12 hover:bg-gray-200 active:bg-gray-300 flex justify-between items-center'>
          <p>{movie.Title}</p>
          {movie.Poster!=="N/A" && <img src={movie.Poster} alt="logo" className='h-10' />}
        </div>
        </Link>
      )})
      : <p className='px-5 py-2 hover:bg-gray-200 active:bg-gray-300'>No Results Found</p>
    )
  }
}

export default Searches
