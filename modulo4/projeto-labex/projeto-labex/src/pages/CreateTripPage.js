import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/UseForm";
import { goToBack, goToHomePage } from "../routes/Coordinator";
import { Buttons, CentralizerDiv, Header, StyledH2 } from "./style";
import axios from "axios";
import useProtectedPage from "../hooks/UseProtectedPage";

function CreateTripPage() {
  const navigate = useNavigate();
  useProtectedPage();
  const [form, onChange, clear] = useForm({
    name: "",
    planet: "",
    description: "",
    durationInDays: "",
    date: "",
  });

  // const date = new Date();
  // const day = String(date.getDate()).padStart(2, "0");
  // const month = String(date.getMonth() + 1).padStart(2, "0");
  // const year = date.getFullYear();
  // const currentDate = `${day}/${month}/${year}`;
  // console.log(currentDate);

  const token = localStorage.getItem("token");
  const headers = {
    headers: {
      auth: token,
    },
  };

  const createTrip = (event) => {
    event.preventDefault();

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/leandro-lima-lamarr/trips",
        form,
        headers
      )
      .then((response) => {
        console.log(response.data, alert("Viagem Criada!"));
      })
      .catch((error) => {
        console.log(error);
      });
    clear();
  };

  return (
    <div>
      <Header>
        <StyledH2> Criar uma nova viagem</StyledH2>
      </Header>
      <CentralizerDiv>
        <form onSubmit={createTrip}>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={onChange}
            id="name"
            required
            minLength={3}
            maxLength={25}
            title="O nome da viagem deve ter no mínimo 3 e máximo 15 caracteres"
            placeholder="Nome da viagem"
          ></input>
          <br />
          <select
            placeholder={"Planeta"}
            onChange={onChange}
            value={form.planet}
            name={"planet"}
            type={"text"}
            required
          >
            <option key="Selecione" value="Selecione">
              Selecione um planeta
            </option>
            <option key="Mercúrio" value="Mercúrio">
              Mercúrio
            </option>
            <option key="Vênus" value="Vênus">
              Vênus
            </option>
            <option key="Terra" value="Terra">
              Terra
            </option>
            <option key="Marte" value="Marte">
              Marte
            </option>
            <option key="Júpter" value="Júpter">
              Júpter
            </option>
            <option key="Saturno" value="Saturno">
              Saturno
            </option>
            <option key="Urano" value="Urano">
              Urano
            </option>
            <option key="Netuno" value="Netuno">
              Netuno
            </option>
            <option key="Plutão" value="Plutão">
              Plutão
            </option>
          </select>
          <br />
          <input
            name="date"
            value={form.date}
            onChange={onChange}
            id="date"
            min="2022-08-18"
            max="2100-08-18"
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
            minLength={15}
            maxLength={100}
            type="text"
            title="A descrição deve ter no mínimo 15 e máximo 100 caracteres"
            placeholder="Descrição da viagem"
          ></input>
          <br />
          <input
            name="durationInDays"
            value={form.durationInDays}
            onChange={onChange}
            id="durationInDays"
            required
            type="number"
            min="5"
            max="50"
            placeholder="Duração em dias"
          ></input>
          <br />
          <Buttons onClick={() => goToHomePage(navigate)}>Logout</Buttons>
          <Buttons
            onClick={() => {
              goToBack(navigate);
            }}
          >
            Voltar
          </Buttons>
          <Buttons>Criar</Buttons>
        </form>
      </CentralizerDiv>
    </div>
  );
}

export default CreateTripPage;
