import React from 'react';
import {Container, HeaderLogo, Avatar, LeftSide, RightSide, Menu, MenuList, MenuItem} from './style';
import { FaBell } from "react-icons/fa";
import { GoGift } from "react-icons/go";
import { CgSearch } from "react-icons/cg";
import { MdArrowDropDown } from "react-icons/md";



export default ({black}) => {
  return (
    <Container className={black ? 'black' : ''}>
      <LeftSide>
        <HeaderLogo src={'https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png'} />
        <Menu>
          <MenuList>
            <MenuItem><a href="#">Inicio</a></MenuItem>
            <MenuItem><a href="#">Séries</a></MenuItem>
            <MenuItem><a href="#">Filmes</a></MenuItem>
            <MenuItem><a href="#">Mais Recentes</a></MenuItem>
            <MenuItem><a href="#">Minha Lista</a></MenuItem>
          </MenuList>
        </Menu>
      </LeftSide>
      <RightSide>
        <div className='right-side-icons'>
          <CgSearch size='25px' />
        </div>
        <div className='right-side-icons'>
          <GoGift size='25px' />
        </div>
        <div className='right-side-icons'>
          <FaBell size='25px' />
        </div>
        <div className='right-side-icons'>
          <Avatar src={'https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png'} />
          <MdArrowDropDown size='25px' />
        </div>
      </RightSide>
    </Container>
  )
}