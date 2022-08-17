import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/UseForm";
import { goToHomePage } from "../routes/Coordinator";
import { Buttons } from "./style";
import axios from "axios";


function CreateTripPage() {
  const navigate = useNavigate();

  const [form, onChange, clear] = useForm({
    name: "",
    planet:"",
    description: "",
    durationInDays: "",
    date: "",
  });

  const createTrip = (event) => {
    event.preventDefault();

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/leandro-lima-lamarr/trips",
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
      <h2> Criar uma nova viagem</h2>

      <form onSubmit={createTrip}>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={onChange}
          id="name"
          required
          placeholder="Nome da viagem"
        ></input>
        <br />
        <select name="opcoes" id="select">
          <option value=""> </option>
          <option value="Terra">Terra</option>
          <option value="Saturno">Saturno</option>
          <option value="outro">Marte</option>
          <option value="outro">Outro</option>{" "}
        </select>{" "}
        <br />
        <input
          name="date"
          value={form.date}
          onChange={onChange}
          id="date"
          required
          type="date"
        ></input>
        <br />
        <input
          name="description"
          value={form.description}
          onChange={onChange}
          id="description"
          required
          type="text"
          placeholder="Descrição da viagem"
        ></input>
        <br />
        <input
          name="durationInDays"
          value={form.durationInDays}
          onChange={onChange}
          id="durationInDays"
          required
          type="text"
          placeholder="Duração em dias"
        ></input>
        <br />
      <Buttons onClick={() => goToHomePage(navigate)}>Logout</Buttons>
      <Buttons>Criar</Buttons>
      </form>
    </div>
  );
}

export default CreateTripPage;
