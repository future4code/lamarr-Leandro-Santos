import React from "react";
import "./App.css";
import CardGrande from "./components/CardGrande/CardGrande";
import ImagemButton from "./components/ImagemButton/ImagemButton";
import CardPequeno from "./components/CardPequeno/CardPequeno";

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://avatars.githubusercontent.com/u/96210622?s=400&u=c0cba199c397a98fc8e28449dcaa8d6b5479c4da&v=4"
          nome="Leandro Lima"
          descricao="Oi, eu sou o Leandro. Sou sou formado em Administração de empresas e a atualmente me dedico a estudar programação, com objetivo de migrar de carreira. Estou muito feliz com meu desenvoolvimento e aprendizado!"
        />

        <ImagemButton
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png"
          texto="Ver mais"
        />

      </div>

      <div className="page-section-contact">
      <CardPequeno 
      imagem="https://th.bing.com/th/id/R.1eb20360ee089c7e68e1c5c07ed5c32f?rik=Q7WvVG2KUW4ixg&pid=ImgRaw&r=0" 
      texto= "Email: leandrolsadm@gmail.com"/>
      </div>
      <div className="page-section-contact">
      <CardPequeno 
      imagem="https://th.bing.com/th/id/OIP.P3CbEG9eubKFP2EOy_pjAQHaHZ?pid=ImgDet&rs=1" 
      texto="Endereço: Campina Grande - PB, Brasil" />      
      </div>
          

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
          nome="Labenu"
          descricao="Formando em FullStack Developer através do Bootcamp Labenu."
        />

        <CardGrande
          imagem="https://th.bing.com/th/id/R.d372734297054c5d5970f608abb375ee?rik=AODXL4xcO2EOtg&pid=ImgRaw&r=0&sres=1&sresct=1"
          nome="Administração"
          descricao="Formado em Administração de empresas."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
