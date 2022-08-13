import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../routes/Coordinator";
import { Buttons } from "./style";

function CreateTripPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h2> Criar uma nova viagem</h2>

      <ul>
        <input type="text" placeholder="Nome"></input>
        <br />
        <select name="opcoes" id="select">
          <option value="">Escolha um Planeta</option>
          <option value="Terra">Terra</option>
          <option value="Saturno">Saturno</option>
          <option value="outro">Marte</option>
          <option value="outro">Outro</option>{" "}
        </select>{" "}
        <br />
        <input type="date"></input>
        <br />
        <input type="text" placeholder="Descrição"></input>
        <br />
        <input type="text" placeholder="Duração em dias"></input>
        <br />
      </ul>
      <Buttons onClick={() => goToHomePage(navigate)}>Logout</Buttons>
      <Buttons>Criar</Buttons>
    </div>
  );
}

export default CreateTripPage;
