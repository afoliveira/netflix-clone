import React, {useState} from 'react';
import {MovieRow} from './styles'
import { MdNavigateBefore, MdNavigateNext} from "react-icons/md";


export default ({title, movies}) => {
  const [scrollX, setscrollX] = useState(0)


  const urlImg= 'https://image.tmdb.org/t/p/w500/'
  
  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if( x > 0) {
      x = 0
    }
    setscrollX(x);
  }

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = movies.results.length * 400;
    if((window.innerWidth - listW) > x ) {
      x = (window.innerWidth - listW) - 84;
    }
    setscrollX(x);
  }



  return (
    <MovieRow>
      <h2>{title}</h2>
      <div className='left' onClick={handleLeftArrow}>
        <MdNavigateBefore size={'42px'} />
      </div>
      <div className='right' onClick={handleRightArrow}>
        <MdNavigateNext size={'42px'} />
      </div>
      <div className='movieRow-list-area'>
        <div className='movieRow-list' style={{
          marginLeft: scrollX,
          width: movies.results.length * 400
        }}>
          {movies.results.length > 0 && movies.results.map((item, key) => (
            <div key={key} className='movieRow-cover'>
              <img src={`${urlImg}${item.backdrop_path}`} alt={item.original_title} key={key} />
            </div>
          ))}
        </div>
      </div>
    </MovieRow>
  )
}