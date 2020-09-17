import styled from "styled-components";

export const MovieRow = styled.div`
  margin-bottom: 30px;

  & h2 {
    margin: 0px 0px 0px 30px;
  }
  & .movieRow-list-area {
    overflow-x: hidden;
    padding-left: 30px;
  }
  & .movieRow-cover {
    display: inline-block;
    width: 150px;
    cursor: pointer;
    & img {
      width: 100%;
      transform: scale(0.9);
      transition: all ease 0.2s;
      &:hover {
        transform: scale(1);
      }
    }
  }
`;
