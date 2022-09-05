import React from "react";
import { useNavigate } from "react-router-dom";
import { goToBack, goToApplicationFormPage } from "../routes/Coordinator";
import { BASE_URL } from "../constants/constants";
import { useRequestDataGet } from "../hooks/UseRequestData";
import { Buttons, Card, LisTripDiv, Loading } from "./style";

function ListTripsPage() {
  const navigate = useNavigate();

  const [dataTrip, isLoadingUser, erroUser] = useRequestDataGet(
    `${BASE_URL}trips`
  );

  const tripList =
    dataTrip &&
    dataTrip.trips.map((data) => {
      return (
        <LisTripDiv key={data.id}>
          <Card key={data.id}>
            <h2>{data.name}</h2>
            <h3> {data.planet} </h3>
            <p>Duração em dias: {data.durationInDays}</p>
            <p>Data: {data.date}</p>
            <p>{data.description}</p>{" "}
          </Card>
        </LisTripDiv>
      );
    });

  return (
    <LisTripDiv>
      {!isLoadingUser && dataTrip && tripList}
      {!isLoadingUser && !dataTrip && erroUser && erroUser}

      <LisTripDiv>
        <Buttons
          onClick={() => {
            goToBack(navigate);
          }}
        >
          Voltar
        </Buttons>
        <Buttons
          onClick={() => {
            goToApplicationFormPage(navigate);
          }}
        >
          Inscrever-se
        </Buttons>
        <Loading>{isLoadingUser && "...Carregando!!! ...."}</Loading>
      </LisTripDiv>
    </LisTripDiv>
  );
}

export default ListTripsPage;
