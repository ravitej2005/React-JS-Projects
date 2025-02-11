import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ResultPage() {
  console.log("In result page");
  const { id } = useParams()
  const [movie , setMovie] = useState(null)
  const [error , setError] = useState(null)
  const [loading , setLoading] = useState(true)
  const [refresh, setRefresh] = useState(false)

  useEffect(()=>{
    async function fetchData(){
      try {
        console.log("In try");
        let response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=10c30bc8`)
        console.log(response);
        let movie = await response.json()
        setMovie(movie)
      } catch (error) {
        console.log("Something went wrong", error);
        setError(error)
      } finally {
        setLoading(false)
      }
    }  
  fetchData()}
    ,[refresh]);

  if (loading) return <p>Loading....</p>
  if (error) {
    return (
      <div>
        <p>Something went wrong...</p>
        <button className='bg-blue-400 text-white p-4 rounded-lg border cursor-pointer' onClick={()=>{setRefresh(!refresh)}}>Refresh</button>
      </div>
    )
  }
  
  return (
    <div className="max-w-3xl mx-auto bg-gray-900 text-white rounded-xl shadow-lg overflow-hidden p-6">
      <div
        className={`grid ${
          movie.Poster ? "grid-cols-2" : "grid-cols-1"
        } gap-6 items-center`}
      >
        {/* Movie Poster */}
        {movie.Poster && (
          <div className="flex justify-center">
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="w-full max-w-xs h-auto rounded-lg shadow-md"
            />
          </div>
        )}

        {/* Movie Information */}
        <div className="space-y-4 text-left">
          <h2 className="text-2xl font-bold">{movie.Title} ({movie.Year})</h2>
          <p className="text-gray-400 text-sm">{movie.Genre} | {movie.Runtime} | {movie.Rated}</p>
          
          <p className="text-gray-300 text-sm">{movie.Plot}</p>
          
          <p className="text-gray-400 text-sm"><strong>Director:</strong> {movie.Director}</p>
          <p className="text-gray-400 text-sm"><strong>Writer:</strong> {movie.Writer}</p>
          <p className="text-gray-400 text-sm"><strong>Actors:</strong> {movie.Actors}</p>
          <p className="text-gray-400 text-sm"><strong>Language:</strong> {movie.Language}</p>
          <p className="text-gray-400 text-sm"><strong>Country:</strong> {movie.Country}</p>
          <p className="text-gray-400 text-sm"><strong>Awards:</strong> {movie.Awards}</p>
          <p className="text-gray-400 text-sm"><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
          <p className="text-gray-400 text-sm"><strong>Box Office:</strong> {movie.BoxOffice}</p>

          {/* Ratings */}
          {movie.Ratings?.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {movie.Ratings.map((rating, index) => (
                <span key={index} className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                  {rating.Source}: {rating.Value}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ResultPage
