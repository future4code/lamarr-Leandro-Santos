import { Card } from "../card/Card";
import {Container, ButtonNO, ButtonYes} from "../homepage/style"


export function HomePage(){
  return(
    <Container>
     <h1> Astro<span>Match💘</span> </h1>
      <Card 
      photo={"https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person"}     
      />
      <ButtonNO>No</ButtonNO>
      <ButtonYes>Match</ButtonYes>
    </Container>
    )
}