import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 42px;
  background: transparent;
  transition: all ease 0.5s;

  &.black {
    background-color: #141414;
  }
`;

export const HeaderLogo = styled.img`
  height: auto;
  width: 92px;
`;

export const Avatar = styled.img`
  height: auto;
  width: 35px;
  border-radius: 5px;
`;

export const LeftSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;

  & .right-side-icons {
    padding: 10px;
    display: flex;
    align-items: center;
  }
`;

export const Menu = styled.nav``;

export const MenuList = styled.ul`
  display: flex;
  font-weight: 400;
  font-size: 14px;
`;

export const MenuItem = styled.li`
  list-style: none;
  & a {
    padding: 10px;
    text-decoration: none;
    color: #fff;
  }
`;
