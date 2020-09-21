import React from 'react';
import {Feature} from './styles';
import {PlayButton, InfoButton} from '../Buttons/styles';
import {BiInfoCircle, BiPlay} from 'react-icons/bi';


export default ({feature}) => {
  return (
    <Feature image={`https://image.tmdb.org/t/p/original${feature.backdrop_path}`}>
      <div className='feature-vertical'>
        <div className='container-info'>
          <div className='feature-name'>{feature.original_name}</div>
          <div className='feature-description'>
            {feature.overview}
          </div>
          <div className='feature-buttons'>
            <PlayButton href="#">
              <BiPlay size='30px' />
              <div className='button-text'>
                <span>Assistir</span>
              </div>
            </PlayButton>
            <InfoButton>
              <BiInfoCircle size='30px' />
              <div className='separator'></div>
              <span>Mais Informações</span>
            </InfoButton>
          </div>
        </div>
      </div>
    </Feature>
  )
}