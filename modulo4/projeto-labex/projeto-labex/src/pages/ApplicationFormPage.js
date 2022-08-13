import React from "react";
import { useNavigate } from "react-router-dom";
import { goToBack } from "../routes/Coordinator";
import { Buttons } from "./style";

function ApplicationFormPage() {
  const navigate = useNavigate();
  return (
    <div>
      <h2> Inscreva-se para uma viagem </h2>
      <ul>
        <select name="opcoes" id="select">
          <option value="">Escolha uma Viagem</option>
          <option value="Terra">Terra</option>
          <option value="Saturno">Saturno</option>
          <option value="outro">Marte</option>
          <option value="outro">Outro</option>{" "}
        </select>{" "}
        <br />
        <input type="text" placeholder="Nome"></input>
        <br />
        <input type="number" placeholder="Idade"></input>
        <br />
        <input type="text" placeholder="Por que devemos te escolher?"></input>
        <br />
        <input type="text" placeholder="Profissão"></input>
        <br />
        <select name="opcoes" id="select">
          <option value="">Escolha um País</option>
          <option value="Brasil">Brasil</option>
        </select>{" "}
        <br />
      </ul>
      <Buttons
        onClick={() => {
          goToBack(navigate);
        }}
      >
        Voltar
      </Buttons>
      <Buttons type="submit">Enviar</Buttons>
    </div>
  );
}

export default ApplicationFormPage;
