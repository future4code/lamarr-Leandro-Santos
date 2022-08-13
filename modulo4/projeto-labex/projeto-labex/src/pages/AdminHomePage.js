import React from "react";
import { useNavigate } from "react-router-dom";
import {
  goToBack,
  goToCreateTripPage,
  goToHomePage,
} from "../routes/Coordinator";
import { Buttons } from "./style";

function AdminHomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Painel Administrativo</h2>
      <Buttons
        onClick={() => {
          goToBack(navigate);
        }}
      >
        Voltar
      </Buttons>
      <Buttons
        onClick={() => {
          goToCreateTripPage(navigate);
        }}
      >
        Criar Viagem
      </Buttons>
      <Buttons onClick={() => goToHomePage(navigate)}>Logout</Buttons>
    </div>
  );
}

export default AdminHomePage;
