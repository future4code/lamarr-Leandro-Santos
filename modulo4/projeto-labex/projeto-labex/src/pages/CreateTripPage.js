import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../routes/Coordinator";

function CreateTripPage() {
  const navigate = useNavigate();

  return (
    <div>
      <p>
              CreateTripPage.js → Formulário para o administrador criar uma nova
        viagem
      </p>

      <ul>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
      </ul>
      <button onClick={() => goToHomePage(navigate)}>Logout</button>
      <button>Criar</button>
    </div>
  );
}

export default CreateTripPage;
