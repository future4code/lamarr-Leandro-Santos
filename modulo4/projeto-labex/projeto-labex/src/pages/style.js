import styled from "styled-components";

export const HomeDiv = styled.section`
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
  background-image: url(https://www.emerstone.com/wp-content/uploads/2016/12/Black-Galaxy-Full-Slab.jpg);
  margin-bottom: 50px;
  background-size: 50%;
  background-repeat: repeat;
  display: flex;
  height: 40vh;
  font-family: Roboto;
  font-size: 50px;
  h1 {
    text-align: center;
    align-items: center;
    color: white;
  }
`;

export const Button = styled.button`
  font-family: 'Silkscreen', cursive;
  background-color: #222;
  border-radius: 100px;  
  color: #fff;
  cursor: pointer; 
  margin:50px;
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

export const ListTripsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

export const Card = styled.section`
  text-align: center;
  align-items: center;
  margin: 20px;
  padding: 10px;
  width: 30vw;
  border-radius: 10px;
  box-shadow: 0px 6px 10px rgba(15, 15, 15, 0.65);
  transition: all 0.2s;
  h2 {
    text-decoration: underline;
  }
  p {
    font-size: 18px;
  }
`;

export const Buttons = styled.button`
  font-family: 'Silkscreen', cursive;
  font-size: 15px;
  background-color: #222;
  color: #fff;
  border-radius: 100px;  
  cursor: pointer; 
  padding: 10px ;
  display: inline-block;
  margin: 10px;  
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
