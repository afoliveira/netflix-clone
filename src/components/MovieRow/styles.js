import styled from "styled-components";

export const MovieRow = styled.div`
  margin-bottom: 30px;

  & .left,
  .right {
    position: absolute;
    width: 42px;
    height: 225px;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    opacity: 0;
    transition: all ease 0.5;
  }

  & .left {
    left: 0;
  }

  & .right {
    right: 0;
  }

  &:hover .left,
  :hover .right {
    opacity: 1;
  }

  & h2 {
    margin: 0px 0px 8px 42.75px;
    font-size: 1.5em;
  }
  & .movieRow-list-area {
    overflow-x: hidden;
    padding-left: 42.75px;
  }

  & .movieRow-list {
    transition: all ease 0.5;
  }

  & .movieRow-cover {
    display: inline-block;
    cursor: pointer;
    width: 400px;
    & img {
      border-radius: 5px;
      width: 100%;
      height: 225px;
      transform: scale(0.98);
      transition: all ease 0.2s;
      &:hover {
        transform: scale(1);
      }
    }
  }
`;
