import React from 'react'
import { useLocation } from 'react-router-dom'
import Card from './Card';
import { Link } from 'react-router-dom';

function Results() {
  const location = useLocation()
  const data = location.state?.data;
  console.log("in results", data);

  if (data) {
    return (
      data.Response == 'True' 
      ? (<div className='grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-5 px-10'>
        {
          data.Search.map((movie) => {
            return (
              <Link onClick={() => { setData(undefined) }} to={`/results/${movie.imdbID}`}>
                <Card movie={movie} />
              </Link>
            )
          })
        }
      </div>) 
      : <p>{data.Error}</p>
    )
  }
 
}

export default Results
