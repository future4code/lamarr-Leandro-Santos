import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border: 1px solid gray;

   `
const InputUser = styled.input`
  display: flex;
  padding: 5px;
  align-items: center;
  width: 10vw;
  border-radius: 5px;
  margin-left:5px;
  margin-right:5px;
  font-weight:bold;

   `

const InputMessage = styled.input`
  display: flex;
  padding: 5px;
  align-items: center;
  width: 40vw;
  border-radius: 5px;  
  margin-right:5px;
  
`

const Button = styled.button`
  padding:6px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #D0C9C0;
  background-color: #EEEEEE;
  color:#FF5F00;
 font-weight:bold;
 :hover{
  background-color:#97DBAE;
 }
 margin-right:5px;
`

const ContainerSide = styled.span`
  display: flex;
  background-color: #FFB562;
    width:40vw;
  height:100vh;
  justify-content:space-between;
  border: 1px solid gray;    
`
const ContainerCenter = styled.span`
  display: flex;
  width:100%;
  height:4vh; 
  justify-content:center;
  align-items:flex-end;
     
 `

const Map = styled.span`
display: flex;
align-items:center;
flex-direction: column;
margin-bottom:60px;

`
const Inputs = styled.div`
  display: flex;
  width:100%; 
`

 const TextLogo = styled.h1`
  display: flex;
  width:100%;
  justify-content: center; 
  
`
const ImgLogo = styled.img`
  display: flex;
  width:60px; 
`

const Footer = styled.footer`
  display: flex;
  color: white;
  width:100%;
  padding: 0 10px;
  background-color: gray;
  justify-content:center;
  
`

function App() {
  //estates
  const [inputUser, setInputUser] = useState("")
  const [inputMessage, setInputMessage] = useState("")
  const [app, setApp] = useState([
  
  ])

  //events
  const handleInputUser = (e) => {
    setInputUser(e.target.value)
  }
  
  const handleInputMessage = (e) => {
    setInputMessage(e.target.value)
  }
 
  //adicionar menssagem

  const addMessage= () => {
    
    const newMessage = {user:inputUser, message: inputMessage}
    const newFeedMessage = [...app, newMessage]
    setApp(newFeedMessage)
  }

  const arrayApp= app.map((element, index)=>{
    return(
      <div>        
        <b> {element.user}:</b> 
      {element.message}        
      </div>
       );
    
    });
    
  return (
      <div>
        
      <TextLogo>WhatsLab <ImgLogo src="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/5eab0c8d3b34bcc0f12f3ddc_avatar_labenu_branco.png"/></TextLogo>
        
      <Container>
       <ContainerSide />
      <ContainerCenter>     
        <div>
     <Map>{arrayApp}</Map>
          
       <Inputs>
      <InputUser placeholder="Nome" value={inputUser} onChange={handleInputUser}/>
      <InputMessage placeholder="Mensagem" value={inputMessage} onChange={handleInputMessage}/>
        <Button onClick={addMessage}>Enviar</Button>
        </Inputs>
        </div>
             </ContainerCenter>
      <ContainerSide />   
      </Container>
      <Footer> <p className="p">Copyright by Leandro Lima © 2022</p></Footer>
    </div>
  );
}

export default App;