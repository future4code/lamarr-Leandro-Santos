import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/UseForm";
import { goToAdminHomePage, goToBack } from "../routes/Coordinator";
import { Buttons } from "./style";

function LoginPage() {
  const navigate = useNavigate();

  const [form, onChange, clear] = useForm({ email: "", password: "" });

  const logIn = (event) => {
    event.preventDefault();

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/leandro-lima-lamarr/login",
        form
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    clear();
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={logIn}>
        <input
          name="email"
          value={form.email}
          onChange={onChange}
          id="email"
          type="email"
          placeholder="Digite seu e-mail"
          required
        />
        <br />
        <input
          name="password"
          value={form.password}
          onChange={onChange}
          id="password"
          type="password"
          placeholder="Digite sua senha"
          required
        />
        <br />
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
          type="submit"
        >
          Entrar
        </Buttons>
      </form>
    </div>
  );
}

export default LoginPage;
