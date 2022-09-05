import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants/constants";
import { useForm } from "../hooks/UseForm";
import { goToHomePage } from "../routes/Coordinator";
import { Buttons, CentralizerDiv, Header, StyledH2 } from "./style";

function LoginPage() {
  const navigate = useNavigate();

  const [form, onChange, clear] = useForm({ email: "", password: "" });

  const logIn = (event) => {
    event.preventDefault();

    axios
      .post(`${BASE_URL}login`, form)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        navigate("/admin/trips/list");
      })
      .catch((error) => {
        alert("E-mail e/ou Senha incorreto", error.message);
      });
    clear();
  };

  return (
    <div>
      <Header>
        <StyledH2>Login</StyledH2>
      </Header>
      <CentralizerDiv>
        <form onSubmit={logIn}>
          <input
            name="email"
            value={form.email}
            onChange={onChange}
            id="email"
            type="email"
            placeholder="Digite seu e-mail"
            pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
            title="O e-mail deve ser o corporativo. Ex: labex@labex.com.br"
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
            pattern="^.{6,10}$"
            title="A senha deve conter no mínimo 6 caracteres"
            required
          />
          <br />

          <Buttons
            onClick={() => {
              goToHomePage(navigate);
            }}
          >
            Voltar
          </Buttons>
          <Buttons type="submit">Entrar</Buttons>
        </form>
      </CentralizerDiv>
    </div>
  );
}

export default LoginPage;
