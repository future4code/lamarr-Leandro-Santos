import React from "react";
import { useNavigate } from "react-router-dom";
import { goToAdminHomePage, goToBack } from "../routes/Coordinator";
import { Buttons } from "./style";

function LoginPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Login</h2>

      <ul>
        <input type="text" placeholder="Digite seu e-mail"></input>
        <br />
        <input type="password" placeholder="Digite sua senha"></input>
        <br />
      </ul>

      <Buttons
        onClick={() => {
          goToBack(navigate);
        }}
      >
        Voltar
      </Buttons>
      <Buttons
        onClick={() => {
          goToAdminHomePage(navigate);
        }}
      >
        Entrar
      </Buttons>
    </div>
  );
}

export default LoginPage;
