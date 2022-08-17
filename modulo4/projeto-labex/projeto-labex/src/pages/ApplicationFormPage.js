import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/UseForm";
import { goToBack } from "../routes/Coordinator";
import { Buttons } from "./style";
import axios from "axios";

function ApplicationFormPage() {
  const navigate = useNavigate();

  const [form, onChange, clear] = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  });

  const subscribe = (event) => {
    event.preventDefault();

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/leandro-lima-lamarr/trips/:id/apply",
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
      <h2> Inscreva-se para uma viagem </h2>

      <form onSubmit={subscribe}>
        <select name="opcoes" id="select">
          <option value="">Escolha uma Viagem</option>
          <option value="Terra">Terra</option>
          <option value="Saturno">Saturno</option>
          <option value="outro">Marte</option>
          <option value="outro">Outro</option>
        </select>{" "}
        <br />
        <input
          name="name"
          value={form.name}
          onChange={onChange}
          id="name"
          required
          type="text"
          placeholder="Digite seu nome"
        />
        <br />
        <input
          name="age"
          value={form.age}
          onChange={onChange}
          id="age"
          required
          type="number"
          placeholder="Digite sua idade"
        />
        <br />
        <input
          name="applicationText"
          value={form.applicationText}
          onChange={onChange}
          id="applicationText"
          required
          type="text"
          placeholder="Por que devemos te escolher?"
        />
        <br />
        <input
          name="profession"
          value={form.profession}
          onChange={onChange}
          id="profession"
          required
          type="text"
          placeholder="Digite sua profissão"
        />
        <br />
        <select name="opcoes" id="select">
          <option value="">Escolha um País</option>
          <option value="Brasil">Brasil</option>
        </select>{" "}
        <br />
        <Buttons
          onClick={() => {
            goToBack(navigate);
          }}
        >
          Voltar
        </Buttons>
        <Buttons type="submit">Enviar</Buttons>
      </form>
    </div>
  );
}

export default ApplicationFormPage;
