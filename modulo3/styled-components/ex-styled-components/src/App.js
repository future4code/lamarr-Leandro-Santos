import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
   `

const InputUser = styled.input`
  display: flex;
  padding: 5px;
  align-items: center;
  width: 10vw;
  border-radius: 5px;
  margin-right:5px;
 `

const InputMensagem = styled.input`
  display: flex;
  padding: 5px;
  align-items: center;
  width: 40vw;
  border-radius: 5px;  
  margin-right:5px;

`

const Button = styled.button`
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
 margin-left:5px;

`

const ContainerSide = styled.span`
  display: flex;
  background-color: orange;
    width:10vw;
  height:100vh;
  justify-content:space-between;
`
const ContainerCenter = styled.span`
  display: flex;
  width:100%;
  height:4vh;
  justify-content:center;
  margin-bottom:100px;
 `

const TextoLogo = styled.h1`
  display: flex;
  width:100%;
  justify-content: center; 
  
 
`
const ImagemLogo = styled.img`
  display: flex;
  width:60px; 
`


const Footer = styled.footer`
  display: flex;
  color: white;
  position: fixed;
  bottom:0;
  width:100%;
  padding: 0 10px;
  background-color: gray;
  justify-content:center;
  
`



function App() {
  const [user, setUser] = useState("");
  function changeName(event) {
    setUser(event.target.value);
    console.log(user);
  }

  return (
    <div>
      <TextoLogo>WhatsLab <ImagemLogo src="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/5eab0c8d3b34bcc0f12f3ddc_avatar_labenu_branco.png"/></TextoLogo>
        
      <Container>
      <ContainerSide />
      <ContainerCenter>
      <InputUser placeholder="Nome" value={user} onChange={changeName} />
        <InputMensagem placeholder="Mensagem" />
        <Button>Enviar Mensagem</Button>
      </ContainerCenter>
      <ContainerSide />
      </Container>
      <Footer> <p className="p">Copyright by Leandro Lima © 2022</p></Footer>
    </div>
  );
}

export default App;
