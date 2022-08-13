import React from "react";
import { useNavigate } from "react-router-dom";
import { goToBack, goToApplicationFormPage } from "../routes/Coordinator";

import { BASE_URL } from "../constants/constants";
import { useRequestDataGet } from "../hooks/UseRequestData";
import { Buttons, Card, ListTrips } from "./style";

function ListTripsPage() {
  const navigate = useNavigate();

  const [dataTrip, isLoadingUser, erroUser] = useRequestDataGet(
    `${BASE_URL}trips`
  );

  const tripList =
    dataTrip &&
    dataTrip.trips.map((data) => {
      return (
        <ListTrips>
          <Card key={data.id}>
            <h2>{data.name}</h2>
            <h3>{data.planet} </h3>
            <p>{data.durationInDays}</p>
            <p>{data.date}</p>
            <p>{data.description}</p>{" "}
          </Card>
        </ListTrips>
      );
    });

  return (
    <div>
      {isLoadingUser && "...Carregando!!! ...."}
      {!isLoadingUser && dataTrip && tripList}
      {!isLoadingUser && !dataTrip && erroUser && erroUser}

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
    </div>
  );
}

export default ListTripsPage;
