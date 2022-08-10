import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  justify-content: space-between;
  border: 1px solid lightgray;
  box-shadow: 5px 5px 5px lightgray;
  padding: 5px;
  width: 30vw;
  border-radius: 15px;
  margin: 5% 30% 5%;
  background-image: url(https://i.pinimg.com/originals/c6/15/e3/c615e3687fe7451ff6e4360203f06f86.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  .h1 {
    font-family: "Amatic SC", cursive;
    color: white;
  }
`;

export const Buttons = styled.section`
  padding: 15px;
  display: flex;
  justify-content: space-evenly;
`;
export const ButtonNO = styled.button`
  justify-content: space-between;
  align-items:center;
  border: red 3px double;
  border-radius: 100%;
  color: white;
  padding: 5px;
  cursor: pointer;
  .icon-no {
    width: 100%;
    font-size: 35px;
    color: red;
  }

  :hover {
    background-color: #F87474;
   
  }
`;

export const ButtonYes = styled.button`
  justify-content: space-between;
  border: green 3px double;
  border-radius: 100%;
  align-items: center;
  text-align: center;
  padding: 5px;
  cursor: pointer;
  .icon-yes {
    width: 100%;
    font-size: 35px;
    color: green;
  }

  :hover {
    background-color: lightgreen;
  }
`;
