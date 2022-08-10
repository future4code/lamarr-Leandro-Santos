import React from "react";
import {useNavigate} from "react-router-dom"
import { goToBack, goToApplicationFormPage } from "../routes/Coordinator";

function ListTripsPage() {
  const navigate = useNavigate();
  return (
    <div>
    <p> ListTripsPage.js → Para vermos todas as viagens</p>
    <button
        onClick={() => {goToBack(navigate)}}
      >
        Voltar
      </button>
      <button
        onClick={() => {
          goToApplicationFormPage(navigate);
        }}
      >
        Inscrever-se
      </button>

    </div>
  );
}

export default ListTripsPage;