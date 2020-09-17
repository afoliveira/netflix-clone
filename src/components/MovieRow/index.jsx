import React from 'react';
import {MovieRow} from './styles'


export default ({title, movies}) => {
  
  const urlImg= 'https://image.tmdb.org/t/p/w300'
  
  return (
    <MovieRow>
      <h2>{title}</h2>
      <div className='movieRow-list-area'>
        <div className='movieRow-list'>
          {movies.results.length > 0 && movies.results.map((item, key) => (
            <div className='movieRow-cover'>
              <img src={`${urlImg}${item.poster_path}`} alt={item.original_title} key={key} />
            </div>
          ))}
        </div>

      </div>
    </MovieRow>
  )
}