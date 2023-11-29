import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from "./MovieList"
import Loading from './Loading'




const GptMovieSuggestions = () => {
  const gpt = useSelector((store) => store.gpt);
  const { movieResults, movieNames, isFetching, searchQueryErrorMsg } = gpt;

  if (isFetching && !movieNames) {
    return (
      <div className='p-4 m-4 bg-green-600 text-white bg-opacity-90 text-center'>
        <Loading />
      </div>
    );
  }

  if (searchQueryErrorMsg) {
    return (
      <div className='p-4 m-4 bg-red-600 text-white bg-opacity-90 text-center '>
        <h1>{searchQueryErrorMsg}</h1>
      </div>
    );
  }

  if (!movieNames) {
    return null; // No message displayed on initial load if no error or movies yet
  }

  return (
    <div className='p-4 m-4 bg-black text-white bg-opacity-90'>
      <div>
        {movieNames.map((movieName, index) => {
          const movieResult = movieResults[index]?.results || [];
          return (
            <MovieList
              key={index}
              title={movieName}
              movies={movieResult}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;





