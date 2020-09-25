import styled from "styled-components";

export const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "ABEL", sans-serif;
  height: 80vh;

  img {
    width: 250px;
    object-fit: contain;
    background: #1c1c1c;
    padding: 5px;
    border-radius: 5px;

    @media screen and (max-height: 660px) {
      display: none;
    }

    @media screen and (max-width: 370px) {
      width: 180px;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    font-size: 40px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h5 {
    margin-block-start: 0;
    margin-block-end: 0.5rem;
    width: 350px;
    font-size: 20px;

    @media screen and (max-width: 400px) {
      width: 200px;
    }
  }

  input {
    font-family: "ABEL", sans-serif;
    border: none;
    outline: none;
    width: 350px;
    height: 25px;
    margin-bottom: 1.5rem;
    font-size: 20px;
    background: transparent;
    padding: 3px;
    border-bottom: 1.5px solid darkgray;

    @media screen and (max-width: 400px) {
      width: 200px;
    }
  }

  button {
    font-family: "ABEL", sans-serif;
    font-size: 25px;
    font-weight: 500;
    outline: none;
    border-radius: 50px;
    height: 50px;
    :hover {
      cursor: pointer;
      filter: invert(1);
    }

    @media screen and (max-width: 400px) {
      height: 40px;
      font-size: 20px;
    }
  }

  .login-signInButton {
    margin-top: 2rem;
    width: 150px;
    background: #1c1c1c;
    color: #fff;
    border: 1px solid #fff;

    @media screen and (max-width: 400px) {
      width: 100px;
    }
  }

  .login-sregisterButton {
    width: 200px;
    border: 1px solid black;

    @media screen and (max-width: 400px) {
      width: 150px;
    }
  }

  @media screen and (max-height: 490px) {
    h1 {
      font-size: 30px;
    }
  }
`;
