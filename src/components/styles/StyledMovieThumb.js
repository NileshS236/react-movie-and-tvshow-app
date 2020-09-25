import styled from "styled-components";

export const StyledMovieThumb = styled.div`
  img {
    width: 100%;
    height: auto;
    border: 1px solid darkgray;
    /* max-height: 350px; */
    transition: all 0.1s;
    object-fit: cover;
    /* border-radius: 20px; */

    /* @media screen and (max-width: 1024px) {
      height: 300px;
    }

    @media screen and (max-width: 768px) {
      height: 350px;
    }

    @media screen and (max-width: 600px) {
      max-height: 300px;
    }

    @media screen and (max-width: 375px) {
      max-height: 450px;
    } */
  }

  .animated:hover {
    opacity: 0.8;
    width: 105%;
    box-shadow: 0 0 15px rgb(0, 0, 0);
  }
`;
