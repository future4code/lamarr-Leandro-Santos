import React from "react";
import { useNavigate } from "react-router-dom";
import { goToAdminHomePage, goToBack } from "../routes/Coordinator";

function LoginPage() {
  const navigate = useNavigate();

  return (
    <div>
      <p> LoginPage.js → Para fazermos login como administrador</p>

      <ul>
        <input></input>
        <input></input>       
      </ul>

      <button
        onClick={() => {
          goToBack(navigate);
        }}
      >
        Voltar
      </button>
      <button
        onClick={() => {
          goToAdminHomePage(navigate);
        }}
      >
        Entrar
      </button>
    </div>
  );
}

export default LoginPage;
