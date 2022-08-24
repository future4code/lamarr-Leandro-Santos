import styled from "styled-components";

//      STYLED GENERAL
export const CentralizerDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  height: 50vh;
  align-items: center;
  text-align: center;
  justify-content: center;
  h2 {
    font-size: 40px;
    text-align: center;
    align-items: center;
  }
  input {
    width: 25vw;
    text-align: center;
    align-items: center;
    border-radius: 10px;
    padding: 7px;
    margin: 7px;
    font-size: 15px;
    color: black;
    border: 1px solid #eeeeee;
    border-bottom: 5px solid #383838;
  }
  fieldset {
    text-align: center;
    align-items: center;
    border-radius: 5px;
    padding: 20px;
    margin: 7px;
    font-size: 15px;
    border: 1px solid lightgray;
  }
  select {
    width: 26vw;
    text-align: center;
    align-items: center;
    border-radius: 10px;
    padding: 7px;
    margin: 7px;
    font-size: 15px;
    color: black;
    border: 1px solid #eeeeee;
    border-bottom: 5px solid #383838;
  }
`;

export const Buttons = styled.button`
  font-family: 'Silkscreen', cursive;
  font-size: 20px;
  background-color: #222;
  color: #fff;
  border-radius: 100px;  
  cursor: pointer; 
  padding: 10px ;
  display: inline-block;
  margin: 20px;  
  justify-content: center;
  align-items: center;
}
:disabled {
  pointer-events: none;
}

:hover {
   box-shadow: rgba(10, 10, 10, 25) 0 10px 15px;
   transform: translateY(-2px);
 }
 
 :active {
   box-shadow: none;
   transform: translateY(0);
   `;

export const StyledH2 = styled.h2`
  font-size: 40px;
  text-align: center;
  align-items: center;
  padding: 0 15px 0 15px;
`;

export const Loading = styled.div`
  font-size: 100px;
  width: 80vw;   
  
  justify-content: center;
  text-align: center;
  align-items: center;
  color: whitesmoke;
  background-color: rgb(69, 15, 15);
  background: radial-gradient(
    circle,
    rgba(69, 15, 15, 1) 4%,
    rgba(50, 50, 50, 1) 44%,
    rgba(0, 0, 0, 1) 62%
  );
  border-radius: 10px;
`;

export const Header = styled.div`
  background-image: url(https://www.emerstone.com/wp-content/uploads/2016/12/Black-Galaxy-Full-Slab.jpg);
  background-size: cover;
  background-repeat: repeat;
  display: inline-block;
  height: 20vh;
  width: 100vw;
  text-align: center;
  align-items: center;
  color: white;
  margin-bottom: 10vh;
`;

//          HOME PAGE
export const HomeDiv = styled.div`
  background-image: url(https://www.emerstone.com/wp-content/uploads/2016/12/Black-Galaxy-Full-Slab.jpg);
  background-size: cover;
  background-repeat: repeat;
  height: 40vh;
  text-align: center;
  align-items: center;
  color: white;
  section {
    text-align: center;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 100px;
    font-family: "Silkscreen", cursive;
    footer {
      color: black;
    }
  }
`;
export const HomeSection = styled.section`
  display: flex;
  width: 100vw;
  align-items: center;
  text-align: center;
  font-family: Roboto;
  h1 {
    height: 50vh;
    color: whitesmoke;
    width: 100vw;
    border-radius: 50%;
    margin: 0 auto;
    text-shadow: 0 5px #4a403a;
  }
`;

export const Button = styled.button`
   
  font-family: 'Silkscreen', cursive;
  background-color: #222;
  border-radius: 100px;  
  color: #fff;
  cursor: pointer; 
  margin:60px;
  margin-top: 15vh;
  font-size: 20px;
  padding: 20px ;
  text-align: center; 
  align-items:center; 

}
:disabled {
   pointer-events: none;
 }
 
 :hover {
  box-shadow: rgba(10, 10, 10, 25) 0 10px 15px;
   transform: translateY(-2px);
 }
 
 :active {
   box-shadow: none;
   transform: translateY(0);
 `;

//LIST TRIPS

export const LisTripDiv = styled.div`
  flex-wrap: wrap;
  display: flex;
  width: 100vw;
  align-items: center;
  text-align: center;
  justify-content: center;
  h2 {
    text-align: center;
    align-items: center;
  }
`;

export const Card = styled.section`
  background: rgb(50, 50, 50);
  background: radial-gradient(
    circle,
    rgba(50, 50, 50, 1) 39%,
    rgba(0, 0, 0, 1) 100%
  );
  color: white;
  text-align: center;
  align-items: center;
  margin-bottom: 50px;
  margin: 20px;
  padding: 10px;
  width: 30vw;
  border-radius: 10px;
  box-shadow: 0px 6px 10px rgba(15, 15, 15, 0.65);
  transition: all 0.2s;
  h2 {
    text-decoration: underline;
    color: white;
  }
  p,
  h2,
  h3 {
    color: white;
  }
`;
//APPLICATION FORM PAGE

export const FormDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  align-items: center;
  text-align: center;
  justify-content: center;
`;
