import styled from "styled-components";

export const StyledNavLinks = styled.div`
  height: auto;
  width: 100%;
  margin: auto;
  background: #1c1c1c;

  ul {
    list-style: none;
    margin-left: auto;
    color: #fff;
    display: flex;
    justify-content: flex-start;

    li {
      padding: 5px 15px;
      font-family: "ABEL", sans-serif;
      font-size: 25px;
      height: 35px;
      text-align: end;
      margin: 10px;
      border-radius: 40px;

      :hover {
        background: #fff;
        color: #1c1c1c;
      }
    }
    .selected {
      background: #fff;
      color: #1c1c1c;
    }
  }
`;
