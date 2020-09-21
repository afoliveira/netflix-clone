import styled from "styled-components";

export const Feature = styled.section`
  height: 100vh;
  background-size: cover;
  background-position: "center";
  background-image: url(${({ image }) => image});
  padding-top: 70px;

  & .container-info {
    width: 38%;
    position: absolute;
    bottom: 25%;
    padding-left: 42.75px;
  }

  & .feature-name {
    font-size: 40px;
  }

  & .feature-description {
    font-size: 1.4vw;
    letter-spacing: normal;
    font-weight: 400;
    line-height: normal;
    margin: 16px 0px;
  }

  & .feature-buttons {
    display: flex;

    & .separator {
      width: 8px;
      height: 10px;
    }
  }

  & .feature-vertical {
    width: inherit;
    height: inherit;
    background: linear-gradient(to top, #111, transparent);
  }
`;
