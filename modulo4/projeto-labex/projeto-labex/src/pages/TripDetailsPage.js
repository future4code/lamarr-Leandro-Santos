import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useProtectedPage from "../hooks/UseProtectedPage";
import { goToBack } from "../routes/Coordinator";
import { Buttons, Card, CentralizerDiv, Header, StyledH2 } from "./style";
import { BASE_URL } from "../constants/constants";
import { useRequestDataGet } from "../hooks/UseRequestData";
import axios from "axios";

function TripDetailsPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  useProtectedPage();
  const token = localStorage.getItem("token");
  const headers = {
    headers: {
      auth: token,
    },
  };

  useEffect(() => {
    axios
      .get(`${BASE_URL}trip/${id}`, {
        headers: {
          auth: token,
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Deu erro: ", error.response);
      });
  }, []);

  const [dataTrip] = useRequestDataGet(`${BASE_URL}trips/`);

  const TripDetails =
    dataTrip &&
    dataTrip.trips.map((data) => {
      return (
        <div key={data.id}>
          <Card key={data.id}>
            <p> {data.planet}</p>
            <p>{data.durationInDays}</p>
            <p>{data.date}</p>
            <p>{data.description}</p>
          </Card>
        </div>
      );
    });

  //Não consegui renderizar o card selecionado da viagem, para seguir a lógica do put dos candidates
  return (
    <div>
      <Header>
        <StyledH2>Detalhes da viagem!</StyledH2>
      </Header>
      <CentralizerDiv>
        {TripDetails}

        <Buttons
          onClick={() => {
            goToBack(navigate);
          }}
        >
          Voltar
        </Buttons>
        <Buttons>Aprovar</Buttons>
        <Buttons>Reprovar</Buttons>
      </CentralizerDiv>
    </div>
  );
}

export default TripDetailsPage;
