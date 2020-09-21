import styled from "styled-components";

export const PlayButton = styled.a`
  background-color: #fff;
  color: #000;
  text-decoration: none;
  border-radius: 4px;
  padding: 9px 27px 9px 23px;
  margin: 0px 12px 12px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.7);
  }
`;

export const InfoButton = styled.button`
  background-color: rgba(109, 109, 110, 0.7);
  color: #fff;
  font-size: 18px;
  border: none;
  border-radius: 4px;
  padding: 9px 27px 9px 23px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 12px 12px 0;
  &:hover {
    background-color: rgba(109, 109, 110, 0.2);
  }
`;
